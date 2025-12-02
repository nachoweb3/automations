╔══════════════════════════════════════════════════════════════════╗
║  RAG Workflow For Stock Earnings Report Analysis                 ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1279_Googledocs_Manual_Automate_Triggered.json
📂 Categoría: Utilidades/Triggers
🔢 ID: 1279

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 18
🏷️  Keywords: googledocs, manual, automate, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (18 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Agent
▸ @n8n/n8n-nodes-langchain.documentDefaultDataLoader
  └─ Default Data Loader
▸ @n8n/n8n-nodes-langchain.embeddingsGoogleGemini
  └─ Embeddings Google Gemini
  └─ Embeddings Google Gemini (retrieval)
▸ @n8n/n8n-nodes-langchain.lmChatGoogleGemini
  └─ Google Gemini Chat Model1
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
▸ @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
  └─ Recursive Character Text Splitter
▸ @n8n/n8n-nodes-langchain.toolVectorStore
  └─ Vector Store Tool
▸ @n8n/n8n-nodes-langchain.vectorStorePinecone
  └─ Pinecone Vector Store
  └─ Pinecone Vector Store (Retrieval)
▸ googleDocs
  └─ Save Report to Google Docs
▸ googleDrive
  └─ Download File From Google Drive
▸ googleSheets
  └─ List Of Files To Load (Google Sheets)
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ splitInBatches
  └─ Loop Over Items
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
   3. Selecciona: 1279_Googledocs_Manual_Automate_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. Pinecone Vector Store
      → Tipo: @n8n/n8n-nodes-langchain.vectorStorePinecone
      → Credencial requerida: pineconeApi
   2. Embeddings Google Gemini
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsGoogleGemini
      → Credencial requerida: googlePalmApi
   3. Google Gemini Chat Model1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → Credencial requerida: googlePalmApi
   4. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   5. Pinecone Vector Store (Retrieval)
      → Tipo: @n8n/n8n-nodes-langchain.vectorStorePinecone
      → Credencial requerida: pineconeApi
   6. Save Report to Google Docs
      → Tipo: googleDocs
      → Credencial requerida: googleDocsOAuth2Api
   7. Embeddings Google Gemini (retrieval)
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsGoogleGemini
      → Credencial requerida: googlePalmApi
   8. List Of Files To Load (Google Sheets)
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   9. Download File From Google Drive
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api

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
