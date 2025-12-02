╔══════════════════════════════════════════════════════════════════╗
║  Crypto News & Sentiment                                         ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1186_Rssfeedread_Telegram_Create_Triggered.json
📂 Categoría: Comunicación/Chat
🔢 ID: 1186

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 30
🏷️  Keywords: rssfeedread, telegram, create, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Crear bots de respuesta automática
2. Enviar notificaciones a canales/grupos
3. Integrar con otros servicios para notificaciones

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (30 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ Crypto News & Sentiment Agent
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
▸ @n8n/n8n-nodes-langchain.openAi
  └─ Summarize News & Sentiment (GPT-4o)
▸ code
  └─ Filter by Query
  └─ Build Prompt
▸ merge
  └─ Merge All Articles
▸ rssFeedRead
  └─ RSS Cointelegraph
  └─ RSS Bitcoinmagazine
  └─ RSS Coindesk
  └─ RSS Bitcoinist
  └─ RSS Newsbtc
  └─ RSS Cryptopotato
  └─ RSS 99bitcoins
  └─ RSS Cryptobriefing
  └─ RSS Crypto.news
▸ set
  └─ Set Query
  └─ Adds the sessionId
  └─ Prepare Telegram Message
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
▸ telegram
  └─ Sends Response
▸ telegramTrigger
  └─ Send Crypto or Company Name for Analysis

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1186_Rssfeedread_Telegram_Create_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   2. Summarize News & Sentiment (GPT-4o)
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   3. Sends Response
      → Tipo: telegram
      → Credencial requerida: telegramApi
   4. Send Crypto or Company Name for Analysis
      → Tipo: telegramTrigger
      → Credencial requerida: telegramApi

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
