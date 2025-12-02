const fs = require('fs');
const path = require('path');

const sourceDir = './repo/workflows';
const targetDir = './workflows-GRATIS';

// Servicios que requieren pago o tienen planes limitados
const paidServices = [
  'openai', 'anthropic', 'claude', 'gpt', 'chatgpt', 'dall-e',
  'hubspot', 'salesforce', 'zendesk', 'intercom',
  'stripe', 'paypal', 'square',
  'aws', 'azure', 'gcp', 'googlecloud',
  'mailchimp', 'sendgrid', 'mailgun',
  'twilio', 'vonage', 'plivo',
  'shopify', 'woocommerce', 'magento',
  'jira', 'confluence', 'asana-premium',
  'notion-api', 'airtable-pro',
  'zapier', 'integromat', 'make',
  'mixpanel', 'amplitude', 'segment'
];

// Servicios completamente gratuitos o con planes gratuitos generosos
const freeServices = [
  'webhook', 'http', 'httprequest',
  'function', 'code', 'set', 'switch', 'if', 'merge', 'split',
  'manual', 'schedule', 'cron', 'wait',
  'telegram', 'discord', 'slack-free',
  'gmail', 'email', 'imap', 'smtp',
  'googlesheets', 'googledrive', 'calendar',
  'postgres', 'mysql', 'mongodb', 'redis', 'sqlite',
  'rss', 'xml', 'json', 'csv',
  'github', 'gitlab', 'git',
  'twitter-free', 'linkedin-free',
  'executecommand', 'bash',
  'datetime', 'crypto', 'xml', 'html',
  'compression', 'crypto', 'markdown'
];

// Crear directorio
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.json'));
console.log(`🔍 Analizando ${files.length} workflows...\n`);

const freeWorkflows = [];
const paidWorkflows = [];
const uncategorized = [];

