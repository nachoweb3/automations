╔══════════════════════════════════════════════════════════════════╗
║  AI-Generated Summary Block for WordPress Posts - with OpenAI, WordPress, Google Sheets & Slack  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1272_Datetime_Webhook_Create_Webhook.json
📂 Categoría: Productividad/Tiempo
🔢 ID: 1272

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

⏰ Ejecución programada (cron/schedule)
🌐 Activado por webhook (API)
👆 Activación manual

📊 Total de nodos: 32
🏷️  Keywords: datetime, webhook, create, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (32 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
▸ @n8n/n8n-nodes-langchain.openAi
  └─ OpenAI
▸ @n8n/n8n-nodes-langchain.textClassifier
  └─ Text Classifier
▸ dateTime
  └─ Date & Time - Substract
▸ googleSheets
  └─ Google Sheets - Get rows
  └─ Google Sheets - Add Row
▸ httpRequest
  └─ Wordpress - Update Post
▸ if
  └─ If
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ markdown
  └─ HTML to Markdown
▸ noOp
  └─ No Operation, do nothing
▸ scheduleTrigger
  └─ Schedule Trigger
▸ set
  └─ Set fields - From Webhook input
  └─ Set fields - Prepare data for Gsheets & Slack
▸ slack
  └─ Slack - Notify Channel
▸ splitInBatches
  └─ Loop Over Items
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
▸ webhook
  └─ Webhook
▸ wordpress
  └─ WordPress - Get Post2
  └─ WordPress - Get Last Posts
  └─ WordPress - Get Post1
  └─ WordPress - Get All Posts

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1272_Datetime_Webhook_Create_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   2. Webhook
      → Tipo: webhook
      → Credencial requerida: httpHeaderAuth
   3. Wordpress - Update Post
      → Tipo: httpRequest
      → Credencial requerida: wordpressApi
   4. Google Sheets - Get rows
      → Tipo: googleSheets
      → Credencial requerida: googleApi
   5. OpenAI
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   6. Google Sheets - Add Row
      → Tipo: googleSheets
      → Credencial requerida: googleApi
   7. Slack - Notify Channel
      → Tipo: slack
      → Credencial requerida: slackOAuth2Api
   8. WordPress - Get Post2
      → Tipo: wordpress
      → Credencial requerida: wordpressApi
   9. WordPress - Get Last Posts
      → Tipo: wordpress
      → Credencial requerida: wordpressApi
   10. WordPress - Get Post1
      → Tipo: wordpress
      → Credencial requerida: wordpressApi
   11. WordPress - Get All Posts
      → Tipo: wordpress
      → Credencial requerida: wordpressApi

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
