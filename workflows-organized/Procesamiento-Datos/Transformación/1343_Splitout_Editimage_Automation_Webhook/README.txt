╔══════════════════════════════════════════════════════════════════╗
║  Remove Advanced Background from Google Drive Images             ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1343_Splitout_Editimage_Automation_Webhook.json
📂 Categoría: Procesamiento-Datos/Transformación
🔢 ID: 1343

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 16
🏷️  Keywords: splitout, editimage, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (16 total)
═════════════════════════════════════════════════════════════════

▸ editImage
  └─ Get Image Size
▸ googleDrive
  └─ Upload Picture to Google Drive
  └─ Upload Picture to Google Drive1
  └─ Download Image
▸ googleDriveTrigger
  └─ Watch for new images
▸ httpRequest
  └─ remove background
  └─ remove background fixed size
▸ if
  └─ check which output size method is used
▸ merge
  └─ Merge
▸ set
  └─ Config
▸ splitInBatches
  └─ loop all over your images
▸ splitOut
  └─ Split Out
▸ stickyNote
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1343_Splitout_Editimage_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Upload Picture to Google Drive
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   2. Upload Picture to Google Drive1
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   3. Download Image
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   4. Watch for new images
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
