╔══════════════════════════════════════════════════════════════════╗
║  RAG Workflow For Company Documents stored in Google Drive       ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1141_Stickynote_GoogleDrive_Automate_Triggered.json
📂 Categoría: Automatización/General
🔢 ID: 1141

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 18
🏷️  Keywords: stickynote, googledrive, automate, triggered

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
▸ @n8n/n8n-nodes-langchain.chatTrigger
  └─ When chat message received
▸ @n8n/n8n-nodes-langchain.documentDefaultDataLoader
  └─ Default Data Loader
▸ @n8n/n8n-nodes-langchain.embeddingsGoogleGemini
  └─ Embeddings Google Gemini
  └─ Embeddings Google Gemini (retrieval)
▸ @n8n/n8n-nodes-langchain.lmChatGoogleGemini
  └─ Google Gemini Chat Model
  └─ Google Gemini Chat Model (retrieval)
▸ @n8n/n8n-nodes-langchain.memoryBufferWindow
  └─ Window Buffer Memory
▸ @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
  └─ Recursive Character Text Splitter
▸ @n8n/n8n-nodes-langchain.toolVectorStore
  └─ Vector Store Tool
▸ @n8n/n8n-nodes-langchain.vectorStorePinecone
  └─ Pinecone Vector Store
  └─ Pinecone Vector Store (Retrieval)
▸ googleDrive
  └─ Download File From Google Drive
▸ googleDriveTrigger
  └─ Google Drive File Updated
  └─ Google Drive File Created
▸ stickyNote
  └─ Sticky Note2
  └─ Sticky Note
  └─ Sticky Note1

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1141_Stickynote_GoogleDrive_Automate_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. Pinecone Vector Store
      → Tipo: @n8n/n8n-nodes-langchain.vectorStorePinecone
      → Credencial requerida: pineconeApi
   2. Embeddings Google Gemini
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsGoogleGemini
      → Credencial requerida: googlePalmApi
   3. Pinecone Vector Store (Retrieval)
      → Tipo: @n8n/n8n-nodes-langchain.vectorStorePinecone
      → Credencial requerida: pineconeApi
   4. Embeddings Google Gemini (retrieval)
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsGoogleGemini
      → Credencial requerida: googlePalmApi
   5. Download File From Google Drive
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   6. Google Drive File Updated
      → Tipo: googleDriveTrigger
      → Credencial requerida: googleDriveOAuth2Api
   7. Google Drive File Created
      → Tipo: googleDriveTrigger
      → Credencial requerida: googleDriveOAuth2Api
   8. Google Gemini Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → Credencial requerida: googlePalmApi
   9. Google Gemini Chat Model (retrieval)
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → Credencial requerida: googlePalmApi

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
