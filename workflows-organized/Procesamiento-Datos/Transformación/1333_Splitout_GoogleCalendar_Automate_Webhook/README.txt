╔══════════════════════════════════════════════════════════════════╗
║  1333_Splitout_GoogleCalendar_Automate_Webhook                   ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1333_Splitout_GoogleCalendar_Automate_Webhook.json
📂 Categoría: Procesamiento-Datos/Transformación
🔢 ID: 1333

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

⏰ Ejecución programada (cron/schedule)

📊 Total de nodos: 61
🏷️  Keywords: splitout, googlecalendar, automate, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (61 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ Correspondance Recap Agent
  └─ Attendee Research Agent
  └─ LinkedIn Summarizer Agent
▸ @n8n/n8n-nodes-langchain.informationExtractor
  └─ Extract Attendee Information
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model2
  └─ OpenAI Chat Model
  └─ OpenAI Chat Model1
  └─ OpenAI Chat Model3
▸ aggregate
  └─ Aggregate Attendees
  └─ Activities To Array
▸ executeWorkflow
  └─ Get Correspondance
  └─ Get LinkedIn Profile & Activity
▸ executeWorkflowTrigger
  └─ Execute Workflow Trigger
▸ gmail
  └─ Get Message Contents
  └─ Get Last Correspondence
▸ googleCalendar
  └─ Check For Upcoming Meetings
▸ html
  └─ Extract Profile Metadata
  └─ Get Activity Details
  └─ Get Sections
  └─ Extract Activities
  └─ Extract About
▸ httpRequest
  └─ APIFY Web Scraper
▸ if
  └─ Has Emails?
  └─ Has Email Address?
  └─ Has LinkedIn URL?
  └─ Is Scrape Successful?
▸ merge
  └─ Merge
  └─ Merge1
▸ scheduleTrigger
  └─ Schedule Trigger
▸ set
  └─ Simplify Emails
  └─ Return LinkedIn Success
  └─ Return LinkedIn Error
  └─ Return Email Error
  └─ Return Email Success
  └─ Set Route Email
  └─ Set Route Linkedin
  └─ Return LinkedIn Error1
  └─ Return Email Error1
  └─ Set LinkedIn Cookie
  └─ Merge Attendee with Summaries
  └─ Get About Section
  └─ Get Activity Section
▸ splitOut
  └─ Sections To List
  └─ Attendees to List
  └─ Activities To List
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note6
  └─ Sticky Note7
  └─ Sticky Note9
  └─ Sticky Note8
  └─ Sticky Note10
  └─ Sticky Note11
  └─ Sticky Note12
  └─ Sticky Note13
▸ switch
  └─ Router
▸ whatsApp
  └─ WhatsApp Business Cloud

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1333_Splitout_GoogleCalendar_Automate_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Get Message Contents
      → Tipo: gmail
      → Credencial requerida: gmailOAuth2
   2. Check For Upcoming Meetings
      → Tipo: googleCalendar
      → Credencial requerida: googleCalendarOAuth2Api
   3. OpenAI Chat Model2
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   4. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   5. Get Last Correspondence
      → Tipo: gmail
      → Credencial requerida: gmailOAuth2
   6. OpenAI Chat Model1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   7. OpenAI Chat Model3
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   8. WhatsApp Business Cloud
      → Tipo: whatsApp
      → Credencial requerida: whatsAppApi
   9. APIFY Web Scraper
      → Tipo: httpRequest
      → Credencial requerida: httpQueryAuth

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
