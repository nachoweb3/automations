const fs = require('fs');
const path = require('path');

const sourceDir = './repo/workflows';
const targetDir = './workflows-organized';

// Mapeo semántico de categorías
const categoryMapping = {
  // Comunicación
  'gmail': 'Comunicación/Email',
  'emailreadimap': 'Comunicación/Email',
  'email': 'Comunicación/Email',
  'send': 'Comunicación/Email',
  'telegram': 'Comunicación/Chat',
  'slack': 'Comunicación/Chat',
  'discord': 'Comunicación/Chat',
  'discordtool': 'Comunicación/Chat',
  'twitter': 'Comunicación/Redes-Sociales',
  'linkedin': 'Comunicación/Redes-Sociales',
  'facebook': 'Comunicación/Redes-Sociales',

  // IA y Automatización
  'openai': 'IA-y-Automatización/OpenAI',
  'anthropic': 'IA-y-Automatización/Claude',
  'generate': 'IA-y-Automatización/Generación-Contenido',
  'ai': 'IA-y-Automatización/General',
  'llm': 'IA-y-Automatización/General',
  'chatgpt': 'IA-y-Automatización/OpenAI',

  // Bases de Datos
  'postgres': 'Bases-de-Datos/SQL',
  'mysql': 'Bases-de-Datos/SQL',
  'sql': 'Bases-de-Datos/SQL',
  'airtable': 'Bases-de-Datos/NoSQL',
  'airtabletool': 'Bases-de-Datos/NoSQL',
  'mongodb': 'Bases-de-Datos/NoSQL',
  'googlesheets': 'Bases-de-Datos/Hojas-de-Cálculo',
  'sheets': 'Bases-de-Datos/Hojas-de-Cálculo',

  // Contenido Multimedia
  'editimage': 'Contenido-Multimedia/Imágenes',
  'image': 'Contenido-Multimedia/Imágenes',
  'video': 'Contenido-Multimedia/Video',
  'youtube': 'Contenido-Multimedia/Video',
  'media': 'Contenido-Multimedia/General',

  // Desarrollo y Código
  'code': 'Desarrollo/Scripts',
  'function': 'Desarrollo/Funciones',
  'executecommand': 'Desarrollo/Comandos',
  'git': 'Desarrollo/Control-Versiones',
  'github': 'Desarrollo/Control-Versiones',

  // Procesamiento de Datos
  'split': 'Procesamiento-Datos/Transformación',
  'splitout': 'Procesamiento-Datos/Transformación',
  'merge': 'Procesamiento-Datos/Transformación',
  'aggregate': 'Procesamiento-Datos/Agregación',
  'filter': 'Procesamiento-Datos/Filtrado',
  'loop': 'Procesamiento-Datos/Iteración',

  // Web y APIs
  'webhook': 'Web-y-APIs/Webhooks',
  'http': 'Web-y-APIs/HTTP',
  'httprequest': 'Web-y-APIs/HTTP',
  'api': 'Web-y-APIs/General',
  'googleapi': 'Web-y-APIs/Google',

  // Automatización General
  'automation': 'Automatización/General',
  'automate': 'Automatización/General',
  'autopilot': 'Automatización/General',
  'schedule': 'Automatización/Programadas',
  'cron': 'Automatización/Programadas',

  // Productividad
  'asana': 'Productividad/Gestión-Proyectos',
  'trello': 'Productividad/Gestión-Proyectos',
  'notion': 'Productividad/Notas',
  'calendar': 'Productividad/Calendario',
  'datetime': 'Productividad/Tiempo',

  // Utilidades
  'manual': 'Utilidades/Triggers',
  'triggered': 'Utilidades/Triggers',
  'wait': 'Utilidades/Espera',
  'set': 'Utilidades/Variables',
  'switch': 'Utilidades/Condicionales',
  'if': 'Utilidades/Condicionales',
  'compression': 'Utilidades/Archivos',
  'create': 'Utilidades/Creación',
  'debughelper': 'Utilidades/Debug',
  'error': 'Utilidades/Manejo-Errores'
};

// Crear estructura de directorios
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.json'));
console.log(`📊 Analizando ${files.length} workflows...\n`);

const workflows = [];
const categoryStats = {};

