╔══════════════════════════════════════════════════════════════════╗
║  Google Trend Data Extract, Summarization with Bright Data & Google Gemini  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1235_Manual_HTTP_Automation_Webhook.json
📂 Categoría: Utilidades/Triggers
🔢 ID: 1235

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 16
🏷️  Keywords: manual, http, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (16 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ Markdown to Textual Data Extractor
▸ @n8n/n8n-nodes-langchain.chainSummarization
  └─ Summarize Google Trends
▸ @n8n/n8n-nodes-langchain.informationExtractor
  └─ Structured Data Extractor
▸ @n8n/n8n-nodes-langchain.lmChatGoogleGemini
  └─ Google Gemini Chat Model for Data Extract
  └─ Google Gemini Chat Model for Summarization
  └─ Google Gemini Chat Model for Structured Data Extract
▸ function
  └─ Create a binary data
▸ gmail
  └─ Send Summary to Gmail
▸ httpRequest
  └─ Initiate a Webhook Notification for Markdown to Textual Data Extraction
  └─ Perform Bright Data Web Request
  └─ Initiate a Webhook Notification for Summarization
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ readWriteFile
  └─ Write the file to disk
▸ set
  └─ Set URL and Bright Data Zone
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1

═════════════════════════════════════════════════════════════════
 ETIQUETAS
═════════════════════════════════════════════════════════════════

🏷️  Engineering
🏷️  AI

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1235_Manual_HTTP_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Google Gemini Chat Model for Data Extract
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → Credencial requerida: googlePalmApi
   2. Perform Bright Data Web Request
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   3. Google Gemini Chat Model for Summarization
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → Credencial requerida: googlePalmApi
   4. Google Gemini Chat Model for Structured Data Extract
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → Credencial requerida: googlePalmApi
   5. Send Summary to Gmail
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
