╔══════════════════════════════════════════════════════════════════╗
║  🤖 Telegram Messaging Agent for Text/Audio/Images               ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1182_Telegram_Webhook_Automation_Webhook.json
📂 Categoría: Comunicación/Chat
🔢 ID: 1182

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

🌐 Activado por webhook (API)

📊 Total de nodos: 39
🏷️  Keywords: telegram, webhook, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Crear bots de respuesta automática
2. Enviar notificaciones a canales/grupos
3. Integrar con otros servicios para notificaciones

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (39 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ gpt-4o-mini
  └─ gpt-4o-mini1
▸ @n8n/n8n-nodes-langchain.openAi
  └─ Analyze Image
  └─ Transcribe Recording
▸ @n8n/n8n-nodes-langchain.textClassifier
  └─ Text Classifier Audio
  └─ Text Classifier
▸ convertToFile
  └─ Convert to Image File
▸ extractFromFile
  └─ Extract from File to Base64
▸ httpRequest
  └─ Set Webhook Test URL
  └─ Get Telegram Webhook Info
  └─ Set Webhook Production URL
▸ if
  └─ Check User & Chat ID
▸ set
  └─ Image Schema
  └─ Edit Fields
  └─ Telegram Token & Webhooks
  └─ Validation
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note2
  └─ Sticky Note5
  └─ Sticky Note3
  └─ Sticky Note1
  └─ Sticky Note6
  └─ Sticky Note4
  └─ Sticky Note7
  └─ Sticky Note8
  └─ Sticky Note9
▸ switch
  └─ Message Router
▸ telegram
  └─ Error message
  └─ Get Audio File
  └─ Get Image
  └─ Test Webhook Status
  └─ Production Webhook Status
  └─ Audio Task Message
  └─ Audio Other Message
  └─ Text Task Message
  └─ Text Other Message
  └─ Image Message
  └─ Get Webhook Status
▸ webhook
  └─ Listen for Telegram Events

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1182_Telegram_Webhook_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Error message
      → Tipo: telegram
      → Credencial requerida: telegramApi
   2. gpt-4o-mini
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   3. Get Audio File
      → Tipo: telegram
      → Credencial requerida: telegramApi
   4. Get Image
      → Tipo: telegram
      → Credencial requerida: telegramApi
   5. Analyze Image
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   6. Transcribe Recording
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   7. gpt-4o-mini1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   8. Test Webhook Status
      → Tipo: telegram
      → Credencial requerida: telegramApi
   9. Production Webhook Status
      → Tipo: telegram
      → Credencial requerida: telegramApi
   10. Audio Task Message
      → Tipo: telegram
      → Credencial requerida: telegramApi
   11. Audio Other Message
      → Tipo: telegram
      → Credencial requerida: telegramApi
   12. Text Task Message
      → Tipo: telegram
      → Credencial requerida: telegramApi
   13. Text Other Message
      → Tipo: telegram
      → Credencial requerida: telegramApi
   14. Image Message
      → Tipo: telegram
      → Credencial requerida: telegramApi
   15. Get Webhook Status
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