// Primera pasada: analizar todos los workflows
files.forEach(file => {
  try {
    const filePath = path.join(sourceDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const workflow = JSON.parse(content);

    const parts = file.replace('.json', '').split('_');
    const numero = parts[0];
    const keywords = parts.slice(1).map(p => p.toLowerCase());

    // Determinar categoría
    let category = 'General/Sin-Categoría';
    for (const keyword of keywords) {
      if (categoryMapping[keyword]) {
        category = categoryMapping[keyword];
        break;
      }
    }

    // Analizar nodos para más contexto
    const nodes = workflow.nodes || [];
    const nodeTypes = nodes.map(n => n.type || '').filter(Boolean);
    const hasAI = nodeTypes.some(t => t.includes('openai') || t.includes('anthropic'));
    const hasDB = nodeTypes.some(t => t.includes('postgres') || t.includes('mysql') || t.includes('airtable'));

    if (hasAI && category === 'General/Sin-Categoría') {
      category = 'IA-y-Automatización/General';
    } else if (hasDB && category === 'General/Sin-Categoría') {
      category = 'Bases-de-Datos/General';
    }

    workflows.push({
      file,
      numero,
      workflow,
      category,
      nodes,
      nodeTypes,
      keywords
    });

    categoryStats[category] = (categoryStats[category] || 0) + 1;

  } catch (error) {
    console.error(`❌ Error procesando ${file}:`, error.message);
  }
});

console.log('📁 Categorías detectadas:');
Object.entries(categoryStats).sort((a, b) => b[1] - a[1]).forEach(([cat, count]) => {
  console.log(`   ${count.toString().padStart(3)} workflows - ${cat}`);
});

// Segunda pasada: crear estructura mejorada
console.log('\n🔨 Creando estructura mejorada...\n');

workflows.forEach((wf, index) => {
  const { file, workflow, category, nodes, nodeTypes, keywords } = wf;

  // Crear directorio de categoría
  const categoryDir = path.join(targetDir, category);
  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir, { recursive: true });
  }

  // Crear subdirectorio del workflow
  const workflowDir = path.join(categoryDir, file.replace('.json', ''));
  if (!fs.existsSync(workflowDir)) {
    fs.mkdirSync(workflowDir, { recursive: true });
  }

  // Copiar JSON
  const sourcePath = path.join(sourceDir, file);
  fs.copyFileSync(sourcePath, path.join(workflowDir, file));

  // Generar README mejorado
  const name = workflow.name || file.replace('.json', '');
  const tags = workflow.tags || [];

  let doc = `╔══════════════════════════════════════════════════════════════════╗\n`;
  doc += `║  ${name.padEnd(62)}  ║\n`;
  doc += `╚══════════════════════════════════════════════════════════════════╝\n\n`;

  doc += `📁 Archivo: ${file}\n`;
  doc += `📂 Categoría: ${category}\n`;
  doc += `🔢 ID: ${wf.numero}\n\n`;

  doc += `═════════════════════════════════════════════════════════════════\n`;
  doc += ` DESCRIPCIÓN\n`;
  doc += `═════════════════════════════════════════════════════════════════\n\n`;

  // Generar descripción basada en nodos
  const triggerNode = nodes.find(n => n.type && n.type.includes('trigger'));
  if (triggerNode) {
    doc += `🎯 Tipo de activación: ${triggerNode.type.replace('n8n-nodes-base.', '')}\n`;
    if (triggerNode.name) {
      doc += `   Nombre del trigger: ${triggerNode.name}\n`;
    }
  }

  const hasSchedule = nodes.some(n => n.type && n.type.includes('schedule'));
  const hasWebhook = nodes.some(n => n.type && n.type.includes('webhook'));
  const hasManual = nodes.some(n => n.type && n.type.includes('manual'));

  if (hasSchedule) doc += `⏰ Ejecución programada (cron/schedule)\n`;
  if (hasWebhook) doc += `🌐 Activado por webhook (API)\n`;
  if (hasManual) doc += `👆 Activación manual\n`;

  doc += `\n📊 Total de nodos: ${nodes.length}\n`;
  doc += `🏷️  Keywords: ${keywords.join(', ')}\n\n`;

  doc += `═════════════════════════════════════════════════════════════════\n`;
  doc += ` CASOS DE USO\n`;
  doc += `═════════════════════════════════════════════════════════════════\n\n`;

  // Generar casos de uso basados en categoría
  const useCases = generateUseCases(category, nodes, keywords);
  useCases.forEach((useCase, i) => {
    doc += `${i + 1}. ${useCase}\n`;
  });

  doc += `\n═════════════════════════════════════════════════════════════════\n`;
  doc += ` NODOS UTILIZADOS (${nodes.length} total)\n`;
  doc += `═════════════════════════════════════════════════════════════════\n\n`;

  const nodesByType = {};
  nodes.forEach(node => {
    const type = (node.type || 'unknown').replace('n8n-nodes-base.', '');
    const name = node.name || 'unnamed';
    if (!nodesByType[type]) {
      nodesByType[type] = [];
    }
    nodesByType[type].push(name);
  });

  Object.keys(nodesByType).sort().forEach(type => {
    doc += `▸ ${type}\n`;
    nodesByType[type].forEach(name => {
      doc += `  └─ ${name}\n`;
    });
  });

  if (tags.length > 0) {
    doc += `\n═════════════════════════════════════════════════════════════════\n`;
    doc += ` ETIQUETAS\n`;
    doc += `═════════════════════════════════════════════════════════════════\n\n`;
    tags.forEach(tag => {
      doc += `🏷️  ${tag.name}\n`;
    });
  }

  doc += `\n═════════════════════════════════════════════════════════════════\n`;
  doc += ` CONFIGURACIÓN PASO A PASO\n`;
  doc += `═════════════════════════════════════════════════════════════════\n\n`;

  doc += `📥 PASO 1: Importar el workflow\n`;
  doc += `   1. Abre n8n en http://localhost:5678\n`;
  doc += `   2. Click en menú (☰) → "Import from File"\n`;
  doc += `   3. Selecciona: ${file}\n\n`;

  doc += `🔐 PASO 2: Configurar credenciales\n`;
  const nodesWithCreds = nodes.filter(n => n.credentials || n.authentication);
  if (nodesWithCreds.length > 0) {
    nodesWithCreds.forEach((node, i) => {
      doc += `   ${i + 1}. ${node.name}\n`;
      doc += `      → Tipo: ${(node.type || '').replace('n8n-nodes-base.', '')}\n`;
      if (node.credentials) {
        Object.keys(node.credentials).forEach(credType => {
          doc += `      → Credencial requerida: ${credType}\n`;
        });
      }
    });
  } else {
    doc += `   ✅ No se detectaron credenciales automáticamente\n`;
    doc += `   ⚠️  Revisa manualmente cada nodo por si requiere configuración\n`;
  }

  doc += `\n⚙️  PASO 3: Configurar parámetros\n`;
  doc += `   • Revisa cada nodo y ajusta los parámetros según tu caso\n`;
  doc += `   • Presta atención a:\n`;
  doc += `     - URLs y endpoints\n`;
  doc += `     - Nombres de archivos y rutas\n`;
  doc += `     - IDs de recursos (channels, grupos, etc.)\n`;
  doc += `     - Horarios (si usa schedule)\n\n`;

  doc += `▶️  PASO 4: Activar y probar\n`;
  doc += `   1. Guarda el workflow (Ctrl+S)\n`;
  doc += `   2. Activa el workflow (toggle en la esquina superior)\n`;
  doc += `   3. Prueba con el botón "Execute Workflow"\n`;
  doc += `   4. Revisa los logs para verificar ejecución\n\n`;

  doc += `═════════════════════════════════════════════════════════════════\n`;
  doc += ` TROUBLESHOOTING\n`;
  doc += `═════════════════════════════════════════════════════════════════\n\n`;
  doc += `❌ Si el workflow falla:\n`;
  doc += `   • Verifica que todas las credenciales estén configuradas\n`;
  doc += `   • Revisa que los servicios externos estén disponibles\n`;
  doc += `   • Comprueba los permisos de API/webhooks\n`;
  doc += `   • Consulta los logs de n8n para errores específicos\n\n`;

  doc += `═════════════════════════════════════════════════════════════════\n\n`;
  doc += `📅 Organizado: ${new Date().toISOString().split('T')[0]}\n`;
  doc += `🔗 Fuente: https://github.com/oxbshw/ultimate-n8n-ai-workflows\n`;

  fs.writeFileSync(path.join(workflowDir, 'README.txt'), doc);

  if ((index + 1) % 50 === 0) {
    console.log(`   Procesados: ${index + 1}/${workflows.length}`);
  }
});

