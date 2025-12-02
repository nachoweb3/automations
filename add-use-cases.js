const fs = require('fs');
const path = require('path');

const dirs = [
  './workflows-GRATIS',
  './workflows-CONVERTIDOS-A-GRATIS'
];

// Generador de casos de uso basado en análisis de nodos
function generateUseCases(workflow, nodes, category, conversions = []) {
  const useCases = [];

  // Analizar tipos de nodos
  const nodeTypes = nodes.map(n => (n.type || '').toLowerCase());
  const hasSchedule = nodeTypes.some(t => t.includes('schedule') || t.includes('cron'));
  const hasWebhook = nodeTypes.some(t => t.includes('webhook'));
  const hasEmail = nodeTypes.some(t => t.includes('email') || t.includes('gmail') || t.includes('imap'));
  const hasTelegram = nodeTypes.some(t => t.includes('telegram'));
  const hasDiscord = nodeTypes.some(t => t.includes('discord'));
  const hasSlack = nodeTypes.some(t => t.includes('slack'));
  const hasDB = nodeTypes.some(t => t.includes('postgres') || t.includes('mysql') || t.includes('mongo'));
  const hasGoogleSheets = nodeTypes.some(t => t.includes('googlesheets') || t.includes('sheets'));
  const hasAirtable = nodeTypes.some(t => t.includes('airtable'));
  const hasHTTP = nodeTypes.some(t => t.includes('http'));
  const hasCode = nodeTypes.some(t => t.includes('code') || t.includes('function'));
  const hasAI = nodeTypes.some(t => t.includes('openai') || t.includes('anthropic')) || conversions.some(c => c.from.includes('openai'));
  const hasRSS = nodeTypes.some(t => t.includes('rss'));
  const hasTwitter = nodeTypes.some(t => t.includes('twitter'));
  const hasLinkedIn = nodeTypes.some(t => t.includes('linkedin'));
  const hasSplit = nodeTypes.some(t => t.includes('split'));
  const hasMerge = nodeTypes.some(t => t.includes('merge'));
  const hasFilter = nodeTypes.some(t => t.includes('filter') || t.includes('if') || t.includes('switch'));

  // Casos de uso basados en IA
  if (hasAI) {
    useCases.push({
      title: '🤖 Generación de Contenido Automático',
      description: 'Genera artículos, posts, descripciones de productos automáticamente',
      example: 'Cada lunes a las 9am, genera un artículo de blog sobre tendencias tech usando IA local (Ollama)',
      steps: [
        'Configura trigger programado (lunes 9am)',
        'Define el tema o keywords',
        'Ollama genera contenido (gratis, sin límites)',
        'Revisa y publica en tu blog/CMS'
      ]
    });

    useCases.push({
      title: '💬 Chatbot de Soporte Inteligente',
      description: 'Responde automáticamente preguntas de clientes usando IA',
      example: 'Cuando llega un email de soporte, la IA analiza la pregunta y genera una respuesta personalizada',
      steps: [
        'Email nuevo activa el workflow',
        'IA (Ollama) analiza la consulta',
        'Genera respuesta contextual',
        'Envía email automático al cliente'
      ]
    });

    useCases.push({
      title: '📊 Análisis de Sentimiento',
      description: 'Analiza opiniones de clientes, reviews, feedback automáticamente',
      example: 'Procesa reviews de productos y clasifica como positivo/negativo/neutral',
      steps: [
        'Recibe review (webhook/email/form)',
        'IA analiza sentimiento',
        'Clasifica y guarda en Google Sheets',
        'Alerta si hay reviews negativos'
      ]
    });
  }

  // Casos de uso de Email
  if (hasEmail) {
    useCases.push({
      title: '📧 Procesamiento Automático de Emails',
      description: 'Clasifica, archiva y responde emails automáticamente',
      example: 'Emails de clientes se clasifican por urgencia y derivan al departamento correcto',
      steps: [
        'Nuevo email en Gmail activa workflow',
        'Analiza asunto y contenido',
        'Clasifica por categoría (ventas/soporte/etc)',
        'Reenvía al equipo correspondiente'
      ]
    });

    useCases.push({
      title: '🔔 Alertas por Email Inteligentes',
      description: 'Recibe notificaciones cuando pasan ciertas condiciones',
      example: 'Te avisa por email cuando hay cambios importantes en tu base de datos',
      steps: [
        'Monitorea base de datos cada hora',
        'Detecta cambios o anomalías',
        'Formatea alerta con detalles',
        'Envía email a tu bandeja'
      ]
    });
  }

  // Casos de uso de Telegram/Discord/Slack
  if (hasTelegram || hasDiscord || hasSlack) {
    const platform = hasTelegram ? 'Telegram' : (hasDiscord ? 'Discord' : 'Slack');

    useCases.push({
      title: `💬 Bot de Notificaciones en ${platform}`,
      description: `Recibe alertas instantáneas en ${platform} cuando ocurren eventos`,
      example: `Cuando alguien compra en tu tienda, recibes mensaje en ${platform} con detalles`,
      steps: [
        `Webhook/trigger detecta evento (compra, registro, etc)`,
        `Formatea mensaje con información relevante`,
        `Envía a tu canal/chat de ${platform}`,
        `Notificación instantánea en tu móvil`
      ]
    });

    useCases.push({
      title: `🤖 Comandos Interactivos en ${platform}`,
      description: `Controla tus sistemas con comandos desde ${platform}`,
      example: `Escribe /ventas en ${platform} y recibe reporte de ventas del día`,
      steps: [
        `Usuario envía comando en ${platform}`,
        `Workflow detecta el comando`,
        `Ejecuta acción (consulta BD, genera reporte)`,
        `Responde con resultado en ${platform}`
      ]
    });

    useCases.push({
      title: `📊 Reportes Diarios en ${platform}`,
      description: `Recibe resúmenes automáticos cada día`,
      example: `Todos los días a las 8am recibes métricas del negocio en ${platform}`,
      steps: [
        `Trigger programado (8am diario)`,
        `Consulta bases de datos/APIs`,
        `Genera resumen formateado`,
        `Envía a ${platform}`
      ]
    });
  }

  // Casos de uso de Bases de Datos
  if (hasDB || hasGoogleSheets || hasAirtable) {
    const dbName = hasAirtable ? 'Airtable' : (hasGoogleSheets ? 'Google Sheets' : 'Base de datos');

    useCases.push({
      title: `💾 Sincronización de Datos en ${dbName}`,
      description: `Mantén tus datos sincronizados entre sistemas`,
      example: `Cuando agregas un contacto en tu CRM, se copia automáticamente a ${dbName}`,
      steps: [
        `Webhook/trigger detecta nuevo registro`,
        `Extrae información relevante`,
        `Crea/actualiza registro en ${dbName}`,
        `Confirma sincronización`
      ]
    });

    useCases.push({
      title: `📊 Dashboard Automático en ${dbName}`,
      description: `Actualiza métricas y reportes automáticamente`,
      example: `Cada hora actualiza tu hoja de métricas con datos frescos`,
      steps: [
        `Trigger programado cada hora`,
        `Consulta APIs/bases de datos`,
        `Calcula métricas y KPIs`,
        `Actualiza ${dbName} con datos nuevos`
      ]
    });

    useCases.push({
      title: `🔄 Backup Automático de Datos`,
      description: `Respalda información crítica regularmente`,
      example: `Cada noche exporta datos importantes a ${dbName} como backup`,
      steps: [
        `Trigger programado (ej: 2am diario)`,
        `Extrae datos de sistema principal`,
        `Formatea y limpia datos`,
        `Guarda en ${dbName} con timestamp`
      ]
    });
  }

  // Casos de uso de Webhooks/HTTP
  if (hasWebhook || hasHTTP) {
    useCases.push({
      title: '🌐 Integración entre Servicios Web',
      description: 'Conecta aplicaciones que no se integran nativamente',
      example: 'Cuando hay una venta en Shopify, crea tarea en tu sistema de gestión',
      steps: [
        'Webhook recibe datos de Shopify',
        'Transforma formato de datos',
        'Envía a tu sistema vía API',
        'Registra transacción'
      ]
    });

    useCases.push({
      title: '📡 Monitoreo de APIs',
      description: 'Verifica disponibilidad y rendimiento de servicios',
      example: 'Cada 5 minutos verifica que tu API esté funcionando, alerta si hay problemas',
      steps: [
        'Trigger cada 5 minutos',
        'Hace request a tu API',
        'Verifica status y tiempo de respuesta',
        'Alerta si detecta problema'
      ]
    });
  }

  // Casos de uso de Automatización Programada
  if (hasSchedule) {
    useCases.push({
      title: '⏰ Tareas Recurrentes Automatizadas',
      description: 'Ejecuta tareas repetitivas sin intervención manual',
      example: 'Cada viernes genera reporte semanal y lo envía al equipo',
      steps: [
        'Trigger programado (viernes 5pm)',
        'Recopila datos de la semana',
        'Genera reporte formateado',
        'Envía por email/Telegram al equipo'
      ]
    });

    useCases.push({
      title: '🧹 Limpieza Automática de Datos',
      description: 'Mantén tus sistemas limpios y organizados',
      example: 'Cada noche elimina registros temporales mayores a 30 días',
      steps: [
        'Trigger programado (2am diario)',
        'Consulta registros antiguos',
        'Filtra los que cumplen criterios',
        'Elimina o archiva automáticamente'
      ]
    });
  }

  // Casos de uso de RSS
  if (hasRSS) {
    useCases.push({
      title: '📰 Agregador de Noticias Personalizado',
      description: 'Recibe noticias relevantes de múltiples fuentes',
      example: 'Cada hora busca noticias sobre tu industria y las envía a Telegram',
      steps: [
        'Trigger cada hora',
        'Lee feeds RSS de fuentes seleccionadas',
        'Filtra por keywords relevantes',
        'Envía resumen a Telegram/email'
      ]
    });
  }

  // Casos de uso de Redes Sociales
  if (hasTwitter || hasLinkedIn) {
    const platform = hasTwitter ? 'Twitter' : 'LinkedIn';

    useCases.push({
      title: `📱 Automatización de ${platform}`,
      description: `Publica y monitorea contenido en ${platform}`,
      example: `Programa posts de ${platform} con una semana de adelanto`,
      steps: [
        'Carga posts programados en Google Sheets',
        'Trigger revisa horarios',
        'Publica en ${platform} automáticamente',
        'Registra métricas de engagement'
      ]
    });
  }

  // Casos de uso de Procesamiento de Datos
  if (hasSplit || hasMerge || hasFilter) {
    useCases.push({
      title: '⚙️ ETL y Procesamiento de Datos',
      description: 'Extrae, transforma y carga datos entre sistemas',
      example: 'Convierte datos de ventas en formato compatible y los importa a analytics',
      steps: [
        'Extrae datos de sistema origen',
        'Transforma formato (filtros, cálculos)',
        'Valida y limpia datos',
        'Carga en sistema destino'
      ]
    });
  }

  // Casos de uso de Código/Scripts
  if (hasCode) {
    useCases.push({
      title: '🔧 Lógica de Negocio Personalizada',
      description: 'Ejecuta cálculos y lógica compleja automáticamente',
      example: 'Calcula comisiones de vendedores basado en reglas complejas',
      steps: [
        'Recibe datos de ventas',
        'Ejecuta código JavaScript personalizado',
        'Aplica reglas de negocio',
        'Guarda resultados en base de datos'
      ]
    });
  }

  // Casos de uso generales basados en categoría
  if (useCases.length === 0) {
    if (category.includes('Email')) {
      useCases.push({
        title: '📧 Automatización de Email',
        description: 'Gestiona tu bandeja de entrada automáticamente',
        example: 'Filtra emails, responde automáticamente, archiva por categoría',
        steps: [
          'Define reglas de filtrado',
          'Configura respuestas automáticas',
          'Organiza en carpetas automáticamente',
          'Mantén inbox limpio sin esfuerzo'
        ]
      });
    } else if (category.includes('Automatización')) {
      useCases.push({
        title: '🔄 Automatización General',
        description: 'Automatiza procesos repetitivos de tu negocio',
        example: 'Elimina tareas manuales que consumen tiempo valioso',
        steps: [
          'Identifica tarea repetitiva',
          'Configura trigger apropiado',
          'Define acciones a ejecutar',
          'Ahorra horas cada semana'
        ]
      });
    } else if (category.includes('Desarrollo')) {
      useCases.push({
        title: '💻 DevOps y Automatización',
        description: 'Automatiza tareas de desarrollo y deployment',
        example: 'Ejecuta tests, deploys, backups automáticamente',
        steps: [
          'Configura trigger (git push, schedule, etc)',
          'Ejecuta scripts de build/test',
          'Deploy automático si pasa tests',
          'Notifica equipo del resultado'
        ]
      });
    }
  }

  return useCases;
}

