const fs = require('fs');
const path = require('path');

const sourceDir = './repo/workflows';
const targetDir = './workflows-CONVERTIDOS-A-GRATIS';

// Mapeo de servicios de pago a alternativas gratuitas
const serviceAlternatives = {
  // IA de pago → Alternativas gratuitas
  'openai': {
    free: ['ollama', 'huggingface', 'local-llm'],
    replacement: 'Ollama (LLM local gratuito)',
    instructions: 'Instala Ollama localmente (gratis) o usa Hugging Face API (plan gratuito)',
    url: 'https://ollama.ai',
    nodeChange: {
      from: 'n8n-nodes-base.openai',
      to: 'n8n-nodes-base.httpRequest',
      newConfig: {
        url: 'http://localhost:11434/api/generate',
        method: 'POST'
      }
    }
  },
  'anthropic': {
    free: ['ollama', 'huggingface'],
    replacement: 'Ollama (LLM local gratuito)',
    instructions: 'Instala Ollama localmente con modelos como llama2, mistral, etc.',
    url: 'https://ollama.ai'
  },
  'chatgpt': {
    free: ['ollama', 'huggingface'],
    replacement: 'Ollama con Llama2 o Mistral',
    instructions: 'ollama pull llama2 → gratis y local',
    url: 'https://ollama.ai'
  },

  // Email Marketing de pago → Alternativas gratuitas
  'sendgrid': {
    free: ['gmail-smtp', 'smtp'],
    replacement: 'Gmail SMTP (gratis hasta 500 emails/día)',
    instructions: 'Usa Gmail con SMTP - 500 emails/día gratis',
    nodeChange: {
      from: 'n8n-nodes-base.sendgrid',
      to: 'n8n-nodes-base.emailSend',
      newConfig: {
        fromEmail: 'tu-email@gmail.com',
        transport: 'smtp'
      }
    }
  },
  'mailchimp': {
    free: ['gmail-smtp', 'brevo-free'],
    replacement: 'Brevo (ex-Sendinblue) plan gratuito',
    instructions: 'Brevo ofrece 300 emails/día gratis, o usa Gmail SMTP',
    url: 'https://brevo.com'
  },
  'mailgun': {
    free: ['gmail-smtp', 'smtp'],
    replacement: 'Gmail SMTP',
    instructions: 'Gmail SMTP gratis para volúmenes bajos'
  },

  // CRM de pago → Alternativas gratuitas
  'salesforce': {
    free: ['airtable', 'googlesheets', 'supabase'],
    replacement: 'Airtable (plan gratuito) o Google Sheets',
    instructions: 'Airtable tiene plan gratuito generoso, o usa Google Sheets como base de datos',
    url: 'https://airtable.com'
  },
  'hubspot': {
    free: ['airtable', 'googlesheets', 'nocodb'],
    replacement: 'Airtable o NocoDB (open source)',
    instructions: 'NocoDB es completamente gratis y open source',
    url: 'https://nocodb.com'
  },
  'zendesk': {
    free: ['discord-tickets', 'telegram-bot'],
    replacement: 'Sistema de tickets con Telegram o Discord',
    instructions: 'Crea un bot de soporte en Telegram o Discord (gratis)'
  },

  // Cloud Storage de pago → Alternativas gratuitas
  'aws-s3': {
    free: ['googledrive', 'local-storage'],
    replacement: 'Google Drive (15GB gratis)',
    instructions: 'Google Drive ofrece 15GB gratis',
    nodeChange: {
      from: 'n8n-nodes-base.awsS3',
      to: 'n8n-nodes-base.googleDrive'
    }
  },
  'azure-storage': {
    free: ['googledrive', 'local-storage'],
    replacement: 'Google Drive o almacenamiento local',
    instructions: 'Usa Google Drive API (gratis) o guarda localmente'
  },

  // Procesamiento de pagos → Webhooks gratuitos
  'stripe': {
    free: ['webhook', 'paypal-webhooks'],
    replacement: 'Webhooks para notificaciones',
    instructions: 'Usa webhooks gratuitos para recibir notificaciones de pagos',
    note: 'Para procesar pagos reales necesitas un procesador (Stripe cobra comisión)'
  },
  'paypal': {
    free: ['webhook'],
    replacement: 'PayPal Webhooks (gratis)',
    instructions: 'Los webhooks de PayPal son gratis, solo pagas comisión por transacción'
  },

  // SMS de pago → Alternativas gratuitas
  'twilio': {
    free: ['telegram', 'whatsapp-web', 'discord'],
    replacement: 'Telegram Bot (gratis ilimitado)',
    instructions: 'Telegram bots son 100% gratis y pueden enviar mensajes ilimitados',
    url: 'https://core.telegram.org/bots'
  },
  'vonage': {
    free: ['telegram', 'discord'],
    replacement: 'Telegram Bot',
    instructions: 'Usa Telegram para notificaciones instantáneas (gratis)'
  },

  // Bases de datos cloud de pago → Alternativas gratuitas
  'mongodb-atlas-paid': {
    free: ['mongodb-community', 'postgres', 'supabase'],
    replacement: 'MongoDB Community (gratis) o Supabase',
    instructions: 'MongoDB Community es gratis, o usa Supabase (Postgres gratis)',
    url: 'https://supabase.com'
  },

  // Analytics de pago → Alternativas gratuitas
  'mixpanel': {
    free: ['plausible-ce', 'google-analytics', 'umami'],
    replacement: 'Google Analytics (gratis) o Umami (open source)',
    instructions: 'Google Analytics es gratis, Umami es open source y auto-hospedable',
    url: 'https://umami.is'
  },
  'amplitude': {
    free: ['google-analytics', 'plausible'],
    replacement: 'Google Analytics 4 (gratis)',
    instructions: 'GA4 es completamente gratis'
  }
};

