╔══════════════════════════════════════════════════════════════════╗
║  Building RAG Chatbot for Movie Recommendations with Qdrant and Open AI  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1363_Splitout_GitHub_Create_Webhook.json
📂 Categoría: Procesamiento-Datos/Transformación
🔢 ID: 1363

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 27
🏷️  Keywords: splitout, github, create, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (27 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Agent
▸ @n8n/n8n-nodes-langchain.chatTrigger
  └─ When chat message received
▸ @n8n/n8n-nodes-langchain.documentDefaultDataLoader
  └─ Default Data Loader
▸ @n8n/n8n-nodes-langchain.embeddingsOpenAi
  └─ Embeddings OpenAI
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
▸ @n8n/n8n-nodes-langchain.memoryBufferWindow
  └─ Window Buffer Memory
▸ @n8n/n8n-nodes-langchain.textSplitterTokenSplitter
  └─ Token Splitter
▸ @n8n/n8n-nodes-langchain.toolWorkflow
  └─ Call n8n Workflow Tool
▸ @n8n/n8n-nodes-langchain.vectorStoreQdrant
  └─ Qdrant Vector Store
▸ aggregate
  └─ Aggregate
▸ executeWorkflowTrigger
  └─ Execute Workflow Trigger
▸ extractFromFile
  └─ Extract from File
▸ github
  └─ GitHub
▸ httpRequest
  └─ Embedding Recommendation Request with Open AI
  └─ Embedding Anti-Recommendation Request with Open AI
  └─ Calling Qdrant Recommendation API
  └─ Retrieving Recommended Movies Meta Data
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ merge
  └─ Merge
  └─ Merge1
▸ set
  └─ Extracting Embedding
  └─ Extracting Embedding1
  └─ Selecting Fields Relevant for Agent
▸ splitOut
  └─ Split Out
  └─ Split Out1
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1363_Splitout_GitHub_Create_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. GitHub
      → Tipo: github
      → Credencial requerida: githubApi
   2. Embeddings OpenAI
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsOpenAi
      → Credencial requerida: openAiApi
   3. Qdrant Vector Store
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreQdrant
      → Credencial requerida: qdrantApi
   4. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   5. Embedding Recommendation Request with Open AI
      → Tipo: httpRequest
      → Credencial requerida: openAiApi
   6. Embedding Anti-Recommendation Request with Open AI
      → Tipo: httpRequest
      → Credencial requerida: openAiApi
   7. Calling Qdrant Recommendation API
      → Tipo: httpRequest
      → Credencial requerida: qdrantApi
   8. Retrieving Recommended Movies Meta Data
      → Tipo: httpRequest
      → Credencial requerida: qdrantApi

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
