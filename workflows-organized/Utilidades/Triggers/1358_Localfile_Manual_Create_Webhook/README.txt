╔══════════════════════════════════════════════════════════════════╗
║  1358_Localfile_Manual_Create_Webhook                            ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1358_Localfile_Manual_Create_Webhook.json
📂 Categoría: Utilidades/Triggers
🔢 ID: 1358

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 29
🏷️  Keywords: localfile, manual, create, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (29 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainRetrievalQa
  └─ Question and Answer Chain
▸ @n8n/n8n-nodes-langchain.chatTrigger
  └─ Chat Trigger
▸ @n8n/n8n-nodes-langchain.documentDefaultDataLoader
  └─ Default Data Loader
▸ @n8n/n8n-nodes-langchain.embeddingsMistralCloud
  └─ Embeddings Mistral Cloud
  └─ Embeddings Mistral Cloud1
▸ @n8n/n8n-nodes-langchain.lmChatMistralCloud
  └─ Mistral Cloud Chat Model
▸ @n8n/n8n-nodes-langchain.retrieverVectorStore
  └─ Vector Store Retriever
▸ @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
  └─ Recursive Character Text Splitter
▸ @n8n/n8n-nodes-langchain.vectorStoreQdrant
  └─ Qdrant Vector Store
  └─ Qdrant Vector Store1
▸ httpRequest
  └─ Search For Existing Point
  └─ Delete Existing Point
  └─ Search For Existing Point1
  └─ Delete Existing Point1
▸ if
  └─ Has Existing Point?
  └─ Has Existing Point?1
▸ localFileTrigger
  └─ Local File Trigger
▸ manualTrigger
  └─ When clicking "Test workflow"
▸ readWriteFile
  └─ Read File
▸ set
  └─ Set Variables
  └─ Prepare Embedding Document
  └─ Remap for File_Added Flow
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note4
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note5
▸ switch
  └─ Handle File Event

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1358_Localfile_Manual_Create_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Embeddings Mistral Cloud
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsMistralCloud
      → Credencial requerida: mistralCloudApi
   2. Mistral Cloud Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatMistralCloud
      → Credencial requerida: mistralCloudApi
   3. Embeddings Mistral Cloud1
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsMistralCloud
      → Credencial requerida: mistralCloudApi
   4. Search For Existing Point
      → Tipo: httpRequest
      → Credencial requerida: qdrantApi
   5. Delete Existing Point
      → Tipo: httpRequest
      → Credencial requerida: qdrantApi
   6. Search For Existing Point1
      → Tipo: httpRequest
      → Credencial requerida: qdrantApi
   7. Delete Existing Point1
      → Tipo: httpRequest
      → Credencial requerida: qdrantApi
   8. Qdrant Vector Store
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreQdrant
      → Credencial requerida: qdrantApi
   9. Qdrant Vector Store1
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreQdrant
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
