╔══════════════════════════════════════════════════════════════════╗
║  AI Agent - Cv Resume - Automated Screening , Sorting , Rating   ║
╚══════════════════════════════════════════════════════════════════╝

✅ WORKFLOW 100% GRATUITO

📁 Archivo: 1287_Googledocs_Googledrivetool_Monitor_Triggered.json
📂 Categoría: Email-Gratis
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
   ✅ gmail
   ✅ googlesheets
   ✅ googledrive
   ✅ json


═════════════════════════════════════════════════════════════════
 💡 CASOS DE USO PRÁCTICOS
═════════════════════════════════════════════════════════════════

1. 📧 Procesamiento Automático de Emails
   ─────────────────────────────────────────────────────────────
   Clasifica, archiva y responde emails automáticamente

   📝 EJEMPLO REAL:
   "Emails de clientes se clasifican por urgencia y derivan al departamento correcto"

   🔧 CÓMO IMPLEMENTARLO:
   1. Nuevo email en Gmail activa workflow
   2. Analiza asunto y contenido
   3. Clasifica por categoría (ventas/soporte/etc)
   4. Reenvía al equipo correspondiente

2. 🔔 Alertas por Email Inteligentes
   ─────────────────────────────────────────────────────────────
   Recibe notificaciones cuando pasan ciertas condiciones

   📝 EJEMPLO REAL:
   "Te avisa por email cuando hay cambios importantes en tu base de datos"

   🔧 CÓMO IMPLEMENTARLO:
   1. Monitorea base de datos cada hora
   2. Detecta cambios o anomalías
   3. Formatea alerta con detalles
   4. Envía email a tu bandeja

3. 💾 Sincronización de Datos en Google Sheets
   ─────────────────────────────────────────────────────────────
   Mantén tus datos sincronizados entre sistemas

   📝 EJEMPLO REAL:
   "Cuando agregas un contacto en tu CRM, se copia automáticamente a Google Sheets"

   🔧 CÓMO IMPLEMENTARLO:
   1. Webhook/trigger detecta nuevo registro
   2. Extrae información relevante
   3. Crea/actualiza registro en Google Sheets
   4. Confirma sincronización

4. 📊 Dashboard Automático en Google Sheets
   ─────────────────────────────────────────────────────────────
   Actualiza métricas y reportes automáticamente

   📝 EJEMPLO REAL:
   "Cada hora actualiza tu hoja de métricas con datos frescos"

   🔧 CÓMO IMPLEMENTARLO:
   1. Trigger programado cada hora
   2. Consulta APIs/bases de datos
   3. Calcula métricas y KPIs
   4. Actualiza Google Sheets con datos nuevos

5. 🔄 Backup Automático de Datos
   ─────────────────────────────────────────────────────────────
   Respalda información crítica regularmente

   📝 EJEMPLO REAL:
   "Cada noche exporta datos importantes a Google Sheets como backup"

   🔧 CÓMO IMPLEMENTARLO:
   1. Trigger programado (ej: 2am diario)
   2. Extrae datos de sistema principal
   3. Formatea y limpia datos
   4. Guarda en Google Sheets con timestamp

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

📊 Total de nodos: 20

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Agent
▸ @n8n/n8n-nodes-langchain.lmChatGroq
  └─ Groq - llama 4 AI MODEL
▸ extractFromFile
  └─ Extract from File
▸ gmailTool
  └─ Gmail:Notification
▸ googleDocs
  └─ GDocs - Get Job Desc
▸ googleDrive
  └─ Download Resume File From Gdrive
▸ googleDriveTool
  └─ Gdrive:Move-To-Reject-Folder
  └─ Gdrive:Move-To-KIV-Folder
  └─ Gdrive:Move-To-Shortlisted-Folder
▸ googleDriveTrigger
  └─ Google Drive - Resume CV File Created
▸ googleSheetsTool
  └─ Gsheet: Update Candidate Tracker
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

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar
   1. Abre n8n → http://localhost:5678
   2. Menú (☰) → "Import from File"
   3. Selecciona: 1287_Googledocs_Googledrivetool_Monitor_Triggered.json

🔐 PASO 2: Credenciales (GRATIS)
   1. GDocs - Get Job Desc
      → Tipo: googleDocs
      → ✅ Usa cuentas/servicios gratuitos
   2. Google Drive - Resume CV File Created
      → Tipo: googleDriveTrigger
      → ✅ Usa cuentas/servicios gratuitos
   3. Download Resume File From Gdrive
      → Tipo: googleDrive
      → ✅ Usa cuentas/servicios gratuitos
   4. Gmail:Notification
      → Tipo: gmailTool
      → ✅ Usa cuentas/servicios gratuitos
   5. Gdrive:Move-To-Reject-Folder
      → Tipo: googleDriveTool
      → ✅ Usa cuentas/servicios gratuitos
   6. Gdrive:Move-To-KIV-Folder
      → Tipo: googleDriveTool
      → ✅ Usa cuentas/servicios gratuitos
   7. Gdrive:Move-To-Shortlisted-Folder
      → Tipo: googleDriveTool
      → ✅ Usa cuentas/servicios gratuitos
   8. Gsheet: Update Candidate Tracker
      → Tipo: googleSheetsTool
      → ✅ Usa cuentas/servicios gratuitos
   9. Groq - llama 4 AI MODEL
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGroq
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
