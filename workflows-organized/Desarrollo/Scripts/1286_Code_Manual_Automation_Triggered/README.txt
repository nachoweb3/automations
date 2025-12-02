╔══════════════════════════════════════════════════════════════════╗
║  Podcast Digest                                                  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1286_Code_Manual_Automation_Triggered.json
📂 Categoría: Desarrollo/Scripts
🔢 ID: 1286

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 19
🏷️  Keywords: code, manual, automation, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (19 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ Research & Explain Topics
▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ Extract Topics & Questions
▸ @n8n/n8n-nodes-langchain.chainSummarization
  └─ Summarize Transcript
▸ @n8n/n8n-nodes-langchain.documentJsonInputLoader
  └─ Workflow Input to JSON Document
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ GPT 4 - Extract
  └─ GPT3.5 - Research
  └─ GPT3.5 - Summarize
▸ @n8n/n8n-nodes-langchain.outputParserStructured
  └─ Structured Output Parser
▸ @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
  └─ Recursive Character Text Splitter
▸ @n8n/n8n-nodes-langchain.toolWikipedia
  └─ Wikipedia1
▸ code
  └─ Podcast Episode Transcript
  └─ Format topic text & title
▸ gmail
  └─ Send Digest
▸ itemLists
  └─ Topics
▸ manualTrigger
  └─ When clicking "Execute Workflow"
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note3
  └─ Sticky Note4

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1286_Code_Manual_Automation_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. GPT 4 - Extract
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   2. Send Digest
      → Tipo: gmail
      → Credencial requerida: gmailOAuth2
   3. GPT3.5 - Research
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   4. GPT3.5 - Summarize
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi

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