console.log(`   Procesados: ${workflows.length}/${workflows.length}`);

// Identificar workflows relacionados
console.log('\n🔗 Identificando workflows relacionados...\n');
const packs = identifyRelatedWorkflows(workflows);

// Crear packs
const packsDir = path.join(targetDir, '_PACKS');
if (!fs.existsSync(packsDir)) {
  fs.mkdirSync(packsDir, { recursive: true });
}

packs.forEach(pack => {
  const packDir = path.join(packsDir, pack.name);
  if (!fs.existsSync(packDir)) {
    fs.mkdirSync(packDir, { recursive: true });
  }

  let packDoc = `╔══════════════════════════════════════════════════════════════════╗\n`;
  packDoc += `║  PACK: ${pack.name.padEnd(56)}  ║\n`;
  packDoc += `╚══════════════════════════════════════════════════════════════════╝\n\n`;
  packDoc += `${pack.description}\n\n`;
  packDoc += `📦 Workflows incluidos: ${pack.workflows.length}\n\n`;

  pack.workflows.forEach((wf, i) => {
    packDoc += `${i + 1}. ${wf.workflow.name}\n`;
    packDoc += `   Archivo: ${wf.file}\n`;
    packDoc += `   Ubicación: ${wf.category}\n\n`;
  });

  fs.writeFileSync(path.join(packDir, 'README.txt'), packDoc);
});

