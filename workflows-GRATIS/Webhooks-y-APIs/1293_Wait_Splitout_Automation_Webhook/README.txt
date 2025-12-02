╔══════════════════════════════════════════════════════════════════╗
║  1293_Wait_Splitout_Automation_Webhook                           ║
╚══════════════════════════════════════════════════════════════════╝

✅ WORKFLOW 100% GRATUITO

📁 Archivo: 1293_Wait_Splitout_Automation_Webhook.json
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
   ✅ code
   ✅ set
   ✅ switch
   ✅ if
   ✅ split
   ✅ manual
   ✅ wait
   ✅ googlesheets
   ✅ googledrive
   ✅ json


═════════════════════════════════════════════════════════════════
 💡 CASOS DE USO PRÁCTICOS
═════════════════════════════════════════════════════════════════

1. 💾 Sincronización de Datos en Google Sheets
   ─────────────────────────────────────────────────────────────
   Mantén tus datos sincronizados entre sistemas

   📝 EJEMPLO REAL:
   "Cuando agregas un contacto en tu CRM, se copia automáticamente a Google Sheets"

   🔧 CÓMO IMPLEMENTARLO:
   1. Webhook/trigger detecta nuevo registro
   2. Extrae información relevante
   3. Crea/actualiza registro en Google Sheets
   4. Confirma sincronización

2. 📊 Dashboard Automático en Google Sheets
   ─────────────────────────────────────────────────────────────
   Actualiza métricas y reportes automáticamente

   📝 EJEMPLO REAL:
   "Cada hora actualiza tu hoja de métricas con datos frescos"

   🔧 CÓMO IMPLEMENTARLO:
   1. Trigger programado cada hora
   2. Consulta APIs/bases de datos
   3. Calcula métricas y KPIs
   4. Actualiza Google Sheets con datos nuevos

3. 🔄 Backup Automático de Datos
   ─────────────────────────────────────────────────────────────
   Respalda información crítica regularmente

   📝 EJEMPLO REAL:
   "Cada noche exporta datos importantes a Google Sheets como backup"

   🔧 CÓMO IMPLEMENTARLO:
   1. Trigger programado (ej: 2am diario)
   2. Extrae datos de sistema principal
   3. Formatea y limpia datos
   4. Guarda en Google Sheets con timestamp

4. 🌐 Integración entre Servicios Web
   ─────────────────────────────────────────────────────────────
   Conecta aplicaciones que no se integran nativamente

   📝 EJEMPLO REAL:
   "Cuando hay una venta en Shopify, crea tarea en tu sistema de gestión"

   🔧 CÓMO IMPLEMENTARLO:
   1. Webhook recibe datos de Shopify
   2. Transforma formato de datos
   3. Envía a tu sistema vía API
   4. Registra transacción

5. 📡 Monitoreo de APIs
   ─────────────────────────────────────────────────────────────
   Verifica disponibilidad y rendimiento de servicios

   📝 EJEMPLO REAL:
   "Cada 5 minutos verifica que tu API esté funcionando, alerta si hay problemas"

   🔧 CÓMO IMPLEMENTARLO:
   1. Trigger cada 5 minutos
   2. Hace request a tu API
   3. Verifica status y tiempo de respuesta
   4. Alerta si detecta problema

6. ⚙️ ETL y Procesamiento de Datos
   ─────────────────────────────────────────────────────────────
   Extrae, transforma y carga datos entre sistemas

   📝 EJEMPLO REAL:
   "Convierte datos de ventas en formato compatible y los importa a analytics"

   🔧 CÓMO IMPLEMENTARLO:
   1. Extrae datos de sistema origen
   2. Transforma formato (filtros, cálculos)
   3. Valida y limpia datos
   4. Carga en sistema destino

7. 🔧 Lógica de Negocio Personalizada
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

📊 Total de nodos: 88

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS
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
 CONFIGURACIÓN
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar
   1. Abre n8n → http://localhost:5678
   2. Menú (☰) → "Import from File"
   3. Selecciona: 1293_Wait_Splitout_Automation_Webhook.json

🔐 PASO 2: Credenciales (GRATIS)
   1. Get All Research
      → Tipo: googleSheets
      → ✅ Usa cuentas/servicios gratuitos

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
