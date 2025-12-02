╔══════════════════════════════════════════════════════════════════╗
║  1275_Schedule_Telegram_Automation_Scheduled                     ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1275_Schedule_Telegram_Automation_Scheduled.json
📂 Categoría: Automatización/Programadas
🔢 ID: 1275

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

⏰ Ejecución programada (cron/schedule)

📊 Total de nodos: 15
🏷️  Keywords: schedule, telegram, automation, scheduled

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (15 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainSummarization
  └─ Create a Prompt for DALL-E
  └─ Translate the Story to Arabic
  └─ Create a Story for Kids
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
  └─ OpenAI Chat Model1
  └─ OpenAI Chat Model2
▸ @n8n/n8n-nodes-langchain.openAi
  └─ Generate an Image for the Story
  └─ Generate Audio for the Story
▸ @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
  └─ Recursive Character Text Splitter
▸ scheduleTrigger
  └─ Schedule Trigger
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
▸ telegram
  └─ Send the Story To Channel
  └─ Send Image to the Channel
  └─ Send Audio to the Channel

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1275_Schedule_Telegram_Automation_Scheduled.json

🔐 PASO 2: Configurar credenciales
   1. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   2. OpenAI Chat Model1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   3. OpenAI Chat Model2
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   4. Generate an Image for the Story
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   5. Generate Audio for the Story
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   6. Send the Story To Channel
      → Tipo: telegram
      → Credencial requerida: telegramApi
   7. Send Image to the Channel
      → Tipo: telegram
      → Credencial requerida: telegramApi
   8. Send Audio to the Channel
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
