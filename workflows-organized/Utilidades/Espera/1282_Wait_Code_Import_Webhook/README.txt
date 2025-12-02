╔══════════════════════════════════════════════════════════════════╗
║  AI-Powered Short-Form Video Generator with OpenAI, Flux, Kling, and ElevenLabs and upload to all social networks  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1282_Wait_Code_Import_Webhook.json
📂 Categoría: Utilidades/Espera
🔢 ID: 1282

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

⏰ Ejecución programada (cron/schedule)

📊 Total de nodos: 51
🏷️  Keywords: wait, code, import, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (51 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.openAi
  └─ Generate Image Prompts
  └─ Generate Video Captions
  └─ Generate Script
  └─ Get Audio from Video
  └─ Generate Description for Videos  in Tiktok and Instagram
▸ code
  └─ List Elements
  └─ List Elements1
  └─ Calculate Token Usage
  └─ Create List
▸ discord
  └─ Notify me on Discord
▸ googleDrive
  └─ Upload Voice Audio
  └─ Set Access Permissions
  └─ Upload Final Video
  └─ Set Permissions
▸ googleSheets
  └─ Load Google Sheet
  └─ Update Google Sheet
▸ httpRequest
  └─ Get image
  └─ Generate Image
  └─ Image-to-Video
  └─ Get Video
  └─ Generate voice
  └─ Render Final Video
  └─ Get Final Video
  └─ Get Raw File
  └─ Upload Video and Description to Tiktok
  └─ Upload Video and Description to Instagram
  └─ Upload Video and Description to Youtube
  └─ Upload Video and Description to Facebook
  └─ Upload Video and Description to Linkedin
▸ if
  └─ Fail check
  └─ Check for failures
  └─ Validate list formatting
▸ merge
  └─ Match captions with videos
  └─ Pair Videos with Audio
▸ readBinaryFile
  └─ Read Video from Google Drive
▸ scheduleTrigger
  └─ Once Per Day
▸ set
  └─ Set API Keys
▸ stickyNote
  └─ Sticky Note1
  └─ Sticky Note
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note6
  └─ Sticky Note7
▸ wait
  └─ Wait 10min
  └─ Wait 3min
  └─ Wait 5min
  └─ Wait to retry
  └─ Wait1
▸ writeBinaryFile
  └─ Write video

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1282_Wait_Code_Import_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Upload Final Video
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   2. Set Permissions
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   3. Update Google Sheet
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   4. Get Audio from Video
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   5. Generate Description for Videos  in Tiktok and Instagram
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   6. Upload Video and Description to Tiktok
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   7. Upload Video and Description to Instagram
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   8. Upload Video and Description to Youtube
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   9. Upload Video and Description to Facebook
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   10. Upload Video and Description to Linkedin
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth

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
