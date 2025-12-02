╔══════════════════════════════════════════════════════════════════╗
║  1246_Extractfromfile_HTTP_Automation_Webhook                    ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1246_Extractfromfile_HTTP_Automation_Webhook.json
📂 Categoría: Web-y-APIs/HTTP
🔢 ID: 1246

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 33
🏷️  Keywords: extractfromfile, http, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (33 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Agent
▸ @n8n/n8n-nodes-langchain.chatTrigger
  └─ When chat message received
▸ @n8n/n8n-nodes-langchain.documentDefaultDataLoader
  └─ Default Data Loader
▸ @n8n/n8n-nodes-langchain.embeddingsOpenAi
  └─ Embeddings OpenAI
  └─ Embeddings OpenAI2
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model1
  └─ OpenAI Chat Model2
▸ @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
  └─ Recursive Character Text Splitter
▸ @n8n/n8n-nodes-langchain.toolVectorStore
  └─ Vector Store Tool1
▸ @n8n/n8n-nodes-langchain.vectorStoreSupabase
  └─ Insert into Supabase Vectorstore
  └─ Supabase Vector Store
▸ aggregate
  └─ Aggregate
▸ extractFromFile
  └─ Extract Document PDF
▸ httpRequest
  └─ Get All files
  └─ Download
▸ if
  └─ If
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ merge
  └─ Merge
▸ splitInBatches
  └─ Loop Over Items
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note9
  └─ Sticky Note7
  └─ Sticky Note6
  └─ Sticky Note8
  └─ Sticky Note10
▸ supabase
  └─ Create File record2
  └─ Get All Files
▸ switch
  └─ Switch

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1246_Extractfromfile_HTTP_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Get All files
      → Tipo: httpRequest
      → Credencial requerida: supabaseApi
   2. Embeddings OpenAI
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsOpenAi
      → Credencial requerida: openAiApi
   3. Create File record2
      → Tipo: supabase
      → Credencial requerida: supabaseApi
   4. Get All Files
      → Tipo: supabase
      → Credencial requerida: supabaseApi
   5. Download
      → Tipo: httpRequest
      → Credencial requerida: supabaseApi
   6. OpenAI Chat Model1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   7. Embeddings OpenAI2
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsOpenAi
      → Credencial requerida: openAiApi
   8. OpenAI Chat Model2
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   9. Insert into Supabase Vectorstore
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreSupabase
      → Credencial requerida: supabaseApi
   10. Supabase Vector Store
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreSupabase
      → Credencial requerida: supabaseApi

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
