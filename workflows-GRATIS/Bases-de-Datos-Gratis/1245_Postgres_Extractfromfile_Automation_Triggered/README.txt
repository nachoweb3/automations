╔══════════════════════════════════════════════════════════════════╗
║  Translate questions about e-mails into SQL queries and run the  ║
╚══════════════════════════════════════════════════════════════════╝

✅ WORKFLOW 100% GRATUITO

📁 Archivo: 1245_Postgres_Extractfromfile_Automation_Triggered.json
📂 Categoría: Bases-de-Datos-Gratis
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
   ✅ set
   ✅ if
   ✅ merge
   ✅ manual
   ✅ postgres
   ✅ json


═════════════════════════════════════════════════════════════════
 💡 CASOS DE USO PRÁCTICOS
═════════════════════════════════════════════════════════════════

1. 💾 Sincronización de Datos en Base de datos
   ─────────────────────────────────────────────────────────────
   Mantén tus datos sincronizados entre sistemas

   📝 EJEMPLO REAL:
   "Cuando agregas un contacto en tu CRM, se copia automáticamente a Base de datos"

   🔧 CÓMO IMPLEMENTARLO:
   1. Webhook/trigger detecta nuevo registro
   2. Extrae información relevante
   3. Crea/actualiza registro en Base de datos
   4. Confirma sincronización

2. 📊 Dashboard Automático en Base de datos
   ─────────────────────────────────────────────────────────────
   Actualiza métricas y reportes automáticamente

   📝 EJEMPLO REAL:
   "Cada hora actualiza tu hoja de métricas con datos frescos"

   🔧 CÓMO IMPLEMENTARLO:
   1. Trigger programado cada hora
   2. Consulta APIs/bases de datos
   3. Calcula métricas y KPIs
   4. Actualiza Base de datos con datos nuevos

3. 🔄 Backup Automático de Datos
   ─────────────────────────────────────────────────────────────
   Respalda información crítica regularmente

   📝 EJEMPLO REAL:
   "Cada noche exporta datos importantes a Base de datos como backup"

   🔧 CÓMO IMPLEMENTARLO:
   1. Trigger programado (ej: 2am diario)
   2. Extrae datos de sistema principal
   3. Formatea y limpia datos
   4. Guarda en Base de datos con timestamp

4. ⚙️ ETL y Procesamiento de Datos
   ─────────────────────────────────────────────────────────────
   Extrae, transforma y carga datos entre sistemas

   📝 EJEMPLO REAL:
   "Convierte datos de ventas en formato compatible y los importa a analytics"

   🔧 CÓMO IMPLEMENTARLO:
   1. Extrae datos de sistema origen
   2. Transforma formato (filtros, cálculos)
   3. Valida y limpia datos
   4. Carga en sistema destino

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

📊 Total de nodos: 26

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Agent
▸ @n8n/n8n-nodes-langchain.chatTrigger
  └─ Chat Trigger
▸ @n8n/n8n-nodes-langchain.lmChatOllama
  └─ Ollama Chat Model
▸ convertToFile
  └─ Convert data to binary
▸ executeWorkflowTrigger
  └─ WorkflowTrigger
▸ extractFromFile
  └─ Extract data from file
▸ if
  └─ Check if query exists
  └─ Check for trailing semicolon
  └─ If ran manually
  └─ If file exists or already retried generating it
▸ manualTrigger
  └─ When clicking "Test workflow"
▸ merge
  └─ Combine query result and chat answer
▸ postgres
  └─ List all columns in a table
  └─ List all tables in a database
  └─ Postgres
▸ readWriteFile
  └─ Save file locally
  └─ Load the schema from the local file
▸ set
  └─ Add table name to output
  └─ Combine schema data and chat input
  └─ Extract SQL query
  └─ Format query results
  └─ Add trailing semicolon
  └─ Format empty output
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar
   1. Abre n8n → http://localhost:5678
   2. Menú (☰) → "Import from File"
   3. Selecciona: 1245_Postgres_Extractfromfile_Automation_Triggered.json

🔐 PASO 2: Credenciales (GRATIS)
   1. List all columns in a table
      → Tipo: postgres
      → ✅ Usa cuentas/servicios gratuitos
   2. List all tables in a database
      → Tipo: postgres
      → ✅ Usa cuentas/servicios gratuitos
   3. Ollama Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOllama
      → ✅ Usa cuentas/servicios gratuitos
   4. Postgres
      → Tipo: postgres
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
