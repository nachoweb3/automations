╔══════════════════════════════════════════════════════════════════╗
║  Dashboard                                                       ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1107_HTTP_GitHub_Automation_Webhook.json
📂 Categoría: Web-y-APIs/HTTP
🔢 ID: 1107

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 24
🏷️  Keywords: http, github, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (24 total)
═════════════════════════════════════════════════════════════════

▸ cron
  └─ Cron
▸ function
  └─ Massage npm Data
  └─ Massage Product Hunt Data
  └─ Massage Docker Data
  └─ Massage GitHub Data
▸ github
  └─ GitHub
▸ httpRequest
  └─ Retrieve Docker Data
  └─ Docker Pulls
  └─ Docker Stars
  └─ Retrieve npm Data
  └─ GitHub Watchers
  └─ GitHub Forks
  └─ GitHub Open Issues 
  └─ GitHub Stars
  └─ npm Maintenance
  └─ npm Popularity
  └─ npm Quality
  └─ npm Final
  └─ Product Hunt Rating
  └─ Product Hunt Reviews
  └─ Product Hunt Votes
  └─ Product Hunt Comments
  └─ Retrieve Product Hunt Data
▸ set
  └─ Dashboard Configuration

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1107_HTTP_GitHub_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. GitHub
      → Tipo: github
      → Credencial requerida: githubApi

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
