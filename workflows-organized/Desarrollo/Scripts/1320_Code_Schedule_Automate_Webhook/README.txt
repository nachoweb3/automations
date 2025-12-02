╔══════════════════════════════════════════════════════════════════╗
║  Blog Automation TEMPLATE                                        ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1320_Code_Schedule_Automate_Webhook.json
📂 Categoría: Desarrollo/Scripts
🔢 ID: 1320

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

⏰ Ejecución programada (cron/schedule)
👆 Activación manual

📊 Total de nodos: 35
🏷️  Keywords: code, schedule, automate, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (35 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ Basic LLM Chain
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ AgentLLM
▸ code
  └─ Config
  └─ PreparedData
  └─ RecombinedDataRow
  └─ PrepareXmlPost
  └─ HandleXMLRPCResponse
▸ googleSheets
  └─ Schedule
  └─ fetchConfig
  └─ SaveBackToSheet
  └─ SetToPublish
  └─ LogStatus
  └─ LogPublished
▸ httpRequest
  └─ CreatePost
▸ if
  └─ IfScheduledNow
  └─ IfActionPublish
  └─ IfTakeAction
  └─ IfPromptExists
  └─ PostingSuccessful
▸ manualTrigger
  └─ ManualTrigger
▸ scheduleTrigger
  └─ ScheduleTrigger
▸ set
  └─ Settings
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
  └─ Sticky Note11
  └─ Sticky Note12

═════════════════════════════════════════════════════════════════
 ETIQUETAS
═════════════════════════════════════════════════════════════════

🏷️  Published Template

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1320_Code_Schedule_Automate_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Schedule
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   2. fetchConfig
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   3. AgentLLM
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   4. SaveBackToSheet
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   5. SetToPublish
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   6. LogStatus
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   7. LogPublished
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