console.log('🔍 Añadiendo casos de uso a workflows...\n');

let totalUpdated = 0;

dirs.forEach(baseDir => {
  if (!fs.existsSync(baseDir)) return;

  const categories = fs.readdirSync(baseDir).filter(f => {
    const fullPath = path.join(baseDir, f);
    return fs.statSync(fullPath).isDirectory();
  });

  categories.forEach(category => {
    const categoryPath = path.join(baseDir, category);
    const workflows = fs.readdirSync(categoryPath).filter(f => {
      const fullPath = path.join(categoryPath, f);
      return fs.statSync(fullPath).isDirectory();
    });

    workflows.forEach(workflowFolder => {
      const workflowPath = path.join(categoryPath, workflowFolder);

      // Buscar archivo JSON
      const jsonFile = fs.readdirSync(workflowPath).find(f => f.endsWith('.json'));
      if (!jsonFile) return;

      // Buscar archivo README
      const readmeFile = fs.readdirSync(workflowPath).find(f =>
        f === 'README.txt' || f === 'CONVERSIÓN-A-GRATIS.txt'
      );
      if (!readmeFile) return;

      try {
        // Leer workflow
        const workflowContent = fs.readFileSync(path.join(workflowPath, jsonFile), 'utf8');
        const workflow = JSON.parse(workflowContent);
        const nodes = workflow.nodes || [];

        // Leer README actual
        const readmePath = path.join(workflowPath, readmeFile);
        let readme = fs.readFileSync(readmePath, 'utf8');

        // Detectar conversiones si existen
        const conversions = [];
        if (readme.includes('CONVERSIONES NECESARIAS')) {
          const convMatch = readme.match(/REEMPLAZAR: (\w+)/g);
          if (convMatch) {
            convMatch.forEach(m => {
              const service = m.replace('REEMPLAZAR: ', '').toLowerCase();
              conversions.push({ from: service });
            });
          }
        }

        // Generar casos de uso
        const useCases = generateUseCases(workflow, nodes, category, conversions);

        if (useCases.length === 0) return;

        // Buscar dónde insertar casos de uso
        let insertPosition;

        if (readme.includes('═════════════════════════════════════════════════════════════════\n DESCRIPCIÓN')) {
          insertPosition = readme.indexOf('═════════════════════════════════════════════════════════════════\n DESCRIPCIÓN');
        } else if (readme.includes('DESCRIPCIÓN')) {
          insertPosition = readme.indexOf('\n\n', readme.indexOf('DESCRIPCIÓN')) + 2;
        } else {
          // Insertar después del header
          const headerEnd = readme.indexOf('\n\n') + 2;
          insertPosition = headerEnd;
        }

        // Construir sección de casos de uso
        let useCaseSection = '\n═════════════════════════════════════════════════════════════════\n';
        useCaseSection += ' 💡 CASOS DE USO PRÁCTICOS\n';
        useCaseSection += '═════════════════════════════════════════════════════════════════\n\n';

        useCases.forEach((useCase, i) => {
          useCaseSection += `${i + 1}. ${useCase.title}\n`;
          useCaseSection += `   ─────────────────────────────────────────────────────────────\n`;
          useCaseSection += `   ${useCase.description}\n\n`;
          useCaseSection += `   📝 EJEMPLO REAL:\n`;
          useCaseSection += `   "${useCase.example}"\n\n`;
          useCaseSection += `   🔧 CÓMO IMPLEMENTARLO:\n`;
          useCase.steps.forEach((step, j) => {
            useCaseSection += `   ${j + 1}. ${step}\n`;
          });
          useCaseSection += `\n`;
        });

        // Insertar casos de uso (solo si no existen ya)
        if (!readme.includes('CASOS DE USO PRÁCTICOS')) {
          const before = readme.substring(0, insertPosition);
          const after = readme.substring(insertPosition);
          readme = before + useCaseSection + after;

          // Guardar README actualizado
          fs.writeFileSync(readmePath, readme);
          totalUpdated++;
        }

      } catch (error) {
        console.error(`Error procesando ${workflowFolder}:`, error.message);
      }
    });
  });

  console.log(`✅ ${baseDir}: workflows actualizados`);
});

console.log(`\n✅ Completado!\n`);
console.log(`📊 Total de READMEs actualizados: ${totalUpdated}`);
console.log(`💡 Cada workflow ahora tiene casos de uso prácticos y ejemplos reales\n`);
