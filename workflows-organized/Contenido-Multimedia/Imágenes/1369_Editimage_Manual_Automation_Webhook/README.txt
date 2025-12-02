╔══════════════════════════════════════════════════════════════════╗
║  1369_Editimage_Manual_Automation_Webhook                        ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1369_Editimage_Manual_Automation_Webhook.json
📂 Categoría: Contenido-Multimedia/Imágenes
🔢 ID: 1369

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 13
🏷️  Keywords: editimage, manual, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Procesar imágenes o videos automáticamente
2. Generar thumbnails o previsualizaciones
3. Optimizar y convertir formatos de medios

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (13 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ Candidate Resume Analyser
▸ @n8n/n8n-nodes-langchain.lmChatGoogleGemini
  └─ Google Gemini Chat Model
▸ @n8n/n8n-nodes-langchain.outputParserStructured
  └─ Structured Output Parser
▸ editImage
  └─ Resize Converted Image
▸ googleDrive
  └─ Download Resume
▸ httpRequest
  └─ PDF-to-Image API
▸ if
  └─ Should Proceed To Stage 2?
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ stickyNote
  └─ Sticky Note
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
   3. Selecciona: 1369_Editimage_Manual_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Download Resume
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   2. Google Gemini Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → Credencial requerida: googlePalmApi

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