files.forEach(file => {
  try {
    const filePath = path.join(sourceDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const workflow = JSON.parse(content);

    const nodes = workflow.nodes || [];
    const nodeTypes = nodes.map(n => (n.type || '').toLowerCase()).filter(Boolean);
    const credentials = nodes.flatMap(n => Object.keys(n.credentials || {})).map(c => c.toLowerCase());
    const filenameLower = file.toLowerCase();

    // Analizar si usa servicios de pago
    let usesPaidService = false;
    let paidServicesFound = [];

    for (const paid of paidServices) {
      const inNodeTypes = nodeTypes.some(t => t.includes(paid));
      const inCreds = credentials.some(c => c.includes(paid));
      const inFilename = filenameLower.includes(paid);

      if (inNodeTypes || inCreds || inFilename) {
        usesPaidService = true;
        paidServicesFound.push(paid);
      }
    }

    // Analizar si usa solo servicios gratuitos
    let usesFreeService = false;
    let freeServicesFound = [];

    for (const free of freeServices) {
      const inNodeTypes = nodeTypes.some(t => t.includes(free));
      const inCreds = credentials.some(c => c.includes(free));
      const inFilename = filenameLower.includes(free);

      if (inNodeTypes || inCreds || inFilename) {
        usesFreeService = true;
        freeServicesFound.push(free);
      }
    }

    const workflowInfo = {
      file,
      workflow,
      nodes,
      nodeTypes,
      usesPaidService,
      usesFreeService,
      paidServicesFound,
      freeServicesFound
    };

    if (usesPaidService) {
      paidWorkflows.push(workflowInfo);
    } else if (usesFreeService) {
      freeWorkflows.push(workflowInfo);
    } else {
      // Si no detectamos nada, es probablemente gratuito (nodos básicos)
      freeWorkflows.push(workflowInfo);
    }

  } catch (error) {
    console.error(`❌ Error procesando ${file}:`, error.message);
  }
});

console.log('📊 Análisis completado:\n');
console.log(`   ✅ Workflows GRATUITOS: ${freeWorkflows.length}`);
console.log(`   💰 Workflows de PAGO: ${paidWorkflows.length}`);
console.log(`   ❓ Sin categorizar: ${uncategorized.length}\n`);

// Crear estructura para workflows gratuitos
console.log('📁 Creando estructura de workflows gratuitos...\n');

const categories = {
  'Automatización-Básica': [],
  'Email-Gratis': [],
  'Chat-Gratis': [],
  'Bases-de-Datos-Gratis': [],
  'Desarrollo': [],
  'Webhooks-y-APIs': [],
  'Google-Gratis': [],
  'Utilidades': [],
  'Otros-Gratis': []
};

freeWorkflows.forEach(wf => {
  const { file, workflow, freeServicesFound } = wf;
  const name = workflow.name || file;
  const fileLower = file.toLowerCase();

  let category = 'Otros-Gratis';

  if (freeServicesFound.some(s => s.includes('email') || s.includes('gmail') || s.includes('imap'))) {
    category = 'Email-Gratis';
  } else if (freeServicesFound.some(s => s.includes('telegram') || s.includes('discord') || s.includes('slack'))) {
    category = 'Chat-Gratis';
  } else if (freeServicesFound.some(s => s.includes('postgres') || s.includes('mysql') || s.includes('mongodb'))) {
    category = 'Bases-de-Datos-Gratis';
  } else if (freeServicesFound.some(s => s.includes('webhook') || s.includes('http'))) {
    category = 'Webhooks-y-APIs';
  } else if (freeServicesFound.some(s => s.includes('google') || s.includes('sheets') || s.includes('drive'))) {
    category = 'Google-Gratis';
  } else if (freeServicesFound.some(s => s.includes('function') || s.includes('code') || s.includes('execute'))) {
    category = 'Desarrollo';
  } else if (freeServicesFound.some(s => s.includes('schedule') || s.includes('manual') || s.includes('cron'))) {
    category = 'Automatización-Básica';
  } else if (freeServicesFound.some(s => s.includes('set') || s.includes('switch') || s.includes('merge'))) {
    category = 'Utilidades';
  }

  categories[category].push(wf);
});

// Crear carpetas y copiar workflows
Object.entries(categories).forEach(([catName, workflows]) => {
  if (workflows.length === 0) return;

  const catDir = path.join(targetDir, catName);
  if (!fs.existsSync(catDir)) {
    fs.mkdirSync(catDir, { recursive: true });
  }

  workflows.forEach(wf => {
    const { file, workflow, nodes, freeServicesFound } = wf;

    // Crear subdirectorio para el workflow
    const workflowDir = path.join(catDir, file.replace('.json', ''));
    if (!fs.existsSync(workflowDir)) {
      fs.mkdirSync(workflowDir, { recursive: true });
    }

    // Copiar JSON
    const sourcePath = path.join(sourceDir, file);
    fs.copyFileSync(sourcePath, path.join(workflowDir, file));

    // Generar README
    const name = workflow.name || file.replace('.json', '');

    let doc = `╔══════════════════════════════════════════════════════════════════╗\n`;
    doc += `║  ${name.substring(0, 62).padEnd(62)}  ║\n`;
    doc += `╚══════════════════════════════════════════════════════════════════╝\n\n`;

    doc += `✅ WORKFLOW 100% GRATUITO\n\n`;

    doc += `📁 Archivo: ${file}\n`;
    doc += `📂 Categoría: ${catName}\n`;
    doc += `💰 Costo: GRATIS - Sin servicios de pago requeridos\n\n`;

    doc += `═════════════════════════════════════════════════════════════════\n`;
    doc += ` ¿POR QUÉ ES GRATIS?\n`;
    doc += `═════════════════════════════════════════════════════════════════\n\n`;

    doc += `Este workflow NO requiere:\n`;
    doc += `   ❌ APIs de pago (OpenAI, Anthropic, etc.)\n`;
    doc += `   ❌ Servicios premium (Salesforce, HubSpot, etc.)\n`;
    doc += `   ❌ Suscripciones mensuales\n`;
    doc += `   ❌ Límites restrictivos en planes gratuitos\n\n`;

    doc += `Usa únicamente:\n`;
    freeServicesFound.forEach(service => {
      doc += `   ✅ ${service}\n`;
    });

    doc += `\n═════════════════════════════════════════════════════════════════\n`;
    doc += ` DESCRIPCIÓN\n`;
    doc += `═════════════════════════════════════════════════════════════════\n\n`;

    doc += `📊 Total de nodos: ${nodes.length}\n`;

    const triggerNode = nodes.find(n => n.type && n.type.includes('trigger'));
    if (triggerNode) {
      doc += `🎯 Trigger: ${triggerNode.type.replace('n8n-nodes-base.', '')}\n`;
    }

    doc += `\n═════════════════════════════════════════════════════════════════\n`;
    doc += ` NODOS UTILIZADOS\n`;
    doc += `═════════════════════════════════════════════════════════════════\n\n`;

    const nodesByType = {};
    nodes.forEach(node => {
      const type = (node.type || 'unknown').replace('n8n-nodes-base.', '');
      const nodeName = node.name || 'unnamed';
      if (!nodesByType[type]) {
        nodesByType[type] = [];
      }
      nodesByType[type].push(nodeName);
    });

    Object.keys(nodesByType).sort().forEach(type => {
      doc += `▸ ${type}\n`;
      nodesByType[type].forEach(nodeName => {
        doc += `  └─ ${nodeName}\n`;
      });
    });

    doc += `\n═════════════════════════════════════════════════════════════════\n`;
    doc += ` CONFIGURACIÓN\n`;
    doc += `═════════════════════════════════════════════════════════════════\n\n`;

    doc += `📥 PASO 1: Importar\n`;
    doc += `   1. Abre n8n → http://localhost:5678\n`;
    doc += `   2. Menú (☰) → "Import from File"\n`;
    doc += `   3. Selecciona: ${file}\n\n`;

    const nodesWithCreds = nodes.filter(n => n.credentials);
    if (nodesWithCreds.length > 0) {
      doc += `🔐 PASO 2: Credenciales (GRATIS)\n`;
      nodesWithCreds.forEach((node, i) => {
        doc += `   ${i + 1}. ${node.name}\n`;
        doc += `      → Tipo: ${(node.type || '').replace('n8n-nodes-base.', '')}\n`;
        doc += `      → ✅ Usa cuentas/servicios gratuitos\n`;
      });
    } else {
      doc += `🔐 PASO 2: Credenciales\n`;
      doc += `   ✅ No requiere credenciales externas\n`;
    }

    doc += `\n⚙️  PASO 3: Configurar parámetros\n`;
    doc += `   • Ajusta según tu caso de uso\n`;
    doc += `   • Todos los servicios son gratuitos\n\n`;

    doc += `▶️  PASO 4: Activar\n`;
    doc += `   • Guarda (Ctrl+S)\n`;
    doc += `   • Activa el workflow\n`;
    doc += `   • ¡Pruébalo!\n\n`;

    doc += `═════════════════════════════════════════════════════════════════\n\n`;
    doc += `💡 VENTAJAS DE WORKFLOWS GRATUITOS:\n`;
    doc += `   • Sin costos mensuales\n`;
    doc += `   • Sin límites estrictos de uso\n`;
    doc += `   • Fácil de escalar\n`;
    doc += `   • Ideal para aprender y experimentar\n\n`;

    doc += `📅 Organizado: ${new Date().toISOString().split('T')[0]}\n`;
    doc += `🔗 Fuente: https://github.com/oxbshw/ultimate-n8n-ai-workflows\n`;

    fs.writeFileSync(path.join(workflowDir, 'README.txt'), doc);
  });

  console.log(`   ✅ ${catName}: ${workflows.length} workflows`);
});

// Crear índice principal
let indexDoc = `╔══════════════════════════════════════════════════════════════════════════════╗\n`;
indexDoc += `║                                                                              ║\n`;
indexDoc += `║                  💚 WORKFLOWS N8N 100% GRATUITOS                             ║\n`;
indexDoc += `║                  ${freeWorkflows.length} Workflows Sin Costos                              ║\n`;
indexDoc += `║                                                                              ║\n`;
indexDoc += `╚══════════════════════════════════════════════════════════════════════════════╝\n\n`;

indexDoc += `✨ TODOS ESTOS WORKFLOWS SON COMPLETAMENTE GRATUITOS\n`;
indexDoc += `═══════════════════════════════════════════════════════════════════════════════\n\n`;

indexDoc += `✅ No requieren APIs de pago (OpenAI, Anthropic, etc.)\n`;
indexDoc += `✅ No requieren suscripciones premium\n`;
indexDoc += `✅ Usan solo servicios gratuitos o de código abierto\n`;
indexDoc += `✅ Ideales para aprender, experimentar y producción\n\n`;

indexDoc += `📊 ESTADÍSTICAS\n`;
indexDoc += `═══════════════════════════════════════════════════════════════════════════════\n\n`;
indexDoc += `Total de workflows gratuitos: ${freeWorkflows.length}\n`;
indexDoc += `Workflows de pago excluidos: ${paidWorkflows.length}\n\n`;

indexDoc += `📁 CATEGORÍAS\n`;
indexDoc += `═══════════════════════════════════════════════════════════════════════════════\n\n`;

Object.entries(categories).forEach(([catName, workflows]) => {
  if (workflows.length > 0) {
    indexDoc += `${workflows.length.toString().padStart(3)} workflows - ${catName}\n`;
  }
});

indexDoc += `\n🎯 SERVICIOS GRATUITOS DISPONIBLES\n`;
indexDoc += `═══════════════════════════════════════════════════════════════════════════════\n\n`;

indexDoc += `💬 Comunicación:\n`;
indexDoc += `   • Gmail (gratis)\n`;
indexDoc += `   • Telegram (gratis)\n`;
indexDoc += `   • Discord (gratis)\n`;
indexDoc += `   • Slack (plan gratuito)\n\n`;

indexDoc += `💾 Bases de Datos:\n`;
indexDoc += `   • PostgreSQL (open source)\n`;
indexDoc += `   • MySQL (open source)\n`;
indexDoc += `   • MongoDB (community)\n`;
indexDoc += `   • SQLite (gratis)\n\n`;

indexDoc += `🌐 Google (Gratis):\n`;
indexDoc += `   • Google Sheets\n`;
indexDoc += `   • Google Drive\n`;
indexDoc += `   • Google Calendar\n\n`;

indexDoc += `🔧 Utilidades:\n`;
indexDoc += `   • Webhooks\n`;
indexDoc += `   • HTTP requests\n`;
indexDoc += `   • Código JavaScript/Python\n`;
indexDoc += `   • Procesamiento de datos\n\n`;

indexDoc += `🚫 SERVICIOS DE PAGO EXCLUIDOS\n`;
indexDoc += `═══════════════════════════════════════════════════════════════════════════════\n\n`;

indexDoc += `Estos workflows NO están incluidos porque requieren pago:\n`;
indexDoc += `   ❌ OpenAI, ChatGPT, Claude (APIs de IA de pago)\n`;
indexDoc += `   ❌ Salesforce, HubSpot (CRM premium)\n`;
indexDoc += `   ❌ Stripe, PayPal (procesamiento de pagos)\n`;
indexDoc += `   ❌ AWS, Azure, GCP (cloud de pago)\n`;
indexDoc += `   ❌ SendGrid, Mailchimp (email marketing de pago)\n\n`;

indexDoc += `💡 Nota: Los workflows excluidos están en otra carpeta si los necesitas\n\n`;

indexDoc += `🎓 CÓMO USAR\n`;
indexDoc += `═══════════════════════════════════════════════════════════════════════════════\n\n`;

indexDoc += `1. Navega por las carpetas de categorías\n`;
indexDoc += `2. Cada workflow tiene su README.txt con instrucciones\n`;
indexDoc += `3. Importa el archivo .json en n8n\n`;
indexDoc += `4. Configura (todo gratis)\n`;
indexDoc += `5. ¡Disfruta sin costos!\n\n`;

indexDoc += `📍 Ubicación: ${path.resolve(targetDir)}\n`;
indexDoc += `📅 Generado: ${new Date().toISOString().split('T')[0]}\n`;

fs.writeFileSync(path.join(targetDir, 'LÉEME-PRIMERO.txt'), indexDoc);

// Crear lista de workflows de pago para referencia
let paidDoc = `WORKFLOWS QUE REQUIEREN SERVICIOS DE PAGO\n`;
paidDoc += `═══════════════════════════════════════════════════════════════════════════════\n\n`;
paidDoc += `Total: ${paidWorkflows.length} workflows\n\n`;
paidDoc += `Estos workflows NO están en la carpeta GRATIS porque usan servicios de pago:\n\n`;

paidWorkflows.forEach((wf, i) => {
  paidDoc += `${(i + 1).toString().padStart(3)}. ${wf.file}\n`;
  paidDoc += `     Servicios de pago: ${wf.paidServicesFound.join(', ')}\n\n`;
});

fs.writeFileSync(path.join(targetDir, 'workflows-de-pago-excluidos.txt'), paidDoc);

console.log(`\n✅ Completado!\n`);
console.log(`📊 Resumen:`);
console.log(`   💚 Workflows gratuitos: ${freeWorkflows.length}`);
console.log(`   💰 Workflows de pago (excluidos): ${paidWorkflows.length}`);
console.log(`\n📁 Ubicación: ${path.resolve(targetDir)}`);
console.log(`\n🎉 Todos los workflows en esta carpeta son 100% GRATUITOS!`);