console.log(`✅ Completado!\n`);
console.log(`📊 Estadísticas:`);
console.log(`   - ${workflows.length} workflows reorganizados`);
console.log(`   - ${Object.keys(categoryStats).length} categorías`);
console.log(`   - ${packs.length} packs identificados`);
console.log(`\n📁 Ubicación: ${path.resolve(targetDir)}`);

// Funciones auxiliares
function generateUseCases(category, nodes, keywords) {
  const cases = [];

  if (category.includes('Email')) {
    cases.push('Automatizar respuestas a emails basadas en contenido');
    cases.push('Clasificar y archivar emails automáticamente');
    cases.push('Enviar notificaciones por email ante eventos específicos');
  } else if (category.includes('Chat')) {
    cases.push('Crear bots de respuesta automática');
    cases.push('Enviar notificaciones a canales/grupos');
    cases.push('Integrar con otros servicios para notificaciones');
  } else if (category.includes('OpenAI')) {
    cases.push('Generar contenido automáticamente con IA');
    cases.push('Procesar y analizar texto con modelos de lenguaje');
    cases.push('Crear chatbots inteligentes');
  } else if (category.includes('Bases-de-Datos')) {
    cases.push('Sincronizar datos entre sistemas');
    cases.push('Automatizar backups y exportaciones');
    cases.push('Procesar y transformar datos en lotes');
  } else if (category.includes('Multimedia')) {
    cases.push('Procesar imágenes o videos automáticamente');
    cases.push('Generar thumbnails o previsualizaciones');
    cases.push('Optimizar y convertir formatos de medios');
  } else {
    cases.push('Automatizar tareas repetitivas');
    cases.push('Integrar múltiples servicios en un flujo único');
    cases.push('Procesar datos de forma automatizada');
  }

  return cases;
}

function identifyRelatedWorkflows(workflows) {
  const packs = [];

  // Pack: Email Automation
  const emailWorkflows = workflows.filter(w =>
    w.category.includes('Email') || w.keywords.some(k => k.includes('email') || k.includes('gmail'))
  );
  if (emailWorkflows.length > 0) {
    packs.push({
      name: 'Email-Automation-Complete',
      description: 'Pack completo para automatización de email: lectura, procesamiento, respuestas automáticas y notificaciones.',
      workflows: emailWorkflows.slice(0, 10)
    });
  }

  // Pack: AI Content Generation
  const aiWorkflows = workflows.filter(w =>
    w.category.includes('OpenAI') || w.keywords.some(k => k.includes('openai') || k.includes('generate'))
  );
  if (aiWorkflows.length > 0) {
    packs.push({
      name: 'AI-Content-Generation',
      description: 'Workflows para generar contenido con IA: textos, imágenes, análisis y más.',
      workflows: aiWorkflows.slice(0, 10)
    });
  }

  // Pack: Social Media
  const socialWorkflows = workflows.filter(w =>
    w.keywords.some(k => k.includes('twitter') || k.includes('linkedin') || k.includes('facebook'))
  );
  if (socialWorkflows.length > 0) {
    packs.push({
      name: 'Social-Media-Manager',
      description: 'Automatiza tu presencia en redes sociales: publicación, respuestas y monitoreo.',
      workflows: socialWorkflows.slice(0, 10)
    });
  }

  return packs;
}
