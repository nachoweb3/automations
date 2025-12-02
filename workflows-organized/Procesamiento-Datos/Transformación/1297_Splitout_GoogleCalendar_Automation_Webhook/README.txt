╔══════════════════════════════════════════════════════════════════╗
║  1297_Splitout_GoogleCalendar_Automation_Webhook                 ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1297_Splitout_GoogleCalendar_Automation_Webhook.json
📂 Categoría: Procesamiento-Datos/Transformación
🔢 ID: 1297

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 28
🏷️  Keywords: splitout, googlecalendar, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (28 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Agent
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model1
▸ @n8n/n8n-nodes-langchain.outputParserStructured
  └─ Structured Output Parser
▸ @n8n/n8n-nodes-langchain.toolWorkflow
  └─ Schedule Meeting
▸ executeWorkflowTrigger
  └─ Execute Workflow Trigger
▸ extractFromFile
  └─ PDF Loader
▸ googleCalendar
  └─ Get Calendar Event
  └─ Add Attendee to Invite
  └─ Create Calendar Event1
▸ googleDrive
  └─ Get Transcript File
▸ httpRequest
  └─ Get Meeting ConferenceRecords
  └─ Get Meeting Transcript Location
▸ manualTrigger
  └─ When clicking "Test workflow"
▸ set
  └─ Response
  └─ Edit Fields
  └─ Fallback Response
  └─ Get Attendees
▸ splitOut
  └─ Attendees List
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note6
  └─ Sticky Note5
  └─ Sticky Note1
  └─ Sticky Note7
  └─ Sticky Note8
▸ switch
  └─ Actions Router

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1297_Splitout_GoogleCalendar_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. OpenAI Chat Model1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   2. Get Meeting ConferenceRecords
      → Tipo: httpRequest
      → Credencial requerida: googleOAuth2Api
   3. Get Meeting Transcript Location
      → Tipo: httpRequest
      → Credencial requerida: googleOAuth2Api
   4. Get Transcript File
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   5. Get Calendar Event
      → Tipo: googleCalendar
      → Credencial requerida: googleCalendarOAuth2Api
   6. Add Attendee to Invite
      → Tipo: googleCalendar
      → Credencial requerida: googleCalendarOAuth2Api
   7. Create Calendar Event1
      → Tipo: googleCalendar
      → Credencial requerida: googleCalendarOAuth2Api

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
