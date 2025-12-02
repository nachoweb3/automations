╔══════════════════════════════════════════════════════════════════╗
║  🎥 Analyze YouTube Video for Summaries, Transcripts & Content + Google Gemini AI  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1313_Code_HTTP_Automation_Webhook.json
📂 Categoría: Desarrollo/Scripts
🔢 ID: 1313

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 33
🏷️  Keywords: code, http, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (33 total)
═════════════════════════════════════════════════════════════════

▸ code
  └─ Get Prompt by Prompt Type
  └─ Create YouTube API URL
▸ form
  └─ Provide YouTube Information to User as HTML
▸ formTrigger
  └─ Start Workflow
▸ gmail
  └─ Send to Gmail as HTML
▸ googleDrive
  └─ Save to Google Drive as Text File
▸ httpRequest
  └─ Get Video Audience MetaData
  └─ Get YouTube Information by Prompt Type
  └─ Get YouTube Video Details
▸ markdown
  └─ Convert Markdown to HTML
▸ merge
  └─ Merge
▸ set
  └─ Config
  └─ Compose Prompts
  └─ Extract MetaData Object
  └─ Define Audience Meta Prompt
▸ stickyNote
  └─ Sticky Note2
  └─ Sticky Note
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note7
  └─ Sticky Note8
  └─ Sticky Note9
  └─ Sticky Note10
  └─ Sticky Note1
  └─ Sticky Note3
  └─ Sticky Note6
  └─ Sticky Note11
  └─ Sticky Note12
  └─ Sticky Note13
  └─ Sticky Note14
  └─ Sticky Note15
  └─ Sticky Note16
  └─ Sticky Note17

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1313_Code_HTTP_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Save to Google Drive as Text File
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   2. Send to Gmail as HTML
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
