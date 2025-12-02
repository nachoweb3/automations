╔══════════════════════════════════════════════════════════════════╗
║  1299_Code_Webhook_Automation_Webhook                            ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1299_Code_Webhook_Automation_Webhook.json
📂 Categoría: Desarrollo/Scripts
🔢 ID: 1299

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

🌐 Activado por webhook (API)

📊 Total de nodos: 39
🏷️  Keywords: code, webhook, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (39 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ Appointment booking agent
▸ @n8n/n8n-nodes-langchain.chainRetrievalQa
  └─ Question and Answer Chain
▸ @n8n/n8n-nodes-langchain.chatTrigger
  └─ When chat message received
▸ @n8n/n8n-nodes-langchain.documentDefaultDataLoader
  └─ Default Data Loader
▸ @n8n/n8n-nodes-langchain.embeddingsOpenAi
  └─ Embeddings OpenAI
  └─ Embeddings OpenAI2
▸ @n8n/n8n-nodes-langchain.lmChatAnthropic
  └─ Anthropic Chat Model
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
  └─ OpenAI Chat Model1
▸ @n8n/n8n-nodes-langchain.memoryBufferWindow
  └─ Window Buffer Memory
▸ @n8n/n8n-nodes-langchain.retrieverVectorStore
  └─ Vector Store Retriever
▸ @n8n/n8n-nodes-langchain.textClassifier
  └─ Assign label with AI
▸ @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
  └─ Recursive Character Text Splitter
▸ @n8n/n8n-nodes-langchain.toolHttpRequest
  └─ Get calendar availability
  └─ Book appointment
▸ @n8n/n8n-nodes-langchain.vectorStorePinecone
  └─ Read Pinecone Vector Store
  └─ Insert into Pinecone vector store
▸ code
  └─ Execute JavaScript
▸ gmail
  └─ Add automation label
  └─ Add music label
▸ gmailTrigger
  └─ On new email to nathan's inbox
▸ httpRequest
  └─ Download PDF
▸ if
  └─ Whether email contains n8n
▸ noOp
  └─ PDFs to download
▸ slack
  └─ Send message
▸ stickyNote
  └─ Sticky Note2
  └─ Sticky Note
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note6
  └─ Sticky Note7
  └─ Sticky Note1
  └─ Sticky Note8
  └─ Sticky Note9
  └─ Sticky Note10
  └─ Sticky Note11
  └─ Sticky Note12
▸ webhook
  └─ Webhook

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1299_Code_Webhook_Automation_Webhook.json

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
