╔══════════════════════════════════════════════════════════════════╗
║  💥workflow n8n d'Auto-Post sur les réseaux sociaux - vide       ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1367_HTTP_Schedule_Automate_Webhook.json
📂 Categoría: Web-y-APIs/HTTP
🔢 ID: 1367

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

⏰ Ejecución programada (cron/schedule)

📊 Total de nodos: 15
🏷️  Keywords: http, schedule, automate, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (15 total)
═════════════════════════════════════════════════════════════════

▸ googleSheets
  └─ Get my video
  └─ Google Sheets
▸ httpRequest
  └─ Upload Video to Blotato
  └─ INSTAGRAM
  └─ YOUTUBE
  └─ TIKTOK
  └─ FACEBOOK
  └─ THREADS
  └─ TWETTER
  └─ LINKEDIN
  └─ BLUESKY
  └─ PINTEREST
▸ scheduleTrigger
  └─ Schedule Trigger
▸ set
  └─ Assign Social Media IDs
▸ stickyNote
  └─ Sticky Note3

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1367_HTTP_Schedule_Automate_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Get my video
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   2. Google Sheets
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api

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
