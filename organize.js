const fs = require('fs');
const path = require('path');

const sourceDir = './repo/workflows';
const targetDir = './organized';

// Crear directorio de salida
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Leer todos los archivos JSON
const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.json'));

console.log(`Procesando ${files.length} workflows...`);

let processed = 0;
let errors = 0;

files.forEach(file => {
  try {
    const filePath = path.join(sourceDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const workflow = JSON.parse(content);

    // Extraer información del workflow
    const name = workflow.name || file.replace('.json', '');
    const nodes = workflow.nodes || [];
    const tags = workflow.tags || [];

    // Parsear el nombre del archivo para obtener categoría
    // Formato: NUMERO_Palabra1_Palabra2_Palabra3_Palabra4.json
    const parts = file.replace('.json', '').split('_');
    const numero = parts[0];

    // Agrupar por la segunda palabra (categoría principal)
    let category = 'General';
    if (parts.length > 1) {
      category = parts[1];
    }

    // Crear directorio de categoría
    const categoryDir = path.join(targetDir, category);
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }

    // Crear subdirectorio por workflow
    const workflowDir = path.join(categoryDir, file.replace('.json', ''));
    if (!fs.existsSync(workflowDir)) {
      fs.mkdirSync(workflowDir, { recursive: true });
    }

    // Copiar el archivo JSON
    fs.copyFileSync(filePath, path.join(workflowDir, file));

    // Generar documentación
    let doc = `# ${name}\n\n`;
    doc += `## Archivo\n${file}\n\n`;
    doc += `## Descripción\n`;

    // Intentar extraer descripción de los nodos
    const triggerNode = nodes.find(n => n.type && n.type.includes('trigger'));
    if (triggerNode) {
      doc += `Tipo de trigger: ${triggerNode.type}\n`;
    }

    doc += `\n## Nodos utilizados (${nodes.length} total)\n`;
    const nodeTypes = {};
    nodes.forEach(node => {
      const type = node.type || 'unknown';
      const name = node.name || 'unnamed';
      if (!nodeTypes[type]) {
        nodeTypes[type] = [];
      }
      nodeTypes[type].push(name);
    });

    Object.keys(nodeTypes).sort().forEach(type => {
      doc += `\n### ${type}\n`;
      nodeTypes[type].forEach(name => {
        doc += `- ${name}\n`;
      });
    });

    if (tags && tags.length > 0) {
      doc += `\n## Tags\n`;
      tags.forEach(tag => {
        doc += `- ${tag.name}\n`;
      });
    }

    doc += `\n## Configuración\n\n`;
    doc += `1. Importa el archivo \`${file}\` en n8n\n`;
    doc += `2. Revisa las credenciales necesarias:\n`;

    // Buscar nodos que requieran credenciales
    const nodesWithCreds = nodes.filter(n => n.credentials || n.authentication);
    if (nodesWithCreds.length > 0) {
      nodesWithCreds.forEach(node => {
        doc += `   - ${node.name}: Configura las credenciales necesarias\n`;
      });
    } else {
      doc += `   - No se detectaron credenciales específicas (revisa manualmente)\n`;
    }

    doc += `3. Activa el workflow desde la interfaz de n8n\n`;

    // Guardar documentación
    fs.writeFileSync(path.join(workflowDir, 'README.txt'), doc);

    processed++;
    if (processed % 50 === 0) {
      console.log(`Procesados: ${processed}/${files.length}`);
    }

  } catch (error) {
    console.error(`Error procesando ${file}:`, error.message);
    errors++;
  }
});

console.log(`\n✅ Completado!`);
console.log(`   Procesados: ${processed}`);
console.log(`   Errores: ${errors}`);
console.log(`   Ubicación: ${path.resolve(targetDir)}`);
