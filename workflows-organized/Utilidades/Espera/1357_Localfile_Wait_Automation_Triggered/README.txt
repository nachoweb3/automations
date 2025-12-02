╔══════════════════════════════════════════════════════════════════╗
║  1357_Localfile_Wait_Automation_Triggered                        ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1357_Localfile_Wait_Automation_Triggered.json
📂 Categoría: Utilidades/Espera
🔢 ID: 1357

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 42
🏷️  Keywords: localfile, wait, automation, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (42 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ Generate
  └─ Interview
▸ @n8n/n8n-nodes-langchain.chainRetrievalQa
  └─ Discover
▸ @n8n/n8n-nodes-langchain.chainSummarization
  └─ Summarization Chain
▸ @n8n/n8n-nodes-langchain.documentDefaultDataLoader
  └─ Default Data Loader
▸ @n8n/n8n-nodes-langchain.embeddingsMistralCloud
  └─ Embeddings Mistral Cloud
  └─ Embeddings Mistral Cloud1
▸ @n8n/n8n-nodes-langchain.lmChatMistralCloud
  └─ Mistral Cloud Chat Model
  └─ Mistral Cloud Chat Model1
  └─ Mistral Cloud Chat Model2
  └─ Mistral Cloud Chat Model3
▸ @n8n/n8n-nodes-langchain.outputParserItemList
  └─ Item List Output Parser
▸ @n8n/n8n-nodes-langchain.retrieverVectorStore
  └─ Vector Store Retriever
▸ @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
  └─ Recursive Character Text Splitter
▸ @n8n/n8n-nodes-langchain.vectorStoreQdrant
  └─ Qdrant Vector Store1
  └─ Qdrant Vector Store
▸ aggregate
  └─ Aggregate
▸ convertToFile
  └─ To Binary
▸ extractFromFile
  └─ Extract from PDF
  └─ Extract from DOCX
  └─ Extract from TEXT
▸ localFileTrigger
  └─ Local File Trigger
▸ merge
  └─ Merge
▸ readWriteFile
  └─ Export to Folder
  └─ Import File
▸ set
  └─ Prep Incoming Doc
  └─ Settings
  └─ Get Doc Types
  └─ Get Generated Documents
  └─ Prep For AI
▸ splitInBatches
  └─ For Each Doc Type...
▸ splitOut
  └─ Split Out Doc Types
  └─ Split Out
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note6
▸ switch
  └─ Get FileType
▸ wait
  └─ 2secs

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1357_Localfile_Wait_Automation_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. Embeddings Mistral Cloud
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsMistralCloud
      → Credencial requerida: mistralCloudApi
   2. Mistral Cloud Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatMistralCloud
      → Credencial requerida: mistralCloudApi
   3. Mistral Cloud Chat Model1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatMistralCloud
      → Credencial requerida: mistralCloudApi
   4. Embeddings Mistral Cloud1
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsMistralCloud
      → Credencial requerida: mistralCloudApi
   5. Qdrant Vector Store1
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreQdrant
      → Credencial requerida: qdrantApi
   6. Mistral Cloud Chat Model2
      → Tipo: @n8n/n8n-nodes-langchain.lmChatMistralCloud
      → Credencial requerida: mistralCloudApi
   7. Mistral Cloud Chat Model3
      → Tipo: @n8n/n8n-nodes-langchain.lmChatMistralCloud
      → Credencial requerida: mistralCloudApi
   8. Qdrant Vector Store
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
