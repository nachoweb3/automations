╔══════════════════════════════════════════════════════════════════╗
║  Auto-Tag Blog Posts in WordPress with AI                        ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1323_Splitout_Code_Automation_Webhook.json
📂 Categoría: Procesamiento-Datos/Transformación
🔢 ID: 1323

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 32
🏷️  Keywords: splitout, code, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (32 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ Generate tags for article
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
  └─ OpenAI Chat Model1
▸ @n8n/n8n-nodes-langchain.outputParserAutofixing
  └─ Auto-fixing Output Parser
▸ @n8n/n8n-nodes-langchain.outputParserStructured
  └─ Structured Output Parser
▸ aggregate
  └─ Combine tag_ids
  └─ Combine slugs
▸ code
  └─ Return missing tags
▸ executeWorkflow
  └─ Auto-Tag Posts in WordPress
▸ executeWorkflowTrigger
  └─ Demo Usage in Another Workflow
▸ filter
  └─ Keep matches
▸ httpRequest
  └─ GET WP tags
  └─ POST WP tags
  └─ GET updated WP tags
▸ if
  └─ If
▸ rssFeedReadTrigger
  └─ RSS Feed Trigger
▸ set
  └─ Return article details
  └─ SET initial record
  └─ MOCK article
▸ splitInBatches
  └─ Loop over articles
▸ splitOut
  └─ Split Out
▸ stickyNote
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note6
  └─ Sticky Note7
  └─ Sticky Note8
  └─ Sticky Note9
▸ wordpress
  └─ Wordpress

═════════════════════════════════════════════════════════════════
 ETIQUETAS
═════════════════════════════════════════════════════════════════

🏷️  marketing

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1323_Splitout_Code_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   2. OpenAI Chat Model1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   3. GET WP tags
      → Tipo: httpRequest
      → Credencial requerida: wordpressApi
   4. POST WP tags
      → Tipo: httpRequest
      → Credencial requerida: wordpressApi
   5. GET updated WP tags
      → Tipo: httpRequest
      → Credencial requerida: wordpressApi
   6. Wordpress
      → Tipo: wordpress
      → Credencial requerida: wordpressApi

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
