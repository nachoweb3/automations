╔══════════════════════════════════════════════════════════════════╗
║  Extract & Summarize Bing Copilot Search Results with Gemini AI and Bright Data  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1314_Manual_Stickynote_Automation_Webhook.json
📂 Categoría: Utilidades/Triggers
🔢 ID: 1314

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 19
🏷️  Keywords: manual, stickynote, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (19 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ Structured Data Extractor
▸ @n8n/n8n-nodes-langchain.chainSummarization
  └─ Concise Summary Creator
▸ @n8n/n8n-nodes-langchain.documentDefaultDataLoader
  └─ Default Data Loader
▸ @n8n/n8n-nodes-langchain.lmChatGoogleGemini
  └─ Google Gemini Chat Model
  └─ Google Gemini Chat Model1
▸ @n8n/n8n-nodes-langchain.outputParserStructured
  └─ Structured Output Parser
▸ @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
  └─ Recursive Character Text Splitter
▸ httpRequest
  └─ Download Snapshot
  └─ Check Snapshot Status
  └─ Structured Data Webhook Notifier
  └─ Summary Webhook Notifier
  └─ Perform a Bing Copilot Request
▸ if
  └─ If
  └─ Check on the errors
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ set
  └─ Set Snapshot Id
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
▸ wait
  └─ Wait for 30 seconds

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
   3. Selecciona: 1314_Manual_Stickynote_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Google Gemini Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → Credencial requerida: googlePalmApi
   2. Download Snapshot
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   3. Google Gemini Chat Model1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → Credencial requerida: googlePalmApi
   4. Check Snapshot Status
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   5. Perform a Bing Copilot Request
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
