╔══════════════════════════════════════════════════════════════════╗
║  Voice RAG Chatbot with ElevenLabs and OpenAI                    ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1263_Webhook_Respondtowebhook_Automate_Webhook.json
📂 Categoría: Web-y-APIs/Webhooks
🔢 ID: 1263

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

🌐 Activado por webhook (API)
👆 Activación manual

📊 Total de nodos: 23
🏷️  Keywords: webhook, respondtowebhook, automate, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (23 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Agent
▸ @n8n/n8n-nodes-langchain.documentDefaultDataLoader
  └─ Default Data Loader
▸ @n8n/n8n-nodes-langchain.embeddingsOpenAi
  └─ Embeddings OpenAI
  └─ Embeddings OpenAI1
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI
  └─ OpenAI Chat Model
▸ @n8n/n8n-nodes-langchain.memoryBufferWindow
  └─ Window Buffer Memory
▸ @n8n/n8n-nodes-langchain.textSplitterTokenSplitter
  └─ Token Splitter
▸ @n8n/n8n-nodes-langchain.toolVectorStore
  └─ Vector Store Tool
▸ @n8n/n8n-nodes-langchain.vectorStoreQdrant
  └─ Qdrant Vector Store
  └─ Qdrant Vector Store1
▸ googleDrive
  └─ Get folder
  └─ Download Files
▸ httpRequest
  └─ Create collection
  └─ Refresh collection
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ respondToWebhook
  └─ Respond to ElevenLabs
▸ stickyNote
  └─ Sticky Note4
  └─ Sticky Note
  └─ Sticky Note3
  └─ Sticky Note5
  └─ Sticky Note6
▸ webhook
  └─ Listen

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1263_Webhook_Respondtowebhook_Automate_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Qdrant Vector Store
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreQdrant
      → Credencial requerida: qdrantApi
   2. Embeddings OpenAI
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsOpenAi
      → Credencial requerida: openAiApi
   3. Create collection
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   4. Refresh collection
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   5. Get folder
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   6. Download Files
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   7. Qdrant Vector Store1
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreQdrant
      → Credencial requerida: qdrantApi
   8. Embeddings OpenAI1
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsOpenAi
      → Credencial requerida: openAiApi
   9. OpenAI
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   10. OpenAI Chat Model
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
