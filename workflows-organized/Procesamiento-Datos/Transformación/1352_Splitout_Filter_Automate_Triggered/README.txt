╔══════════════════════════════════════════════════════════════════╗
║  BambooHR AI-Powered Company Policies and Benefits Chatbot       ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1352_Splitout_Filter_Automate_Triggered.json
📂 Categoría: Procesamiento-Datos/Transformación
🔢 ID: 1352

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 50
🏷️  Keywords: splitout, filter, automate, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (50 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ HR AI Agent
▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ Identify most senior employee
▸ @n8n/n8n-nodes-langchain.chatTrigger
  └─ Employee initiates a conversation
▸ @n8n/n8n-nodes-langchain.documentDefaultDataLoader
  └─ Default Data Loader
▸ @n8n/n8n-nodes-langchain.embeddingsOpenAi
  └─ Embeddings OpenAI
  └─ Embeddings OpenAI1
▸ @n8n/n8n-nodes-langchain.informationExtractor
  └─ Extract department
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
  └─ OpenAI Chat Model1
  └─ OpenAI Chat Model2
  └─ OpenAI Chat Model3
  └─ OpenAI Chat Model4
  └─ OpenAI Chat Model5
▸ @n8n/n8n-nodes-langchain.memoryBufferWindow
  └─ Window Buffer Memory
▸ @n8n/n8n-nodes-langchain.outputParserAutofixing
  └─ Auto-fixing Output Parser
▸ @n8n/n8n-nodes-langchain.outputParserStructured
  └─ Structured Output Parser
▸ @n8n/n8n-nodes-langchain.textClassifier
  └─ Text Classifier
▸ @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
  └─ Recursive Character Text Splitter
▸ @n8n/n8n-nodes-langchain.toolVectorStore
  └─ Vector Store Tool
▸ @n8n/n8n-nodes-langchain.toolWorkflow
  └─ Employee Lookup Tool
▸ @n8n/n8n-nodes-langchain.vectorStoreSupabase
  └─ Supabase Vector Store
  └─ Supabase Vector Store Retrieval
▸ aggregate
  └─ Extract departments
  └─ Extract relevant employee fields
▸ bambooHr
  └─ GET all files
  └─ Download file from BambooHR
  └─ GET all employees
  └─ GET all employees (second path)
  └─ Retrieve all employees
▸ executeWorkflowTrigger
  └─ AI-Powered HR Benefits and Company Policies Chatbot
▸ filter
  └─ Filter out files from undesired categories
  └─ Filter out non-pdf files
  └─ Filter out other employees
  └─ Filter out other departments
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ set
  └─ Stringify employee record for response
  └─ Ensure uniqueness in department list
  └─ Format name for response
▸ splitOut
  └─ Split out individual files
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

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1352_Splitout_Filter_Automate_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. Embeddings OpenAI
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsOpenAi
      → Credencial requerida: openAiApi
   2. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   3. OpenAI Chat Model1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   4. Embeddings OpenAI1
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsOpenAi
      → Credencial requerida: openAiApi
   5. OpenAI Chat Model2
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   6. OpenAI Chat Model3
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   7. OpenAI Chat Model4
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   8. OpenAI Chat Model5
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   9. GET all files
      → Tipo: bambooHr
      → Credencial requerida: bambooHrApi
   10. Download file from BambooHR
      → Tipo: bambooHr
      → Credencial requerida: bambooHrApi
   11. Supabase Vector Store
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreSupabase
      → Credencial requerida: supabaseApi
   12. Supabase Vector Store Retrieval
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreSupabase
      → Credencial requerida: supabaseApi
   13. GET all employees
      → Tipo: bambooHr
      → Credencial requerida: bambooHrApi
   14. GET all employees (second path)
      → Tipo: bambooHr
      → Credencial requerida: bambooHrApi
   15. Retrieve all employees
      → Tipo: bambooHr
      → Credencial requerida: bambooHrApi

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
