╔══════════════════════════════════════════════════════════════════╗
║  1308_Code_Microsoftoutlook_Send_Webhook                         ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1308_Code_Microsoftoutlook_Send_Webhook.json
📂 Categoría: Desarrollo/Scripts
🔢 ID: 1308

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 18
🏷️  Keywords: code, microsoftoutlook, send, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (18 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.openAi
  └─ ChatGPT Analysis
▸ code
  └─ Format Headers
  └─ Rename Screenshot
▸ gmailTrigger
  └─ Gmail Trigger
▸ httpRequest
  └─ Screenshot HTML
  └─ Retrieve Screenshot
  └─ Retrieve Headers of Email
▸ jira
  └─ Create Jira Ticket
  └─ Upload Screenshot of Email to Jira
▸ microsoftOutlookTrigger
  └─ Microsoft Outlook Trigger
▸ set
  └─ Set Outlook Variables
  └─ Set Gmail Variables
  └─ Set Email Variables
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1308_Code_Microsoftoutlook_Send_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Gmail Trigger
      → Tipo: gmailTrigger
      → Credencial requerida: gmailOAuth2
   2. Microsoft Outlook Trigger
      → Tipo: microsoftOutlookTrigger
      → Credencial requerida: microsoftOutlookOAuth2Api
   3. Screenshot HTML
      → Tipo: httpRequest
      → Credencial requerida: httpBasicAuth
   4. Retrieve Screenshot
      → Tipo: httpRequest
      → Credencial requerida: httpBasicAuth
   5. Retrieve Headers of Email
      → Tipo: httpRequest
      → Credencial requerida: microsoftOutlookOAuth2Api
   6. ChatGPT Analysis
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   7. Create Jira Ticket
      → Tipo: jira
      → Credencial requerida: jiraSoftwareCloudApi
   8. Upload Screenshot of Email to Jira
      → Tipo: jira
      → Credencial requerida: jiraSoftwareCloudApi

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
