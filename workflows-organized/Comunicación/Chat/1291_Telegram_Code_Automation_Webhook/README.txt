╔══════════════════════════════════════════════════════════════════╗
║  ✍️🌄 Your First Wordpress Content Creator - Quick Start         ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1291_Telegram_Code_Automation_Webhook.json
📂 Categoría: Comunicación/Chat
🔢 ID: 1291

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 39
🏷️  Keywords: telegram, code, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Crear bots de respuesta automática
2. Enviar notificaciones a canales/grupos
3. Integrar con otros servicios para notificaciones

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (39 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ Rewrite for Grade 5 Reading Level
  └─ Rewrite for Grade 2 Reading Level
  └─ Rewrite for Grade 9 Reading Level
  └─ Create Structured Blog Post
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ gpt-4o-mini
  └─ gpt-4o-mini1
  └─ gpt-4o-mini2
  └─ gpt-4o-mini3
  └─ DeepSeek
▸ @n8n/n8n-nodes-langchain.outputParserStructured
  └─ Structured Output - JSON
▸ code
  └─ Separate Title & Content
▸ googleDrive
  └─ Google Drive
▸ httpRequest
  └─ pollinations.ai
  └─ Upload Image to Wordpress
  └─ Set Image on Wordpress Post
▸ if
  └─ If1
  └─ If2
  └─ If3
  └─ Tiltle & Content Exist?
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ markdown
  └─ HTML to Markdown
▸ set
  └─ Set Blog Topic
▸ stickyNote
  └─ Sticky Note7
  └─ Sticky Note8
  └─ Sticky Note9
  └─ Sticky Note10
  └─ Sticky Note11
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
▸ telegram
  └─ Send Error Message
  └─ Send Error Message1
  └─ Send Error Message2
  └─ Send Error Message3
  └─ Send Success Message
▸ wordpress
  └─ Create Wordpress Post

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1291_Telegram_Code_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. gpt-4o-mini
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   2. gpt-4o-mini1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   3. gpt-4o-mini2
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   4. gpt-4o-mini3
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   5. DeepSeek
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   6. Google Drive
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   7. Create Wordpress Post
      → Tipo: wordpress
      → Credencial requerida: wordpressApi
   8. Upload Image to Wordpress
      → Tipo: httpRequest
      → Credencial requerida: wordpressApi
   9. Set Image on Wordpress Post
      → Tipo: httpRequest
      → Credencial requerida: wordpressApi
   10. Send Error Message
      → Tipo: telegram
      → Credencial requerida: telegramApi
   11. Send Error Message1
      → Tipo: telegram
      → Credencial requerida: telegramApi
   12. Send Error Message2
      → Tipo: telegram
      → Credencial requerida: telegramApi
   13. Send Error Message3
      → Tipo: telegram
      → Credencial requerida: telegramApi
   14. Send Success Message
      → Tipo: telegram
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