// Crear directorio
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.json'));
console.log(`🔄 Analizando ${files.length} workflows para convertir...\n`);

const converted = [];
const conversionStats = {};

files.forEach(file => {
  try {
    const filePath = path.join(sourceDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const workflow = JSON.parse(content);

    const nodes = workflow.nodes || [];
    const filenameLower = file.toLowerCase();

    // Detectar servicios de pago en el workflow
    const paidServicesUsed = [];
    const conversions = [];

    Object.keys(serviceAlternatives).forEach(paidService => {
      const inFilename = filenameLower.includes(paidService);
      const inNodes = nodes.some(n => {
        const type = (n.type || '').toLowerCase();
        const name = (n.name || '').toLowerCase();
        return type.includes(paidService) || name.includes(paidService);
      });

      if (inFilename || inNodes) {
        paidServicesUsed.push(paidService);
        conversions.push({
          from: paidService,
          to: serviceAlternatives[paidService]
        });

        if (!conversionStats[paidService]) {
          conversionStats[paidService] = 0;
        }
        conversionStats[paidService]++;
      }
    });

    if (conversions.length > 0) {
      // Este workflow puede convertirse
      converted.push({
        file,
        workflow,
        nodes,
        conversions,
        paidServicesUsed
      });
    }

  } catch (error) {
    console.error(`❌ Error procesando ${file}:`, error.message);
  }
});

console.log(`📊 Workflows convertibles encontrados: ${converted.length}\n`);
console.log('🔄 Conversiones disponibles:\n');

Object.entries(conversionStats).sort((a, b) => b[1] - a[1]).forEach(([service, count]) => {
  const alt = serviceAlternatives[service];
  console.log(`   ${count.toString().padStart(3)} workflows: ${service} → ${alt.replacement}`);
});

// Crear estructura de workflows convertidos
console.log(`\n📁 Creando workflows convertidos...\n`);

const categories = {};

converted.forEach(wf => {
  const { file, workflow, nodes, conversions } = wf;

  // Categorizar por tipo de conversión principal
  const mainConversion = conversions[0];
  const categoryName = getCategoryName(mainConversion.from);

  if (!categories[categoryName]) {
    categories[categoryName] = [];
  }
  categories[categoryName].push(wf);
});

Object.entries(categories).forEach(([catName, workflows]) => {
  const catDir = path.join(targetDir, catName);
  if (!fs.existsSync(catDir)) {
    fs.mkdirSync(catDir, { recursive: true });
  }

  workflows.forEach(wf => {
    const { file, workflow, nodes, conversions } = wf;
    const name = workflow.name || file.replace('.json', '');

    // Crear subdirectorio
    const workflowDir = path.join(catDir, file.replace('.json', ''));
    if (!fs.existsSync(workflowDir)) {
      fs.mkdirSync(workflowDir, { recursive: true });
    }

    // Copiar JSON original
    const sourcePath = path.join(sourceDir, file);
    fs.copyFileSync(sourcePath, path.join(workflowDir, file));

    // Generar README con instrucciones de conversión
    let doc = `╔══════════════════════════════════════════════════════════════════╗\n`;
    doc += `║  ${name.substring(0, 62).padEnd(62)}  ║\n`;
    doc += `╚══════════════════════════════════════════════════════════════════╝\n\n`;

    doc += `🔄 WORKFLOW CONVERTIDO A GRATIS\n\n`;

    doc += `📁 Archivo original: ${file}\n`;
    doc += `📂 Categoría: ${catName}\n`;
    doc += `💰 Estado: Convertible a 100% GRATIS\n\n`;

    doc += `═════════════════════════════════════════════════════════════════\n`;
    doc += ` CONVERSIONES NECESARIAS\n`;
    doc += `═════════════════════════════════════════════════════════════════\n\n`;

    conversions.forEach((conv, i) => {
      const alt = conv.to;
      doc += `${i + 1}. REEMPLAZAR: ${conv.from.toUpperCase()}\n`;
      doc += `   ❌ Servicio de pago: ${conv.from}\n`;
      doc += `   ✅ Alternativa GRATIS: ${alt.replacement}\n\n`;

      doc += `   📖 INSTRUCCIONES:\n`;
      doc += `   ${alt.instructions}\n\n`;

      if (alt.url) {
        doc += `   🔗 Más info: ${alt.url}\n\n`;
      }

      if (alt.nodeChange) {
        doc += `   🔧 CAMBIO EN N8N:\n`;
        doc += `   • Nodo original: ${alt.nodeChange.from}\n`;
        doc += `   • Nuevo nodo: ${alt.nodeChange.to}\n`;
        if (alt.nodeChange.newConfig) {
          doc += `   • Nueva configuración:\n`;
          Object.entries(alt.nodeChange.newConfig).forEach(([key, val]) => {
            doc += `     - ${key}: ${val}\n`;
          });
        }
        doc += `\n`;
      }

      if (alt.note) {
        doc += `   ⚠️  NOTA: ${alt.note}\n\n`;
      }

      doc += `   ─────────────────────────────────────────────────────────────\n\n`;
    });

    doc += `═════════════════════════════════════════════════════════════════\n`;
    doc += ` PASOS PARA CONVERTIR A GRATIS\n`;
    doc += `═════════════════════════════════════════════════════════════════\n\n`;

    doc += `📥 PASO 1: Importar el workflow original\n`;
    doc += `   1. Abre n8n → http://localhost:5678\n`;
    doc += `   2. Importa: ${file}\n\n`;

    doc += `🔧 PASO 2: Realizar conversiones\n`;
    conversions.forEach((conv, i) => {
      doc += `   ${i + 1}. ${conv.from} → ${conv.to.replacement}\n`;
    });
    doc += `\n`;

    doc += `⚙️  PASO 3: Configurar servicios gratuitos\n`;
    doc += `   • Instala/configura las alternativas gratuitas\n`;
    doc += `   • Actualiza credenciales en n8n\n`;
    doc += `   • Ajusta endpoints y configuraciones\n\n`;

    doc += `✅ PASO 4: Probar y activar\n`;
    doc += `   • Ejecuta el workflow manualmente\n`;
    doc += `   • Verifica que funciona correctamente\n`;
    doc += `   • Activa el workflow\n\n`;

    doc += `═════════════════════════════════════════════════════════════════\n`;
    doc += ` NODOS DEL WORKFLOW ORIGINAL\n`;
    doc += `═════════════════════════════════════════════════════════════════\n\n`;

    const nodesByType = {};
    nodes.forEach(node => {
      const type = (node.type || 'unknown').replace('n8n-nodes-base.', '');
      if (!nodesByType[type]) {
        nodesByType[type] = [];
      }
      nodesByType[type].push(node.name || 'unnamed');
    });

    Object.keys(nodesByType).sort().forEach(type => {
      doc += `▸ ${type}\n`;
      nodesByType[type].forEach(nodeName => {
        doc += `  └─ ${nodeName}\n`;
      });
    });

    doc += `\n═════════════════════════════════════════════════════════════════\n`;
    doc += ` BENEFICIOS DE LA CONVERSIÓN\n`;
    doc += `═════════════════════════════════════════════════════════════════\n\n`;

    doc += `💰 AHORRO DE DINERO:\n`;
    conversions.forEach(conv => {
      doc += `   • ${conv.from}: Ahorras $$$/mes\n`;
    });

    doc += `\n🔓 VENTAJAS ADICIONALES:\n`;
    doc += `   ✓ Sin límites restrictivos\n`;
    doc += `   ✓ Mayor control de datos\n`;
    doc += `   ✓ Sin dependencia de servicios externos\n`;
    doc += `   ✓ Solución sostenible a largo plazo\n\n`;

    doc += `═════════════════════════════════════════════════════════════════\n`;
    doc += ` RECURSOS ÚTILES\n`;
    doc += `═════════════════════════════════════════════════════════════════\n\n`;

    conversions.forEach(conv => {
      if (conv.to.url) {
        doc += `• ${conv.to.replacement}: ${conv.to.url}\n`;
      }
    });

    doc += `\n═════════════════════════════════════════════════════════════════\n\n`;
    doc += `📅 Convertido: ${new Date().toISOString().split('T')[0]}\n`;
    doc += `🔗 Fuente: https://github.com/oxbshw/ultimate-n8n-ai-workflows\n`;

    fs.writeFileSync(path.join(workflowDir, 'CONVERSIÓN-A-GRATIS.txt'), doc);
  });

  console.log(`   ✅ ${catName}: ${workflows.length} workflows`);
});

// Crear guía maestra de conversiones
let guideDoc = `╔══════════════════════════════════════════════════════════════════════════════╗\n`;
guideDoc += `║                                                                              ║\n`;
guideDoc += `║              🔄 GUÍA MAESTRA DE CONVERSIONES A GRATIS                        ║\n`;
guideDoc += `║              ${converted.length} Workflows Convertibles                                  ║\n`;
guideDoc += `║                                                                              ║\n`;
guideDoc += `╚══════════════════════════════════════════════════════════════════════════════╝\n\n`;

guideDoc += `🎯 OBJETIVO\n`;
guideDoc += `═══════════════════════════════════════════════════════════════════════════════\n\n`;
guideDoc += `Convertir workflows que usan servicios de pago a alternativas 100% GRATUITAS.\n\n`;

guideDoc += `📊 RESUMEN DE CONVERSIONES\n`;
guideDoc += `═══════════════════════════════════════════════════════════════════════════════\n\n`;

Object.entries(conversionStats).sort((a, b) => b[1] - a[1]).forEach(([service, count]) => {
  const alt = serviceAlternatives[service];
  guideDoc += `${count.toString().padStart(3)} workflows:\n`;
  guideDoc += `   ❌ ${service.toUpperCase()}\n`;
  guideDoc += `   ✅ ${alt.replacement}\n`;
  guideDoc += `   📝 ${alt.instructions}\n`;
  if (alt.url) {
    guideDoc += `   🔗 ${alt.url}\n`;
  }
  guideDoc += `\n`;
});

guideDoc += `💡 ALTERNATIVAS GRATUITAS POR CATEGORÍA\n`;
guideDoc += `═══════════════════════════════════════════════════════════════════════════════\n\n`;

guideDoc += `🤖 INTELIGENCIA ARTIFICIAL:\n`;
guideDoc += `   OpenAI/ChatGPT/Claude → Ollama (local, gratis)\n`;
guideDoc += `   • Instala: https://ollama.ai\n`;
guideDoc += `   • Modelos: llama2, mistral, codellama (todos gratis)\n`;
guideDoc += `   • Alternativa: Hugging Face (plan gratuito)\n\n`;

guideDoc += `📧 EMAIL MARKETING:\n`;
guideDoc += `   SendGrid/Mailgun → Gmail SMTP (500/día gratis)\n`;
guideDoc += `   Mailchimp → Brevo (300/día gratis)\n`;
guideDoc += `   • Gmail SMTP es gratis para volúmenes bajos\n`;
guideDoc += `   • Brevo: https://brevo.com (plan gratuito generoso)\n\n`;

guideDoc += `💾 CRM/BASES DE DATOS:\n`;
guideDoc += `   Salesforce/HubSpot → Airtable (plan gratuito)\n`;
guideDoc += `   • Airtable: https://airtable.com\n`;
guideDoc += `   • Alternativa: Google Sheets como base de datos\n`;
guideDoc += `   • Open source: NocoDB (https://nocodb.com)\n\n`;

guideDoc += `☁️  ALMACENAMIENTO:\n`;
guideDoc += `   AWS S3/Azure → Google Drive (15GB gratis)\n`;
guideDoc += `   • Google Drive API es gratis\n`;
guideDoc += `   • Alternativa: Almacenamiento local\n\n`;

guideDoc += `💬 MENSAJERÍA/SMS:\n`;
guideDoc += `   Twilio/Vonage → Telegram Bot (ilimitado gratis)\n`;
guideDoc += `   • Telegram bots: https://core.telegram.org/bots\n`;
guideDoc += `   • Alternativa: Discord webhooks\n\n`;

guideDoc += `📊 ANALYTICS:\n`;
guideDoc += `   Mixpanel/Amplitude → Google Analytics 4 (gratis)\n`;
guideDoc += `   • GA4 es completamente gratis\n`;
guideDoc += `   • Open source: Umami (https://umami.is)\n\n`;

guideDoc += `🛠️  CÓMO USAR ESTA GUÍA\n`;
guideDoc += `═══════════════════════════════════════════════════════════════════════════════\n\n`;

guideDoc += `1. Explora las carpetas por categoría\n`;
guideDoc += `2. Cada workflow tiene un archivo CONVERSIÓN-A-GRATIS.txt\n`;
guideDoc += `3. Sigue las instrucciones paso a paso\n`;
guideDoc += `4. Instala las alternativas gratuitas\n`;
guideDoc += `5. Modifica el workflow en n8n\n`;
guideDoc += `6. ¡Disfruta sin costos!\n\n`;

guideDoc += `📁 Ubicación: ${path.resolve(targetDir)}\n`;
guideDoc += `📅 Generado: ${new Date().toISOString().split('T')[0]}\n`;

fs.writeFileSync(path.join(targetDir, 'GUÍA-MAESTRA.txt'), guideDoc);

console.log(`\n✅ Completado!\n`);
console.log(`📊 Resumen:`);
console.log(`   🔄 Workflows convertibles: ${converted.length}`);
console.log(`   📂 Categorías: ${Object.keys(categories).length}`);
console.log(`   💰 Servicios de pago reemplazables: ${Object.keys(conversionStats).length}`);
console.log(`\n📁 Ubicación: ${path.resolve(targetDir)}`);

function getCategoryName(service) {
  const categoryMap = {
    'openai': 'IA-Convertida-a-Gratis',
    'anthropic': 'IA-Convertida-a-Gratis',
    'chatgpt': 'IA-Convertida-a-Gratis',
    'sendgrid': 'Email-Convertido-a-Gratis',
    'mailchimp': 'Email-Convertido-a-Gratis',
    'mailgun': 'Email-Convertido-a-Gratis',
    'salesforce': 'CRM-Convertido-a-Gratis',
    'hubspot': 'CRM-Convertido-a-Gratis',
    'zendesk': 'Soporte-Convertido-a-Gratis',
    'aws-s3': 'Storage-Convertido-a-Gratis',
    'azure-storage': 'Storage-Convertido-a-Gratis',
    'stripe': 'Pagos-Convertido-a-Gratis',
    'paypal': 'Pagos-Convertido-a-Gratis',
    'twilio': 'Mensajería-Convertida-a-Gratis',
    'vonage': 'Mensajería-Convertida-a-Gratis',
    'mixpanel': 'Analytics-Convertido-a-Gratis',
    'amplitude': 'Analytics-Convertido-a-Gratis'
  };

  return categoryMap[service] || 'Otros-Convertidos-a-Gratis';
}
