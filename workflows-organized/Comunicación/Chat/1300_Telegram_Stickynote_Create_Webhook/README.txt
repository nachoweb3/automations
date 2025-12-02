╔══════════════════════════════════════════════════════════════════╗
║  Agentic Telegram AI bot with LangChain nodes and new tools      ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1300_Telegram_Stickynote_Create_Webhook.json
📂 Categoría: Comunicación/Chat
🔢 ID: 1300

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 8
🏷️  Keywords: telegram, stickynote, create, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Crear bots de respuesta automática
2. Enviar notificaciones a canales/grupos
3. Integrar con otros servicios para notificaciones

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (8 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Agent
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
▸ @n8n/n8n-nodes-langchain.memoryBufferWindow
  └─ Window Buffer Memory
▸ @n8n/n8n-nodes-langchain.toolHttpRequest
  └─ Generate image in Dalle
▸ stickyNote
  └─ Sticky Note
▸ telegram
  └─ Send final reply
▸ telegramTool
  └─ Send back an image
▸ telegramTrigger
  └─ Listen for incoming events

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1300_Telegram_Stickynote_Create_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   2. Listen for incoming events
      → Tipo: telegramTrigger
      → Credencial requerida: telegramApi
   3. Send final reply
      → Tipo: telegram
      → Credencial requerida: telegramApi
   4. Send back an image
      → Tipo: telegramTool
      → Credencial requerida: telegramApi
   5. Generate image in Dalle
      → Tipo: @n8n/n8n-nodes-langchain.toolHttpRequest
      → Credencial requerida: openAiApi

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
