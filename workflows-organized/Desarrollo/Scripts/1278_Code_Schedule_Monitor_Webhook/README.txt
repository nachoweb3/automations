╔══════════════════════════════════════════════════════════════════╗
║  AI-Powered Information Monitoring with OpenAI, Google Sheets, Jina AI and Slack  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1278_Code_Schedule_Monitor_Webhook.json
📂 Categoría: Desarrollo/Scripts
🔢 ID: 1278

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

⏰ Ejecución programada (cron/schedule)

📊 Total de nodos: 31
🏷️  Keywords: code, schedule, monitor, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (31 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ Basic LLM Chain
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
  └─ OpenAI Chat Model1
▸ @n8n/n8n-nodes-langchain.textClassifier
  └─ Relevance Classification for Topic Monitoring
▸ code
  └─ Code
▸ googleSheets
  └─ Google Sheets - Get RSS Feed url followed
  └─ Google Sheets - Get article monitored database
  └─ Google Sheets - Add relevant articles
  └─ Google Sheets - Add relevant article
▸ httpRequest
  └─ Jina AI - Read URL
▸ if
  └─ If
▸ noOp
  └─ No Operation, do nothing
▸ rssFeedRead
  └─ RSS Read
▸ scheduleTrigger
  └─ Schedule Trigger
▸ set
  └─ Set field - existing_url
  └─ Set fields - Not relevant articles
  └─ Set Fields - Relevant Articles
▸ slack
  └─ Slack1
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note6
  └─ Sticky Note5
  └─ Sticky Note8
  └─ Sticky Note9
  └─ Sticky Note10
  └─ Sticky Note2
  └─ Sticky Note11
  └─ Sticky Note12
  └─ Sticky Note1
  └─ Sticky Note7

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1278_Code_Schedule_Monitor_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   2. Google Sheets - Get RSS Feed url followed
      → Tipo: googleSheets
      → Credencial requerida: googleApi
   3. Slack1
      → Tipo: slack
      → Credencial requerida: slackOAuth2Api
   4. Google Sheets - Get article monitored database
      → Tipo: googleSheets
      → Credencial requerida: googleApi
   5. OpenAI Chat Model1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   6. Google Sheets - Add relevant articles
      → Tipo: googleSheets
      → Credencial requerida: googleApi
   7. Google Sheets - Add relevant article
      → Tipo: googleSheets
      → Credencial requerida: googleApi

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
