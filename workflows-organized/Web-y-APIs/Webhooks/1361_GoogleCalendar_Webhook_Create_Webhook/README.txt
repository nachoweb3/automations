╔══════════════════════════════════════════════════════════════════╗
║  Build a Chatbot, Voice Agent and Phone Agent with Voiceflow, Google Calendar and RAG  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1361_GoogleCalendar_Webhook_Create_Webhook.json
📂 Categoría: Web-y-APIs/Webhooks
🔢 ID: 1361

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

🌐 Activado por webhook (API)
👆 Activación manual

📊 Total de nodos: 34
🏷️  Keywords: googlecalendar, webhook, create, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (34 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ Retrive Agent
▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ Concert start date
▸ @n8n/n8n-nodes-langchain.documentDefaultDataLoader
  └─ Default Data Loader
▸ @n8n/n8n-nodes-langchain.embeddingsOpenAi
  └─ Embeddings OpenAI2
  └─ Embeddings OpenAI
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model3
  └─ OpenAI Chat Model2
  └─ OpenAI Chat Model1
▸ @n8n/n8n-nodes-langchain.outputParserStructured
  └─ Structured Output Parser
▸ @n8n/n8n-nodes-langchain.textSplitterTokenSplitter
  └─ Token Splitter
▸ @n8n/n8n-nodes-langchain.toolVectorStore
  └─ RAG
▸ @n8n/n8n-nodes-langchain.vectorStoreQdrant
  └─ Retrive Qdrant Vector Store
  └─ Qdrant Vector Store
▸ googleCalendar
  └─ Google Calendar
▸ googleDrive
  └─ Get folder
  └─ Download Files
▸ httpRequest
  └─ API URL Tracking
  └─ Create collection
  └─ Refresh collection
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ respondToWebhook
  └─ Webhook tracking response
  └─ Webhook calendar response
  └─ Webhook RAG response
▸ set
  └─ Tracking response
  └─ Calendar response
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note6
  └─ Sticky Note7
▸ webhook
  └─ n8n_order
  └─ n8n_appointment
  └─ n8n_rag

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1361_GoogleCalendar_Webhook_Create_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Google Calendar
      → Tipo: googleCalendar
      → Credencial requerida: googleCalendarOAuth2Api
   2. OpenAI Chat Model3
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   3. Retrive Qdrant Vector Store
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreQdrant
      → Credencial requerida: qdrantApi
   4. Embeddings OpenAI2
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsOpenAi
      → Credencial requerida: openAiApi
   5. OpenAI Chat Model2
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   6. OpenAI Chat Model1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   7. Qdrant Vector Store
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreQdrant
      → Credencial requerida: qdrantApi
   8. Create collection
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   9. Refresh collection
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   10. Get folder
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   11. Download Files
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   12. Embeddings OpenAI
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsOpenAi
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
