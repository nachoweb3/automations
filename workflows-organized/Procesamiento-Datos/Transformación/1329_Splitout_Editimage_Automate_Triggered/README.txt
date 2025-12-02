╔══════════════════════════════════════════════════════════════════╗
║  1329_Splitout_Editimage_Automate_Triggered                      ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1329_Splitout_Editimage_Automate_Triggered.json
📂 Categoría: Procesamiento-Datos/Transformación
🔢 ID: 1329

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 11
🏷️  Keywords: splitout, editimage, automate, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (11 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ Passport Photo Validator
▸ @n8n/n8n-nodes-langchain.lmChatGoogleGemini
  └─ Google Gemini Chat Model
▸ @n8n/n8n-nodes-langchain.outputParserStructured
  └─ Structured Output Parser
▸ editImage
  └─ Resize For AI
▸ googleDrive
  └─ Download Photos
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ set
  └─ Photo URLs
▸ splitOut
  └─ Photos To List
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1329_Splitout_Editimage_Automate_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. Download Photos
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
