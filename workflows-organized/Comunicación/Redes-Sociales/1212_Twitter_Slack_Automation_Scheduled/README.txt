╔══════════════════════════════════════════════════════════════════╗
║  Scrape Twitter for mentions of company                          ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1212_Twitter_Slack_Automation_Scheduled.json
📂 Categoría: Comunicación/Redes-Sociales
🔢 ID: 1212

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 7
🏷️  Keywords: twitter, slack, automation, scheduled

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (7 total)
═════════════════════════════════════════════════════════════════

▸ cron
  └─ Run Every 10 Minutes
▸ dateTime
  └─ Now - 10 minutes
▸ if
  └─ Created since last run?
▸ set
  └─ Filter Tweet Data
  └─ Setup
▸ slack
  └─ Post to Slack
▸ twitter
  └─ Get last 50 mentions

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1212_Twitter_Slack_Automation_Scheduled.json

🔐 PASO 2: Configurar credenciales
   1. Get last 50 mentions
      → Tipo: twitter
      → Credencial requerida: twitterOAuth1Api
   2. Post to Slack
      → Tipo: slack
      → Credencial requerida: slackApi

⚙️  PASO 3: Configurar parámetros
   • Revisa cada nodo y ajusta los parámetros según tu caso
   • Presta atención a:
     - URLs y endpoints
     - Nombres de archivos y rutas
     - IDs de recursos (channels, grupos, etc.)
     - Horarios (si usa schedule)

▶️  PASO 4: Activar y probar
   1. Guarda el workflow (Ctrl+S)
   2. Activa el workflow (toggle en la esquina superior)
   3. Prueba con el botón "Execute Workflow"
   4. Revisa los logs para verificar ejecución

═════════════════════════════════════════════════════════════════
 TROUBLESHOOTING
═════════════════════════════════════════════════════════════════

❌ Si el workflow falla:
   • Verifica que todas las credenciales estén configuradas
   • Revisa que los servicios externos estén disponibles
   • Comprueba los permisos de API/webhooks
   • Consulta los logs de n8n para errores específicos

═════════════════════════════════════════════════════════════════

📅 Organizado: 2025-10-20
🔗 Fuente: https://github.com/oxbshw/ultimate-n8n-ai-workflows
