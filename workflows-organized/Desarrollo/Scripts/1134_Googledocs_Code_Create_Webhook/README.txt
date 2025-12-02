╔══════════════════════════════════════════════════════════════════╗
║  Generate Exam Questions                                         ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1134_Googledocs_Code_Create_Webhook.json
📂 Categoría: Desarrollo/Scripts
🔢 ID: 1134

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 37
🏷️  Keywords: googledocs, code, create, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (37 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ Answer and create options
▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ Open questions
  └─ Closed questions
▸ @n8n/n8n-nodes-langchain.chainRetrievalQa
  └─ Answer questions
▸ @n8n/n8n-nodes-langchain.documentDefaultDataLoader
  └─ Default Data Loader
▸ @n8n/n8n-nodes-langchain.embeddingsOpenAi
  └─ Embeddings OpenAI
  └─ Embeddings OpenAI2
  └─ Embeddings OpenAI1
▸ @n8n/n8n-nodes-langchain.lmChatGoogleGemini
  └─ Google Gemini Chat Model
  └─ Google Gemini Chat Model1
  └─ Google Gemini Chat Model2
  └─ Google Gemini Chat Model3
  └─ Google Gemini Chat Model4
▸ @n8n/n8n-nodes-langchain.outputParserItemList
  └─ Item List Output Parser
  └─ Item List Output Parser1
▸ @n8n/n8n-nodes-langchain.outputParserStructured
  └─ Structured Output Parser
▸ @n8n/n8n-nodes-langchain.retrieverVectorStore
  └─ Vector Store Retriever
▸ @n8n/n8n-nodes-langchain.textSplitterTokenSplitter
  └─ Token Splitter
▸ @n8n/n8n-nodes-langchain.toolVectorStore
  └─ RAG
▸ @n8n/n8n-nodes-langchain.vectorStoreQdrant
  └─ Qdrant Vector Store
  └─ Qdrant Vector Store1
  └─ Qdrant Vector Store2
▸ code
  └─ Converto di MD
▸ convertToFile
  └─ Convert to File
▸ googleDocs
  └─ Get Doc
▸ googleSheets
  └─ Write open
  └─ Write closed
▸ httpRequest
  └─ Create collection
  └─ Refresh collection
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ splitInBatches
  └─ Loop Over Items
  └─ Loop Over Items1
▸ stickyNote
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1134_Googledocs_Code_Create_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Qdrant Vector Store
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreQdrant
      → Credencial requerida: qdrantApi
   2. Create collection
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   3. Refresh collection
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   4. Embeddings OpenAI
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsOpenAi
      → Credencial requerida: openAiApi
   5. Get Doc
      → Tipo: googleDocs
      → Credencial requerida: googleDocsOAuth2Api
   6. Qdrant Vector Store1
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreQdrant
      → Credencial requerida: qdrantApi
   7. Google Gemini Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → Credencial requerida: googlePalmApi
   8. Google Gemini Chat Model1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → Credencial requerida: googlePalmApi
   9. Google Gemini Chat Model2
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → Credencial requerida: googlePalmApi
   10. Google Gemini Chat Model3
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → Credencial requerida: googlePalmApi
   11. Qdrant Vector Store2
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreQdrant
      → Credencial requerida: qdrantApi
   12. Embeddings OpenAI2
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsOpenAi
      → Credencial requerida: openAiApi
   13. Google Gemini Chat Model4
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → Credencial requerida: googlePalmApi
   14. Write open
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   15. Write closed
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   16. Embeddings OpenAI1
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsOpenAi
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
