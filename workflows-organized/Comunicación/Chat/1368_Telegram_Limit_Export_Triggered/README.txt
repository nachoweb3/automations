╔══════════════════════════════════════════════════════════════════╗
║  🦜✨Use OpenAI to Transcribe Audio + Summarize with AI + Save to Google Drive  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1368_Telegram_Limit_Export_Triggered.json
📂 Categoría: Comunicación/Chat
🔢 ID: 1368

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 33
🏷️  Keywords: telegram, limit, export, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Crear bots de respuesta automática
2. Enviar notificaciones a canales/grupos
3. Integrar con otros servicios para notificaciones

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (33 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.openAi
  └─ Transcribe with OpenAI
  └─ Email Content Formatter
  └─ Summarize to Structured JSON
  └─ Summarize to JSON
  └─ Convert JSON to Markdown
▸ filter
  └─ Filter by .m4a extension
▸ gmail
  └─ Gmail User for Approval
  └─ Send Gmail Message
▸ googleDrive
  └─ Download audio file
  └─ Search Google Drive
  └─ Save JSON file to Google Drive
  └─ Save Markdown file to Google Drive
  └─ Get JSON File Meta
  └─ Get Markdown File Meta
  └─ Save Raw Transcript to Google Drive
▸ googleDriveTrigger
  └─ On File Created Trigger
▸ limit
  └─ Limit to last file
▸ manualTrigger
  └─ Start Workflow
▸ merge
  └─ Merge All Paths
▸ set
  └─ Set Config
  └─ Get Filename for JSON
  └─ Get Filename for Markdown
  └─ Prepare Response JSON
  └─ Prepare Response Markdown
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note6
  └─ Sticky Note7
▸ telegram
  └─ Send Telegram Message

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1368_Telegram_Limit_Export_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. Gmail User for Approval
      → Tipo: gmail
      → Credencial requerida: gmailOAuth2
   2. Transcribe with OpenAI
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   3. Download audio file
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   4. Search Google Drive
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   5. Send Telegram Message
      → Tipo: telegram
      → Credencial requerida: telegramApi
   6. Send Gmail Message
      → Tipo: gmail
      → Credencial requerida: gmailOAuth2
   7. Email Content Formatter
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   8. Summarize to Structured JSON
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   9. Summarize to JSON
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   10. Convert JSON to Markdown
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   11. Save JSON file to Google Drive
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   12. Save Markdown file to Google Drive
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   13. Get JSON File Meta
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   14. Get Markdown File Meta
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   15. Save Raw Transcript to Google Drive
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   16. On File Created Trigger
      → Tipo: googleDriveTrigger
      → Credencial requerida: googleDriveOAuth2Api

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
