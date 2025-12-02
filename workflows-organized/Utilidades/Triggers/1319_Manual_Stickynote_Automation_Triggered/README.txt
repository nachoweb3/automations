╔══════════════════════════════════════════════════════════════════╗
║  1319_Manual_Stickynote_Automation_Triggered                     ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1319_Manual_Stickynote_Automation_Triggered.json
📂 Categoría: Utilidades/Triggers
🔢 ID: 1319

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 16
🏷️  Keywords: manual, stickynote, automation, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (16 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainRetrievalQa
  └─ Question and Answer Chain
▸ @n8n/n8n-nodes-langchain.chatTrigger
  └─ When clicking 'Chat' button below
▸ @n8n/n8n-nodes-langchain.documentDefaultDataLoader
  └─ Default Data Loader
▸ @n8n/n8n-nodes-langchain.embeddingsOpenAi
  └─ Embeddings OpenAI
  └─ Embeddings OpenAI2
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
▸ @n8n/n8n-nodes-langchain.retrieverVectorStore
  └─ Vector Store Retriever
▸ @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
  └─ Recursive Character Text Splitter
▸ @n8n/n8n-nodes-langchain.vectorStorePinecone
  └─ Read Pinecone Vector Store
  └─ Insert into Pinecone vector store
▸ googleDrive
  └─ Google Drive
▸ manualTrigger
  └─ When clicking 'Test Workflow' button
▸ set
  └─ Set Google Drive file URL
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1319_Manual_Stickynote_Automation_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. Google Drive
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   2. Embeddings OpenAI
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsOpenAi
      → Credencial requerida: openAiApi
   3. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   4. Embeddings OpenAI2
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsOpenAi
      → Credencial requerida: openAiApi
   5. Read Pinecone Vector Store
      → Tipo: @n8n/n8n-nodes-langchain.vectorStorePinecone
      → Credencial requerida: pineconeApi
   6. Insert into Pinecone vector store
      → Tipo: @n8n/n8n-nodes-langchain.vectorStorePinecone
      → Credencial requerida: pineconeApi

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
