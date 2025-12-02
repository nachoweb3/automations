╔══════════════════════════════════════════════════════════════════╗
║  AI Agent - Cv Resume - Automated Screening , Sorting , Rating and Tracker System  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1287_Googledocs_Googledrivetool_Monitor_Triggered.json
📂 Categoría: Utilidades/Triggers
🔢 ID: 1287

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 20
🏷️  Keywords: googledocs, googledrivetool, monitor, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (20 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Agent
▸ @n8n/n8n-nodes-langchain.lmChatGroq
  └─ Groq - llama 4 AI MODEL
▸ extractFromFile
  └─ Extract from File
▸ gmailTool
  └─ Gmail:Notification
▸ googleDocs
  └─ GDocs - Get Job Desc
▸ googleDrive
  └─ Download Resume File From Gdrive
▸ googleDriveTool
  └─ Gdrive:Move-To-Reject-Folder
  └─ Gdrive:Move-To-KIV-Folder
  └─ Gdrive:Move-To-Shortlisted-Folder
▸ googleDriveTrigger
  └─ Google Drive - Resume CV File Created
▸ googleSheetsTool
  └─ Gsheet: Update Candidate Tracker
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note6
  └─ Sticky Note7
  └─ Sticky Note8

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1287_Googledocs_Googledrivetool_Monitor_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. GDocs - Get Job Desc
      → Tipo: googleDocs
      → Credencial requerida: googleDocsOAuth2Api
   2. Google Drive - Resume CV File Created
      → Tipo: googleDriveTrigger
      → Credencial requerida: googleDriveOAuth2Api
   3. Download Resume File From Gdrive
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   4. Gmail:Notification
      → Tipo: gmailTool
      → Credencial requerida: gmailOAuth2
   5. Gdrive:Move-To-Reject-Folder
      → Tipo: googleDriveTool
      → Credencial requerida: googleDriveOAuth2Api
   6. Gdrive:Move-To-KIV-Folder
      → Tipo: googleDriveTool
      → Credencial requerida: googleDriveOAuth2Api
   7. Gdrive:Move-To-Shortlisted-Folder
      → Tipo: googleDriveTool
      → Credencial requerida: googleDriveOAuth2Api
   8. Gsheet: Update Candidate Tracker
      → Tipo: googleSheetsTool
      → Credencial requerida: googleSheetsOAuth2Api
   9. Groq - llama 4 AI MODEL
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGroq
      → Credencial requerida: groqApi

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
