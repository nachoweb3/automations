╔══════════════════════════════════════════════════════════════════╗
║  Email AI Auto-responder. Summerize and send email               ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1277_Emailreadimap_Manual_Send_Webhook.json
📂 Categoría: Comunicación/Email
🔢 ID: 1277

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 26
🏷️  Keywords: emailreadimap, manual, send, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar respuestas a emails basadas en contenido
2. Clasificar y archivar emails automáticamente
3. Enviar notificaciones por email ante eventos específicos

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (26 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ Write email
▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ Review email
▸ @n8n/n8n-nodes-langchain.chainSummarization
  └─ Email Summarization Chain
▸ @n8n/n8n-nodes-langchain.documentDefaultDataLoader
  └─ Default Data Loader
▸ @n8n/n8n-nodes-langchain.embeddingsOpenAi
  └─ Embeddings OpenAI
  └─ Embeddings OpenAI1
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ DeepSeek R1
  └─ OpenAI
  └─ DeepSeek
  └─ OpenAI 4-o-mini
▸ @n8n/n8n-nodes-langchain.textClassifier
  └─ Email Classifier
▸ @n8n/n8n-nodes-langchain.textSplitterTokenSplitter
  └─ Token Splitter
▸ @n8n/n8n-nodes-langchain.vectorStoreQdrant
  └─ Qdrant Vector Store
  └─ Qdrant Vector Store1
▸ emailReadImap
  └─ Email Trigger (IMAP)
▸ emailSend
  └─ Send Email
▸ googleDrive
  └─ Get folder
  └─ Download Files
▸ httpRequest
  └─ Create collection
  └─ Refresh collection
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ markdown
  └─ Markdown
▸ noOp
  └─ Do nothing
▸ stickyNote
  └─ Sticky Note3
  └─ Sticky Note5
  └─ Sticky Note

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1277_Emailreadimap_Manual_Send_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Email Trigger (IMAP)
      → Tipo: emailReadImap
      → Credencial requerida: imap
   2. DeepSeek R1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   3. Send Email
      → Tipo: emailSend
      → Credencial requerida: smtp
   4. Qdrant Vector Store
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreQdrant
      → Credencial requerida: qdrantApi
   5. Embeddings OpenAI
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsOpenAi
      → Credencial requerida: openAiApi
   6. Create collection
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   7. Refresh collection
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   8. Get folder
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   9. Download Files
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   10. Qdrant Vector Store1
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreQdrant
      → Credencial requerida: qdrantApi
   11. Embeddings OpenAI1
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsOpenAi
      → Credencial requerida: openAiApi
   12. OpenAI
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   13. DeepSeek
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   14. OpenAI 4-o-mini
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
