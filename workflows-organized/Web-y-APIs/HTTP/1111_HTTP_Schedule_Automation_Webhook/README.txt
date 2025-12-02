╔══════════════════════════════════════════════════════════════════╗
║  Automating Betting Data Retrieval with TheOddsAPI and Airtable  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1111_HTTP_Schedule_Automation_Webhook.json
📂 Categoría: Web-y-APIs/HTTP
🔢 ID: 1111

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

⏰ Ejecución programada (cron/schedule)

📊 Total de nodos: 10
🏷️  Keywords: http, schedule, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (10 total)
═════════════════════════════════════════════════════════════════

▸ airtable
  └─ Create Records Of Upcoming Events For The Day
  └─ Update Table Records With Scores And Results For Sport Events
▸ httpRequest
  └─ Retrieve Data Of Upcoming Sport Events For The Day
  └─ Retrieve Sport Results Data At The End Of The Day
▸ merge
  └─ Combine Sport Results With Upcoming Events Records By Matching ID
▸ scheduleTrigger
  └─ Morning Trigger To Pull Data At 7:00am
  └─ Evening Trigger To Pull Data At 11:00pm
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1111_HTTP_Schedule_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Retrieve Data Of Upcoming Sport Events For The Day
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   2. Create Records Of Upcoming Events For The Day
      → Tipo: airtable
      → Credencial requerida: airtableTokenApi
   3. Retrieve Sport Results Data At The End Of The Day
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   4. Update Table Records With Scores And Results For Sport Events
      → Tipo: airtable
      → Credencial requerida: airtableTokenApi

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
