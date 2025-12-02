╔══════════════════════════════════════════════════════════════════╗
║  1276_Schedule_Telegram_Automation_Scheduled                     ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1276_Schedule_Telegram_Automation_Scheduled.json
📂 Categoría: Automatización/Programadas
🔢 ID: 1276

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

⏰ Ejecución programada (cron/schedule)

📊 Total de nodos: 14
🏷️  Keywords: schedule, telegram, automation, scheduled

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (14 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainSummarization
  └─ Create a Prompt for DALL-E
  └─ Create a story
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
  └─ OpenAI Chat Model2
▸ @n8n/n8n-nodes-langchain.openAi
  └─ Generate Audio for the story
  └─ Generate a Picture for the story
▸ @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
  └─ Recursive Character Text Splitter
▸ scheduleTrigger
  └─ Schedule Trigger
▸ set
  └─ Config
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
▸ telegram
  └─ Send Story Text
  └─ Send Audio for the story
  └─ Send Story Picture

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1276_Schedule_Telegram_Automation_Scheduled.json

🔐 PASO 2: Configurar credenciales
   1. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   2. OpenAI Chat Model2
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   3. Generate Audio for the story
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   4. Generate a Picture for the story
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   5. Send Story Text
      → Tipo: telegram
      → Credencial requerida: telegramApi
   6. Send Audio for the story
      → Tipo: telegram
      → Credencial requerida: telegramApi
   7. Send Story Picture
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
