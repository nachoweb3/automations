╔══════════════════════════════════════════════════════════════════╗
║  Bitrix24 Open Chanel RAG Chatbot Application Workflow example with Webhook Integration  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1355_Splitout_Webhook_Automate_Webhook.json
📂 Categoría: Procesamiento-Datos/Transformación
🔢 ID: 1355

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

🌐 Activado por webhook (API)

📊 Total de nodos: 34
🏷️  Keywords: splitout, webhook, automate, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (34 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainRetrievalQa
  └─ Question and Answer Chain
▸ @n8n/n8n-nodes-langchain.documentDefaultDataLoader
  └─ Default Data Loader
▸ @n8n/n8n-nodes-langchain.embeddingsOllama
  └─ Embeddings Ollama
  └─ Embeddings Ollama1
▸ @n8n/n8n-nodes-langchain.lmChatGoogleGemini
  └─ Google Gemini Chat Model
▸ @n8n/n8n-nodes-langchain.retrieverVectorStore
  └─ Vector Store Retriever
▸ @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
  └─ Recursive Character Text Splitter
▸ @n8n/n8n-nodes-langchain.vectorStoreQdrant
  └─ Qdrant Vector Store
  └─ Qdrant Vector Store1
▸ executeWorkflow
  └─ Execute subworkflow
▸ executeWorkflowTrigger
  └─ Execute Workflow Trigger
▸ filter
  └─ Filter for files
▸ function
  └─ Process Message
  └─ Process Join
  └─ Process Install
▸ httpRequest
  └─ Register Bot
  └─ Send Message
  └─ Send Join Message
  └─ Get a list of available storages
  └─ Get a list of List of Files and Folders
  └─ Get a list of Folders files
  └─ Download file
  └─ Move files to Vector stored folder
▸ if
  └─ Validate Token
▸ merge
  └─ Merge parameters for Subworkflow
▸ noOp
  └─ Process Delete
▸ respondToWebhook
  └─ Success Response
  └─ Error Response
▸ set
  └─ Credentials
  └─ Prepare output parameters
▸ splitOut
  └─ Split Out folder files and folders
▸ stickyNote
  └─ Sticky Note
▸ switch
  └─ Route Event
▸ webhook
  └─ Bitrix24 Handler

═════════════════════════════════════════════════════════════════
 ETIQUETAS
═════════════════════════════════════════════════════════════════

🏷️  Tech demo
🏷️  Chatbot
🏷️  Open Channels
🏷️  Bitrix24

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1355_Splitout_Webhook_Automate_Webhook.json

🔐 PASO 2: Configurar credenciales
   ✅ No se detectaron credenciales automáticamente
   ⚠️  Revisa manualmente cada nodo por si requiere configuración

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
