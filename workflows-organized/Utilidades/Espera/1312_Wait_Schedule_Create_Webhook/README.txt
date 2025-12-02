╔══════════════════════════════════════════════════════════════════╗
║  Analyze_Crowdstrike_Detections__search_for_IOCs_in_VirusTotal__create_a_ticket_in_Jira_and_post_a_message_in_Slack  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1312_Wait_Schedule_Create_Webhook.json
📂 Categoría: Utilidades/Espera
🔢 ID: 1312

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

⏰ Ejecución programada (cron/schedule)

📊 Total de nodos: 18
🏷️  Keywords: wait, schedule, create, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (18 total)
═════════════════════════════════════════════════════════════════

▸ httpRequest
  └─ Get recent detections from Crowdstrike
  └─ Get detection details
  └─ Look up SHA in Virustotal
  └─ Look up IOC in Virustotal
▸ itemLists
  └─ Split out detections
  └─ Split out behaviours
  └─ Merge behaviour descriptions
▸ jira
  └─ Create Jira issue
▸ scheduleTrigger
  └─ Schedule Trigger
▸ set
  └─ Set behaviour descriptions
▸ slack
  └─ Post notification on Slack
▸ splitInBatches
  └─ Split In Batches
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
▸ wait
  └─ Pause 1 second

═════════════════════════════════════════════════════════════════
 ETIQUETAS
═════════════════════════════════════════════════════════════════

🏷️  🛠️ In progress
🏷️  Secops

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1312_Wait_Schedule_Create_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Get recent detections from Crowdstrike
      → Tipo: httpRequest
      → Credencial requerida: crowdStrikeOAuth2Api
   2. Get detection details
      → Tipo: httpRequest
      → Credencial requerida: crowdStrikeOAuth2Api
   3. Look up SHA in Virustotal
      → Tipo: httpRequest
      → Credencial requerida: virusTotalApi
   4. Look up IOC in Virustotal
      → Tipo: httpRequest
      → Credencial requerida: virusTotalApi
   5. Create Jira issue
      → Tipo: jira
      → Credencial requerida: jiraSoftwareCloudApi
   6. Post notification on Slack
      → Tipo: slack
      → Credencial requerida: slackOAuth2Api

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
