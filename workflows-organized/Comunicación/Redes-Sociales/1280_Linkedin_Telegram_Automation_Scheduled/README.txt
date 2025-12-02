╔══════════════════════════════════════════════════════════════════╗
║  Social Media AI Agent - Telegram                                ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1280_Linkedin_Telegram_Automation_Scheduled.json
📂 Categoría: Comunicación/Redes-Sociales
🔢 ID: 1280

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

⏰ Ejecución programada (cron/schedule)

📊 Total de nodos: 26
🏷️  Keywords: linkedin, telegram, automation, scheduled

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (26 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.openAi
  └─ Generate Content
▸ airtable
  └─ Update X Status
  └─ Update L Status
  └─ Search Item
  └─ Create Item
▸ code
  └─ Extract Meta
  └─ Filter Unposted Items
  └─ Validate Generate Content
▸ filter
  └─ Filter Errored
▸ httpRequest
  └─ Crawl HN Home
  └─ Visit GH Page
▸ linkedIn
  └─ LinkedIn
▸ markdown
  └─ Convert HTML To Markdown
▸ merge
  └─ Merge
▸ noOp
  └─ No Operation, do nothing
▸ scheduleTrigger
  └─ Schedule Trigger
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note6
▸ telegram
  └─ Ping Me
▸ twitter
  └─ X
▸ wait
  └─ Wait for 5 mins before posting

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1280_Linkedin_Telegram_Automation_Scheduled.json

🔐 PASO 2: Configurar credenciales
   1. Update X Status
      → Tipo: airtable
      → Credencial requerida: airtableTokenApi
   2. LinkedIn
      → Tipo: linkedIn
      → Credencial requerida: linkedInOAuth2Api
   3. Update L Status
      → Tipo: airtable
      → Credencial requerida: airtableTokenApi
   4. Search Item
      → Tipo: airtable
      → Credencial requerida: airtableTokenApi
   5. Create Item
      → Tipo: airtable
      → Credencial requerida: airtableTokenApi
   6. X
      → Tipo: twitter
      → Credencial requerida: twitterOAuth2Api
   7. Generate Content
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   8. Ping Me
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
