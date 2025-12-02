╔══════════════════════════════════════════════════════════════════╗
║  💥AI Social Video Generator with GPT-4, Kling & Blotato —Auto-Post to Instagram, Facebook,, TikTok, Twitter & Pinterest - vide  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1288_Telegram_Wait_Automation_Webhook.json
📂 Categoría: Comunicación/Chat
🔢 ID: 1288

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 38
🏷️  Keywords: telegram, wait, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Crear bots de respuesta automática
2. Enviar notificaciones a canales/grupos
3. Integrar con otros servicios para notificaciones

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (38 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ Transform Prompt for Kling (GPT-4)
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Model Bridge
▸ @n8n/n8n-nodes-langchain.openAi
  └─ Generate Voice-Over Script
  └─ Convert Script to Audio (TTS)
  └─ Generate Social Caption from Voiceover
  └─ Generate YouTube-Style Title
▸ code
  └─ Extract Prompt & Caption
▸ googleSheets
  └─ Save Video Metadata to Google Sheets
▸ httpRequest
  └─ Generate Video via Kling API
  └─ Get Generated Video URL
  └─ Upload Audio to Cloudinary
  └─ Merge Audio + Video
  └─ Get Video URL with Audio
  └─ Add Captions/Subtitles to Video
  └─ Get Final Video URL (Audio + Captions)
  └─ Upload Video to Blotato
  └─ Post to Instagram
  └─ Post to YouTube
  └─ Post to TikTok
  └─ Post to Facebook Page
  └─ Post to Threads
  └─ Post to Twitter (X)
  └─ Post to LinkedIn
  └─ Post to Bluesky
  └─ Post to Pinterest
▸ set
  └─ Assign Social Media IDs
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note2
▸ telegram
  └─ Send Final Video to Telegram
  └─ Send Caption Link via Telegram
▸ telegramTrigger
  └─ Trigger: Telegram Prompt
▸ wait
  └─ Wait for Video Generation
  └─ Wait for Audio/Video Fusion
  └─ Wait Before Captioning
  └─ Wait for Caption Render

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1288_Telegram_Wait_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Trigger: Telegram Prompt
      → Tipo: telegramTrigger
      → Credencial requerida: telegramApi
   2. OpenAI Model Bridge
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   3. Generate Video via Kling API
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   4. Get Generated Video URL
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   5. Generate Voice-Over Script
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   6. Convert Script to Audio (TTS)
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   7. Upload Audio to Cloudinary
      → Tipo: httpRequest
      → Credencial requerida: httpBasicAuth
   8. Merge Audio + Video
      → Tipo: httpRequest
      → Credencial requerida: httpBasicAuth
      → Credencial requerida: httpHeaderAuth
   9. Get Video URL with Audio
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   10. Add Captions/Subtitles to Video
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   11. Get Final Video URL (Audio + Captions)
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   12. Generate Social Caption from Voiceover
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   13. Generate YouTube-Style Title
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   14. Save Video Metadata to Google Sheets
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   15. Send Final Video to Telegram
      → Tipo: telegram
      → Credencial requerida: telegramApi
   16. Send Caption Link via Telegram
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
