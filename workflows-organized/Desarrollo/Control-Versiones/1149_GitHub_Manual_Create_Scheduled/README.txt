╔══════════════════════════════════════════════════════════════════╗
║  1149_GitHub_Manual_Create_Scheduled                             ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1149_GitHub_Manual_Create_Scheduled.json
📂 Categoría: Desarrollo/Control-Versiones
🔢 ID: 1149

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 16
🏷️  Keywords: github, manual, create, scheduled

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (16 total)
═════════════════════════════════════════════════════════════════

▸ cron
  └─ Daily @ 20:00
▸ function
  └─ dataArray
  └─ isDiffOrNew
▸ github
  └─ GitHub
  └─ GitHub Edit
  └─ GitHub Create
▸ httpRequest
  └─ N8N Workflows
  └─ N8N Workflow Detail
▸ manualTrigger
  └─ On clicking 'execute'
▸ merge
  └─ Merge
▸ noOp
  └─ same
  └─ different
  └─ new
▸ set
  └─ Globals
▸ splitInBatches
  └─ OneAtATime
▸ switch
  └─ github_status

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1149_GitHub_Manual_Create_Scheduled.json

🔐 PASO 2: Configurar credenciales
   1. GitHub
      → Tipo: github
      → Credencial requerida: githubApi
   2. GitHub Edit
      → Tipo: github
      → Credencial requerida: githubApi
   3. GitHub Create
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
