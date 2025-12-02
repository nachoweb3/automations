╔══════════════════════════════════════════════════════════════════╗
║  🤖 AI Powered RAG Chatbot for Your Docs + Google Drive + Gemini + Qdrant  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1185_Telegram_Wait_Automate_Webhook.json
📂 Categoría: Comunicación/Chat
🔢 ID: 1185

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

🌐 Activado por webhook (API)
👆 Activación manual

📊 Total de nodos: 50
🏷️  Keywords: telegram, wait, automate, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Crear bots de respuesta automática
2. Enviar notificaciones a canales/grupos
3. Integrar con otros servicios para notificaciones

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (50 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Agent
▸ @n8n/n8n-nodes-langchain.chatTrigger
  └─ When chat message received
▸ @n8n/n8n-nodes-langchain.code
  └─ Delete Qdrant Points by File ID
▸ @n8n/n8n-nodes-langchain.documentDefaultDataLoader
  └─ Data Loader
▸ @n8n/n8n-nodes-langchain.embeddingsOpenAi
  └─ text-embeddings-3-large
  └─ text-embeddings-3-large1
▸ @n8n/n8n-nodes-langchain.informationExtractor
  └─ Extract Meta Data
▸ @n8n/n8n-nodes-langchain.lmChatGoogleGemini
  └─ Google Gemini Chat Model
  └─ Google Gemini Chat Model1
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ gpt-4o-mini1
  └─ OpenAI Chat Model
▸ @n8n/n8n-nodes-langchain.memoryBufferWindow
  └─ Window Buffer Memory
▸ @n8n/n8n-nodes-langchain.textSplitterTokenSplitter
  └─ Token Splitter
▸ @n8n/n8n-nodes-langchain.vectorStoreQdrant
  └─ Qdrant Vector Store
  └─ Qdrant Vector Store Tool
▸ extractFromFile
  └─ Get File Contents
▸ googleDocs
  └─ Update Chat History
▸ googleDrive
  └─ Download File From Google Drive
  └─ Find File Ids in Google Drive Folder
  └─ Google Drive
▸ if
  └─ If
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ merge
  └─ Merge
  └─ Merge1
  └─ Merge2
▸ set
  └─ Google Folder ID
  └─ Qdrant Collection Name
  └─ Respond to User
▸ splitInBatches
  └─ Loop Over Items
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note6
  └─ Sticky Note7
  └─ Sticky Note8
  └─ Sticky Note9
  └─ Sticky Note10
  └─ Sticky Note11
  └─ Sticky Note12
  └─ Sticky Note13
  └─ Sticky Note14
▸ summarize
  └─ File Id List
▸ telegram
  └─ Confirm Qdrant Delete Points
  └─ Send Declined Message
  └─ Send Completed Message
▸ wait
  └─ Wait
▸ webhook
  └─ Webhook

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1185_Telegram_Wait_Automate_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Qdrant Vector Store
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreQdrant
      → Credencial requerida: qdrantApi
   2. Google Gemini Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → Credencial requerida: googlePalmApi
   3. Download File From Google Drive
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   4. Find File Ids in Google Drive Folder
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   5. text-embeddings-3-large
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsOpenAi
      → Credencial requerida: openAiApi
   6. gpt-4o-mini1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   7. Confirm Qdrant Delete Points
      → Tipo: telegram
      → Credencial requerida: telegramApi
   8. Send Declined Message
      → Tipo: telegram
      → Credencial requerida: telegramApi
   9. Google Gemini Chat Model1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → Credencial requerida: googlePalmApi
   10. text-embeddings-3-large1
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsOpenAi
      → Credencial requerida: openAiApi
   11. Google Drive
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   12. Update Chat History
      → Tipo: googleDocs
      → Credencial requerida: googleDocsOAuth2Api
   13. Qdrant Vector Store Tool
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreQdrant
      → Credencial requerida: qdrantApi
   14. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   15. Send Completed Message
      → Tipo: telegram
      → Credencial requerida: telegramApi

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
