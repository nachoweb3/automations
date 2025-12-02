╔══════════════════════════════════════════════════════════════════╗
║  1335_Googledocs_Webhook_Process_Webhook                         ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1335_Googledocs_Webhook_Process_Webhook.json
📂 Categoría: Web-y-APIs/Webhooks
🔢 ID: 1335

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

🌐 Activado por webhook (API)

📊 Total de nodos: 23
🏷️  Keywords: googledocs, webhook, process, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (23 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ Extract Questions From RFP
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
▸ @n8n/n8n-nodes-langchain.openAi
  └─ Answer Question with Context
▸ @n8n/n8n-nodes-langchain.outputParserItemList
  └─ Item List Output Parser
▸ extractFromFile
  └─ Get RFP Data
▸ gmail
  └─ Send Email Notification
▸ googleDocs
  └─ Create new RFP Response Document
  └─ Add Metadata to Response Doc
  └─ Record Question & Answer in Response Doc
▸ set
  └─ Set Variables
▸ slack
  └─ Send Chat Notification
▸ splitInBatches
  └─ For Each Question...
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note6
  └─ Sticky Note7
  └─ Sticky Note8
  └─ Sticky Note9
▸ webhook
  └─ Wait for Request

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1335_Googledocs_Webhook_Process_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Create new RFP Response Document
      → Tipo: googleDocs
      → Credencial requerida: googleDocsOAuth2Api
   2. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   3. Send Chat Notification
      → Tipo: slack
      → Credencial requerida: slackApi
   4. Send Email Notification
      → Tipo: gmail
      → Credencial requerida: gmailOAuth2
   5. Add Metadata to Response Doc
      → Tipo: googleDocs
      → Credencial requerida: googleDocsOAuth2Api
   6. Record Question & Answer in Response Doc
      → Tipo: googleDocs
      → Credencial requerida: googleDocsOAuth2Api
   7. Answer Question with Context
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi

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
