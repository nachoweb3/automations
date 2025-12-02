╔══════════════════════════════════════════════════════════════════╗
║  Hugging Face to Notion                                          ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1306_Splitout_Schedule_Automation_Webhook.json
📂 Categoría: Procesamiento-Datos/Transformación
🔢 ID: 1306

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

⏰ Ejecución programada (cron/schedule)

📊 Total de nodos: 11
🏷️  Keywords: splitout, schedule, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (11 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.openAi
  └─ OpenAI Analysis Abstract
▸ html
  └─ Extract Hugging Face Paper
  └─ Extract Hugging Face Paper Abstract
▸ httpRequest
  └─ Request Hugging Face Paper
  └─ Request Hugging Face Paper Detail
▸ if
  └─ If
▸ notion
  └─ Check Paper URL Existed
  └─ Store Abstract Notion
▸ scheduleTrigger
  └─ Schedule Trigger
▸ splitInBatches
  └─ Loop Over Items
▸ splitOut
  └─ Split Out

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1306_Splitout_Schedule_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Check Paper URL Existed
      → Tipo: notion
      → Credencial requerida: notionApi
   2. OpenAI Analysis Abstract
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   3. Store Abstract Notion
      → Tipo: notion
      → Credencial requerida: notionApi

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
