╔══════════════════════════════════════════════════════════════════╗
║  google drive to instagram, tiktok and youtube                   ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1237_Error_Telegram_Automation_Webhook.json
📂 Categoría: Utilidades/Manejo-Errores
🔢 ID: 1237

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 15
🏷️  Keywords: error, telegram, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (15 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.openAi
  └─ Get Audio from Video
  └─ Generate Description for Videos  in Tiktok and Instagram
▸ errorTrigger
  └─ Error Trigger
▸ googleDrive
  └─ Google Drive
▸ googleDriveTrigger
  └─ Google Drive Trigger
▸ httpRequest
  └─ Upload Video and Description to Tiktok
  └─ Upload Video and Description to Instagram
  └─ Upload Video and Description to Youtube
▸ if
  └─ If
▸ readBinaryFile
  └─ Read Video from Google Drive
  └─ Read Video from Google Drive2
  └─ Read Video from Google Drive3
▸ stickyNote
  └─ Sticky Note
▸ telegram
  └─ Telegram
▸ writeBinaryFile
  └─ Read video from Google Drive

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1237_Error_Telegram_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Google Drive Trigger
      → Tipo: googleDriveTrigger
      → Credencial requerida: googleDriveOAuth2Api
   2. Google Drive
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   3. Get Audio from Video
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   4. Generate Description for Videos  in Tiktok and Instagram
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   5. Upload Video and Description to Tiktok
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   6. Upload Video and Description to Instagram
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   7. Upload Video and Description to Youtube
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
