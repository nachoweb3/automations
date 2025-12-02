╔══════════════════════════════════════════════════════════════════╗
║  AI Agent to chat with you Search Console Data, using OpenAI and Postgres  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1252_Webhook_Respondtowebhook_Automation_Webhook.json
📂 Categoría: Web-y-APIs/Webhooks
🔢 ID: 1252

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

🌐 Activado por webhook (API)

📊 Total de nodos: 30
🏷️  Keywords: webhook, respondtowebhook, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (30 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Agent
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
▸ @n8n/n8n-nodes-langchain.memoryPostgresChat
  └─ Postgres Chat Memory
▸ @n8n/n8n-nodes-langchain.toolWorkflow
  └─ Call Search Console Tool
▸ aggregate
  └─ Array aggregation - response to AI Agent
  └─ Array aggregation - response to AI Agent1
▸ executeWorkflowTrigger
  └─ Tool calling
▸ httpRequest
  └─ Search Console - Get Custom Insights
  └─ ## Search Console - Get List of Properties
▸ respondToWebhook
  └─ Respond to Webhook
▸ set
  └─ Set fields
  └─ Set fields - Consruct API CALL
  └─ Set fields - Create searchConsoleDataArray
  └─ Set fields - Create searchConsoleDataArray 2
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note6
  └─ Sticky Note5
  └─ Sticky Note7
  └─ Sticky Note8
  └─ Sticky Note9
  └─ Sticky Note10
  └─ Sticky Note11
  └─ Sticky Note12
  └─ Sticky Note13
▸ switch
  └─ Switch
▸ webhook
  └─ Webhook - ChatInput

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1252_Webhook_Respondtowebhook_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Postgres Chat Memory
      → Tipo: @n8n/n8n-nodes-langchain.memoryPostgresChat
      → Credencial requerida: postgres
   2. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   3. Webhook - ChatInput
      → Tipo: webhook
      → Credencial requerida: httpBasicAuth
   4. Search Console - Get Custom Insights
      → Tipo: httpRequest
      → Credencial requerida: oAuth2Api
   5. ## Search Console - Get List of Properties
      → Tipo: httpRequest
      → Credencial requerida: oAuth2Api

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
