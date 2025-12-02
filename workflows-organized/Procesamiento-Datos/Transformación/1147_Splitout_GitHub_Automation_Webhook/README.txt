╔══════════════════════════════════════════════════════════════════╗
║  Restore your credentials from GitHub                            ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1147_Splitout_GitHub_Automation_Webhook.json
📂 Categoría: Procesamiento-Datos/Transformación
🔢 ID: 1147

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 11
🏷️  Keywords: splitout, github, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (11 total)
═════════════════════════════════════════════════════════════════

▸ extractFromFile
  └─ Convert files to JSON
▸ github
  └─ Get file content from GitHub
▸ httpRequest
  └─ Get all files in given path
▸ if
  └─ Check for skipped Credentials
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ n8n
  └─ Restore n8n Credentials
▸ set
  └─ Globals
▸ splitOut
  └─ Split the result
▸ stickyNote
  └─ Sticky Note1
  └─ Sticky Note4
  └─ Sticky Note

═════════════════════════════════════════════════════════════════
 ETIQUETAS
═════════════════════════════════════════════════════════════════

🏷️  N8n

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1147_Splitout_GitHub_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Get all files in given path
      → Tipo: httpRequest
      → Credencial requerida: githubApi
   2. Get file content from GitHub
      → Tipo: github
      → Credencial requerida: githubApi
   3. Restore n8n Credentials
      → Tipo: n8n
      → Credencial requerida: n8nApi

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
