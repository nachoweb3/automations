╔══════════════════════════════════════════════════════════════════╗
║  1293_Wait_Splitout_Automation_Webhook                           ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1293_Wait_Splitout_Automation_Webhook.json
📂 Categoría: Utilidades/Espera
🔢 ID: 1293

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 88
🏷️  Keywords: wait, splitout, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (88 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.documentDefaultDataLoader
  └─ Default Data Loader
▸ @n8n/n8n-nodes-langchain.embeddingsGoogleGemini
  └─ Embeddings Google Gemini
  └─ Embeddings Google Gemini1
  └─ Embeddings Google Gemini2
▸ @n8n/n8n-nodes-langchain.informationExtractor
  └─ Extract API Operations
  └─ Identify Service Products
▸ @n8n/n8n-nodes-langchain.lmChatGoogleGemini
  └─ Google Gemini Chat Model
  └─ Google Gemini Chat Model1
  └─ Google Gemini Chat Model2
▸ @n8n/n8n-nodes-langchain.textClassifier
  └─ Has API Documentation?
▸ @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
  └─ Recursive Character Text Splitter1
▸ @n8n/n8n-nodes-langchain.vectorStoreQdrant
  └─ Store Document Embeddings
  └─ Search in Relevant Docs
  └─ Search in Relevant Docs1
▸ aggregate
  └─ Combine Docs
  └─ Combine Docs1
▸ code
  └─ Merge Lists
  └─ Contruct JSON Schema
▸ executeWorkflow
  └─ Research
  └─ Extract
  └─ Generate
▸ executeWorkflowTrigger
  └─ Execute Workflow Trigger
▸ executionData
  └─ Execution Data
▸ filter
  └─ Successful Runs
  └─ Filter Results
▸ googleDrive
  └─ Upload to Drive
▸ googleSheets
  └─ Append Row
  └─ Research Pending
  └─ Research Result
  └─ Research Error
  └─ Extract Pending
  └─ Extract Result
  └─ Extract Error
  └─ Get API Operations
  └─ Generate Pending
  └─ Generate Error
  └─ Generate Result
  └─ Get All Extract
  └─ Get All Research
  └─ Get All Generate
▸ httpRequest
  └─ Web Search For API Schema
  └─ Scrape Webpage Contents
▸ if
  └─ Has Results?
  └─ Has Operations?
  └─ All Research Done?
  └─ All Extract Done?
  └─ All Generate Done?
  └─ Has Results?1
  └─ Has Results?3
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ removeDuplicates
  └─ Remove Dupes
  └─ Remove Duplicates
▸ set
  └─ Content Chunking @ 50k Chars
  └─ Set Embedding Variables
  └─ Response Empty
  └─ Response OK
  └─ Query Templates
  └─ Query & Docs
  └─ Extract API Templates
  └─ Query & Docs1
  └─ Response OK1
  └─ Response Empty1
  └─ Research Event
  └─ Extract Event
  └─ Set Upload Fields
  └─ Response OK2
  └─ Generate Event
  └─ Response Scrape Error
  └─ Response No API Docs
▸ splitInBatches
  └─ For Each Document...
  └─ For Each Template...
  └─ For Each Template...1
  └─ For Each Research...
  └─ For Each Extract...
  └─ For Each Generate...
▸ splitOut
  └─ Results to List
  └─ Split Out Chunks
  └─ Template to List
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
▸ switch
  └─ EventRouter
▸ wait
  └─ Wait
  └─ Wait1
  └─ Wait2

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1293_Wait_Splitout_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Get All Research
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api

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
