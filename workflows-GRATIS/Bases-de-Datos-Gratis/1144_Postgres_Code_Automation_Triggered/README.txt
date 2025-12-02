╔══════════════════════════════════════════════════════════════════╗
║  SHEETS RAG                                                      ║
╚══════════════════════════════════════════════════════════════════╝

✅ WORKFLOW 100% GRATUITO

📁 Archivo: 1144_Postgres_Code_Automation_Triggered.json
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
   ✅ code
   ✅ set
   ✅ if
   ✅ manual
   ✅ googlesheets
   ✅ googledrive
   ✅ postgres
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

5. 🔧 Lógica de Negocio Personalizada
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

📊 Total de nodos: 23

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Agent With SQL Query Prompt
▸ @n8n/n8n-nodes-langchain.lmChatGoogleGemini
  └─ Google Gemini Chat Model
▸ @n8n/n8n-nodes-langchain.manualChatTrigger
  └─ When chat message received
▸ @n8n/n8n-nodes-langchain.toolWorkflow
  └─ execute_query_tool
  └─ get_postgres_schema
▸ code
  └─ create table query
  └─ create insertion query
  └─ schema to string
▸ executeWorkflowTrigger
  └─ Execute Workflow Trigger
▸ googleDriveTrigger
  └─ Google Drive Trigger
▸ googleSheets
  └─ fetch sheet data
▸ if
  └─ is not in database
▸ postgres
  └─ table exists?
  └─ remove table
  └─ create table
  └─ perform insertion
  └─ sql query executor
  └─ schema finder
▸ set
  └─ change_this
  └─ response output
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
   3. Selecciona: 1144_Postgres_Code_Automation_Triggered.json

🔐 PASO 2: Credenciales (GRATIS)
   1. Google Drive Trigger
      → Tipo: googleDriveTrigger
      → ✅ Usa cuentas/servicios gratuitos
   2. Google Gemini Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → ✅ Usa cuentas/servicios gratuitos
   3. table exists?
      → Tipo: postgres
      → ✅ Usa cuentas/servicios gratuitos
   4. fetch sheet data
      → Tipo: googleSheets
      → ✅ Usa cuentas/servicios gratuitos
   5. remove table
      → Tipo: postgres
      → ✅ Usa cuentas/servicios gratuitos
   6. create table
      → Tipo: postgres
      → ✅ Usa cuentas/servicios gratuitos
   7. perform insertion
      → Tipo: postgres
      → ✅ Usa cuentas/servicios gratuitos
   8. sql query executor
      → Tipo: postgres
      → ✅ Usa cuentas/servicios gratuitos
   9. schema finder
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
