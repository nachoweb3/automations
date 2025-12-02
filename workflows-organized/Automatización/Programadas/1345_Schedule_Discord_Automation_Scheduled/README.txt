╔══════════════════════════════════════════════════════════════════╗
║  YouTube to X Post- AlexK1919                                    ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1345_Schedule_Discord_Automation_Scheduled.json
📂 Categoría: Automatización/Programadas
🔢 ID: 1345

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

⏰ Ejecución programada (cron/schedule)
👆 Activación manual

📊 Total de nodos: 28
🏷️  Keywords: schedule, discord, automation, scheduled

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (28 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.openAi
  └─ Generate X Post
  └─ Rewrite X Post to 220 Characters
▸ @n8n/n8n-nodes-langchain.toolCalculator
  └─ Calculator
  └─ Calculator2
▸ @n8n/n8n-nodes-langchain.toolWikipedia
  └─ Wikipedia
  └─ Wikipedia1
▸ discord
  └─ Discord
▸ gmail
  └─ Gmail
▸ googleSheets
  └─ GS - Add Tweet
  └─ GS - Update Tweet
▸ if
  └─ Verify character limit constraints
  └─ If Array is empty?
▸ manualTrigger
  └─ When clicking "Test workflow"
▸ removeDuplicates
  └─ Remove Duplicates
▸ scheduleTrigger
  └─ Check Every 2 Hours
▸ set
  └─ Set Fields
  └─ Set Final Fields
▸ slack
  └─ Slack
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note4
  └─ Sticky Note1
  └─ Sticky Note3
  └─ Sticky Note6
  └─ Sticky Note7
  └─ Sticky Note8
  └─ Sticky Note9
▸ twitter
  └─ Post to X
▸ youTube
  └─ Fetch Latest Videos

═════════════════════════════════════════════════════════════════
 ETIQUETAS
═════════════════════════════════════════════════════════════════

🏷️  OpenAI
🏷️  YouTube
🏷️  X

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1345_Schedule_Discord_Automation_Scheduled.json

🔐 PASO 2: Configurar credenciales
   1. Post to X
      → Tipo: twitter
      → Credencial requerida: twitterOAuth2Api
   2. Fetch Latest Videos
      → Tipo: youTube
      → Credencial requerida: youTubeOAuth2Api
   3. GS - Add Tweet
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   4. GS - Update Tweet
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   5. Generate X Post
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   6. Rewrite X Post to 220 Characters
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   7. Gmail
      → Tipo: gmail
      → Credencial requerida: gmailOAuth2

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
