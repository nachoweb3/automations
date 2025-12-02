╔══════════════════════════════════════════════════════════════════╗
║  Bitrix24 Open Chanel RAG Chatbot Application Workflow example   ║
╚══════════════════════════════════════════════════════════════════╝

✅ WORKFLOW 100% GRATUITO

📁 Archivo: 1355_Splitout_Webhook_Automate_Webhook.json
📂 Categoría: Webhooks-y-APIs
💰 Costo: GRATIS - Sin servicios de pago requeridos

═════════════════════════════════════════════════════════════════
 ¿POR QUÉ ES GRATIS?
═════════════════════════════════════════════════════════════════

Este workflow NO requiere:
   ❌ APIs de pago (OpenAI, Anthropic, etc.)
   ❌ Servicios premium (Salesforce, HubSpot, etc.)
   ❌ Suscripciones mensuales
   ❌ Límites restrictivos en planes gratuitos

Usa únicamente:
   ✅ webhook
   ✅ http
   ✅ httprequest
   ✅ function
   ✅ set
   ✅ switch
   ✅ if
   ✅ merge
   ✅ split
   ✅ json


═════════════════════════════════════════════════════════════════
 💡 CASOS DE USO PRÁCTICOS
═════════════════════════════════════════════════════════════════

1. 🌐 Integración entre Servicios Web
   ─────────────────────────────────────────────────────────────
   Conecta aplicaciones que no se integran nativamente

   📝 EJEMPLO REAL:
   "Cuando hay una venta en Shopify, crea tarea en tu sistema de gestión"

   🔧 CÓMO IMPLEMENTARLO:
   1. Webhook recibe datos de Shopify
   2. Transforma formato de datos
   3. Envía a tu sistema vía API
   4. Registra transacción

2. 📡 Monitoreo de APIs
   ─────────────────────────────────────────────────────────────
   Verifica disponibilidad y rendimiento de servicios

   📝 EJEMPLO REAL:
   "Cada 5 minutos verifica que tu API esté funcionando, alerta si hay problemas"

   🔧 CÓMO IMPLEMENTARLO:
   1. Trigger cada 5 minutos
   2. Hace request a tu API
   3. Verifica status y tiempo de respuesta
   4. Alerta si detecta problema

3. ⚙️ ETL y Procesamiento de Datos
   ─────────────────────────────────────────────────────────────
   Extrae, transforma y carga datos entre sistemas

   📝 EJEMPLO REAL:
   "Convierte datos de ventas en formato compatible y los importa a analytics"

   🔧 CÓMO IMPLEMENTARLO:
   1. Extrae datos de sistema origen
   2. Transforma formato (filtros, cálculos)
   3. Valida y limpia datos
   4. Carga en sistema destino

4. 🔧 Lógica de Negocio Personalizada
   ─────────────────────────────────────────────────────────────
   Ejecuta cálculos y lógica compleja automáticamente

   📝 EJEMPLO REAL:
   "Calcula comisiones de vendedores basado en reglas complejas"

   🔧 CÓMO IMPLEMENTARLO:
   1. Recibe datos de ventas
   2. Ejecuta código JavaScript personalizado
   3. Aplica reglas de negocio
   4. Guarda resultados en base de datos

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

📊 Total de nodos: 34

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainRetrievalQa
  └─ Question and Answer Chain
▸ @n8n/n8n-nodes-langchain.documentDefaultDataLoader
  └─ Default Data Loader
▸ @n8n/n8n-nodes-langchain.embeddingsOllama
  └─ Embeddings Ollama
  └─ Embeddings Ollama1
▸ @n8n/n8n-nodes-langchain.lmChatGoogleGemini
  └─ Google Gemini Chat Model
▸ @n8n/n8n-nodes-langchain.retrieverVectorStore
  └─ Vector Store Retriever
▸ @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
  └─ Recursive Character Text Splitter
▸ @n8n/n8n-nodes-langchain.vectorStoreQdrant
  └─ Qdrant Vector Store
  └─ Qdrant Vector Store1
▸ executeWorkflow
  └─ Execute subworkflow
▸ executeWorkflowTrigger
  └─ Execute Workflow Trigger
▸ filter
  └─ Filter for files
▸ function
  └─ Process Message
  └─ Process Join
  └─ Process Install
▸ httpRequest
  └─ Register Bot
  └─ Send Message
  └─ Send Join Message
  └─ Get a list of available storages
  └─ Get a list of List of Files and Folders
  └─ Get a list of Folders files
  └─ Download file
  └─ Move files to Vector stored folder
▸ if
  └─ Validate Token
▸ merge
  └─ Merge parameters for Subworkflow
▸ noOp
  └─ Process Delete
▸ respondToWebhook
  └─ Success Response
  └─ Error Response
▸ set
  └─ Credentials
  └─ Prepare output parameters
▸ splitOut
  └─ Split Out folder files and folders
▸ stickyNote
  └─ Sticky Note
▸ switch
  └─ Route Event
▸ webhook
  └─ Bitrix24 Handler

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar
   1. Abre n8n → http://localhost:5678
   2. Menú (☰) → "Import from File"
   3. Selecciona: 1355_Splitout_Webhook_Automate_Webhook.json

🔐 PASO 2: Credenciales
   ✅ No requiere credenciales externas

⚙️  PASO 3: Configurar parámetros
   • Ajusta según tu caso de uso
   • Todos los servicios son gratuitos

▶️  PASO 4: Activar
   • Guarda (Ctrl+S)
   • Activa el workflow
   • ¡Pruébalo!

═════════════════════════════════════════════════════════════════

💡 VENTAJAS DE WORKFLOWS GRATUITOS:
   • Sin costos mensuales
   • Sin límites estrictos de uso
   • Fácil de escalar
   • Ideal para aprender y experimentar

📅 Organizado: 2025-10-20
🔗 Fuente: https://github.com/oxbshw/ultimate-n8n-ai-workflows
