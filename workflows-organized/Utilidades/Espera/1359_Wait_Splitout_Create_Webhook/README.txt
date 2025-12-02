╔══════════════════════════════════════════════════════════════════╗
║  1359_Wait_Splitout_Create_Webhook                               ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1359_Wait_Splitout_Create_Webhook.json
📂 Categoría: Utilidades/Espera
🔢 ID: 1359

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 38
🏷️  Keywords: wait, splitout, create, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (38 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Agent
▸ @n8n/n8n-nodes-langchain.chatTrigger
  └─ When chat message received
▸ @n8n/n8n-nodes-langchain.documentDefaultDataLoader
  └─ Default Data Loader
▸ @n8n/n8n-nodes-langchain.embeddingsMistralCloud
  └─ Embeddings Mistral Cloud
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
▸ @n8n/n8n-nodes-langchain.memoryBufferWindow
  └─ Window Buffer Memory
  └─ Window Buffer Memory1
▸ @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
  └─ Recursive Character Text Splitter
▸ @n8n/n8n-nodes-langchain.toolWorkflow
  └─ Ask Tool
  └─ Search Tool
▸ @n8n/n8n-nodes-langchain.vectorStoreQdrant
  └─ Qdrant Vector Store
▸ compression
  └─ Extract Zip Files
▸ executeWorkflowTrigger
  └─ Execute Workflow Trigger
▸ extractFromFile
  └─ Extract PDF Contents
▸ filter
  └─ Only Valid Sections
▸ httpRequest
  └─ Get Tax Code Zip File
  └─ Get Mistral Embeddings
  └─ Use Qdrant Search API1
  └─ Use Qdrant Scroll API
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ set
  └─ Extract From Chapter
  └─ Map To Sections
  └─ Content Chunking @ 50k Chars
  └─ Get Search Response
  └─ Get Ask Response
▸ splitInBatches
  └─ For Each Section...
▸ splitOut
  └─ Files as Items
  └─ Split Out Chunks
  └─ Sections To List
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note6
▸ switch
  └─ Switch
▸ wait
  └─ 1sec

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1359_Wait_Splitout_Create_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Embeddings Mistral Cloud
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsMistralCloud
      → Credencial requerida: mistralCloudApi
   2. Get Mistral Embeddings
      → Tipo: httpRequest
      → Credencial requerida: mistralCloudApi
   3. Use Qdrant Search API1
      → Tipo: httpRequest
      → Credencial requerida: qdrantApi
   4. Use Qdrant Scroll API
      → Tipo: httpRequest
      → Credencial requerida: qdrantApi
   5. Qdrant Vector Store
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
