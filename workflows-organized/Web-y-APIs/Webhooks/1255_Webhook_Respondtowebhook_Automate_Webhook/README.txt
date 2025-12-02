╔══════════════════════════════════════════════════════════════════╗
║  Stock Q&A Workflow                                              ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1255_Webhook_Respondtowebhook_Automate_Webhook.json
📂 Categoría: Web-y-APIs/Webhooks
🔢 ID: 1255

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

🌐 Activado por webhook (API)
👆 Activación manual

📊 Total de nodos: 17
🏷️  Keywords: webhook, respondtowebhook, automate, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (17 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainRetrievalQa
  └─ Retrieval QA Chain
▸ @n8n/n8n-nodes-langchain.documentBinaryInputLoader
  └─ Binary to Document
▸ @n8n/n8n-nodes-langchain.embeddingsOpenAi
  └─ Embeddings OpenAI1
  └─ Embeddings OpenAI
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
▸ @n8n/n8n-nodes-langchain.manualChatTrigger
  └─ On new manual Chat Message
▸ @n8n/n8n-nodes-langchain.retrieverVectorStore
  └─ Vector Store Retriever
▸ @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
  └─ Recursive Character Text Splitter
▸ @n8n/n8n-nodes-langchain.vectorStoreQdrant
  └─ Qdrant Vector Store
  └─ Qdrant Vector Store1
▸ googleDrive
  └─ Google Drive
▸ manualTrigger
  └─ When clicking "Execute Workflow"
▸ respondToWebhook
  └─ Respond to Webhook
▸ stickyNote
  └─ Sticky Note1
  └─ Sticky Note
  └─ Sticky Note2
▸ webhook
  └─ Webhook1

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1255_Webhook_Respondtowebhook_Automate_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Embeddings OpenAI1
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsOpenAi
      → Credencial requerida: openAiApi
   2. Google Drive
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   3. Embeddings OpenAI
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsOpenAi
      → Credencial requerida: openAiApi
   4. Qdrant Vector Store
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreQdrant
      → Credencial requerida: qdrantApi
   5. Qdrant Vector Store1
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreQdrant
      → Credencial requerida: qdrantApi
   6. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
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
