╔══════════════════════════════════════════════════════════════════╗
║  AI Voice Chat using Webhook, Memory Manager, OpenAI, Google Gemini & ElevenLabs  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1289_Limit_Webhook_Automation_Webhook.json
📂 Categoría: Web-y-APIs/Webhooks
🔢 ID: 1289

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

🌐 Activado por webhook (API)

📊 Total de nodos: 15
🏷️  Keywords: limit, webhook, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (15 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ Basic LLM Chain
▸ @n8n/n8n-nodes-langchain.lmChatGoogleGemini
  └─ Google Gemini Chat Model
▸ @n8n/n8n-nodes-langchain.memoryBufferWindow
  └─ Window Buffer Memory
▸ @n8n/n8n-nodes-langchain.memoryManager
  └─ Get Chat
  └─ Insert Chat
▸ @n8n/n8n-nodes-langchain.openAi
  └─ OpenAI - Speech to Text
▸ aggregate
  └─ Aggregate
▸ httpRequest
  └─ ElevenLabs - Generate Audio
▸ limit
  └─ Limit
▸ respondToWebhook
  └─ Respond to Webhook
▸ stickyNote
  └─ Sticky Note5
  └─ Sticky Note
  └─ Sticky Note2
  └─ Sticky Note1
▸ webhook
  └─ Webhook

═════════════════════════════════════════════════════════════════
 ETIQUETAS
═════════════════════════════════════════════════════════════════

🏷️  Workflows

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1289_Limit_Webhook_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Google Gemini Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → Credencial requerida: googlePalmApi
   2. ElevenLabs - Generate Audio
      → Tipo: httpRequest
      → Credencial requerida: httpCustomAuth
   3. OpenAI - Speech to Text
      → Tipo: @n8n/n8n-nodes-langchain.openAi
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
