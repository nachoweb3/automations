╔══════════════════════════════════════════════════════════════════╗
║  1344_Splitout_Filter_Automation_Webhook                         ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1344_Splitout_Filter_Automation_Webhook.json
📂 Categoría: Procesamiento-Datos/Transformación
🔢 ID: 1344

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 38
🏷️  Keywords: splitout, filter, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (38 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ Crawl website
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
▸ @n8n/n8n-nodes-langchain.outputParserStructured
  └─ JSON Parser
▸ @n8n/n8n-nodes-langchain.toolWorkflow
  └─ Text
  └─ URLs
▸ aggregate
  └─ Aggregate URLs
▸ filter
  └─ Filter out invalid URLs
  └─ Filter out empty hrefs
▸ html
  └─ Retrieve URLs
▸ httpRequest
  └─ Get website (text)
  └─ Get website (URL)
▸ manualTrigger
  └─ Execute workflow
▸ markdown
  └─ Convert HTML to Markdown
▸ merge
  └─ Merge all data
▸ removeDuplicates
  └─ Remove duplicated
▸ set
  └─ Map company name and website
  └─ Select company name and website
  └─ Set social media array
  └─ Set domain to path
  └─ Set domain (text)
  └─ Add protocool to domain (text)
  └─ Set response (text)
  └─ Set domain (URL)
  └─ Set response (URL)
  └─ Add protocool to domain (URL)
▸ splitOut
  └─ Split out URLs
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note6
  └─ Sticky Note7
  └─ Sticky Note8
  └─ Sticky Note9
▸ supabase
  └─ Get companies
  └─ Insert new row

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1344_Splitout_Filter_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   2. Get companies
      → Tipo: supabase
      → Credencial requerida: supabaseApi
   3. Insert new row
      → Tipo: supabase
      → Credencial requerida: supabaseApi

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
