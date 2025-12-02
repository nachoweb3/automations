╔══════════════════════════════════════════════════════════════════╗
║  🤖🧑‍💻 AI Agent  for Top n8n Creators Leaderboard Reporting    ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1113_Telegram_Splitout_Automation_Scheduled.json
📂 Categoría: Comunicación/Chat
🔢 ID: 1113

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

⏰ Ejecución programada (cron/schedule)

📊 Total de nodos: 49
🏷️  Keywords: telegram, splitout, automation, scheduled

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Crear bots de respuesta automática
2. Enviar notificaciones a canales/grupos
3. Integrar con otros servicios para notificaciones

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (49 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ n8n Creators Stats Agent
▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ Create Top 10 Workflows List
▸ @n8n/n8n-nodes-langchain.lmChatGoogleGemini
  └─ Google Gemini Chat Model
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ gpt-4o-mini
▸ @n8n/n8n-nodes-langchain.toolWorkflow
  └─ Workflow Tool
▸ aggregate
  └─ Aggregate
▸ convertToFile
  └─ creator-summary
▸ executeWorkflowTrigger
  └─ When Executed by Another Workflow
▸ gmail
  └─ Gmail Creators & Workflows Report
  └─ Gmail Top 10 Workflows List
▸ googleDrive
  └─ Google Drive
▸ httpRequest
  └─ stats_aggregate_creators
  └─ stats_aggregate_workflows
▸ limit
  └─ Take Top 10 Creators
  └─ Take Top 50 Workflows
▸ markdown
  └─ Convert Markdown to HTML
  └─ Convert Top 10 Markdown to HTML
▸ merge
  └─ Merge Creators & Workflows
▸ readWriteFile
  └─ Save creator-summary.md
▸ scheduleTrigger
  └─ Schedule Trigger
▸ set
  └─ Global Variables
  └─ Parse Workflow Data
  └─ Parse Creators Data
  └─ Workflow Response
  └─ Creators Data
  └─ Workflows Data
▸ sort
  └─ Sort By Top Weekly Creator Inserts
  └─ Sort By Top Weekly Workflow Inserts
▸ splitOut
  └─ Split Out Creators
  └─ Split Out Workflows
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note5
  └─ Sticky Note6
  └─ Sticky Note7
  └─ Sticky Note8
  └─ Sticky Note10
  └─ Sticky Note11
  └─ Sticky Note4
  └─ Sticky Note9
  └─ Sticky Note12
  └─ Sticky Note13
  └─ Sticky Note14
  └─ Sticky Note15
  └─ Sticky Note16
  └─ Sticky Note17
▸ telegram
  └─ Telegram Top 10  Workflows List

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1113_Telegram_Splitout_Automation_Scheduled.json

🔐 PASO 2: Configurar credenciales
   1. gpt-4o-mini
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   2. Google Drive
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   3. Google Gemini Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → Credencial requerida: googlePalmApi
   4. Gmail Creators & Workflows Report
      → Tipo: gmail
      → Credencial requerida: gmailOAuth2
   5. Telegram Top 10  Workflows List
      → Tipo: telegram
      → Credencial requerida: telegramApi
   6. Gmail Top 10 Workflows List
      → Tipo: gmail
      → Credencial requerida: gmailOAuth2

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
