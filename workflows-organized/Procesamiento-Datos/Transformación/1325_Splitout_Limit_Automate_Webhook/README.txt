╔══════════════════════════════════════════════════════════════════╗
║  1325_Splitout_Limit_Automate_Webhook                            ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1325_Splitout_Limit_Automate_Webhook.json
📂 Categoría: Procesamiento-Datos/Transformación
🔢 ID: 1325

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 27
🏷️  Keywords: splitout, limit, automate, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (27 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ Capture Existing Article Structure
▸ @n8n/n8n-nodes-langchain.informationExtractor
  └─ Extract Voice Characteristics
  └─ Content Generation Agent
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
  └─ OpenAI Chat Model1
  └─ OpenAI Chat Model2
▸ aggregate
  └─ Combine Articles
▸ html
  └─ Extract Article URLs
  └─ Extract Article Content
▸ httpRequest
  └─ Get Blog
  └─ Get Article
▸ limit
  └─ Latest Articles
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ markdown
  └─ Markdown
▸ merge
  └─ Article Style & Brand Voice
▸ set
  └─ New Article Instruction
▸ splitOut
  └─ Split Out URLs
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note6
  └─ Sticky Note5
  └─ Sticky Note7
  └─ Sticky Note8
▸ wordpress
  └─ Save as Draft

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1325_Splitout_Limit_Automate_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   2. OpenAI Chat Model1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   3. OpenAI Chat Model2
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   4. Save as Draft
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
