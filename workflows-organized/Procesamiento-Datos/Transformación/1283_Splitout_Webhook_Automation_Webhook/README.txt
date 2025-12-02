╔══════════════════════════════════════════════════════════════════╗
║  1283_Splitout_Webhook_Automation_Webhook                        ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1283_Splitout_Webhook_Automation_Webhook.json
📂 Categoría: Procesamiento-Datos/Transformación
🔢 ID: 1283

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

🌐 Activado por webhook (API)

📊 Total de nodos: 40
🏷️  Keywords: splitout, webhook, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (40 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Agent
▸ @n8n/n8n-nodes-langchain.chatTrigger
  └─ Chat Trigger
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
▸ @n8n/n8n-nodes-langchain.memoryBufferWindow
  └─ Window Buffer Memory
▸ @n8n/n8n-nodes-langchain.toolWorkflow
  └─ WooCommerce_Tool
▸ aggregate
  └─ Aggregate
▸ code
  └─ Decrypt email
  └─ Encrypt email
  └─ Decrypt email address
▸ dhl
  └─ DHL
▸ executeWorkflowTrigger
  └─ Execute Workflow Trigger
▸ httpRequest
  └─ WooCommerce Get Orders
▸ if
  └─ If email provided
  └─ If user found
  └─ If contains DHL data
  └─ If order found
▸ merge
  └─ Merge Orders
  └─ Merge Order and Tracking Data
  └─ Merge Tracking Data
▸ respondToWebhook
  └─ Respond to Webhook
▸ set
  └─ No email provided
  └─ No customer found
  └─ Extract Tracking Data
  └─ No order found
  └─ Add Error Information
  └─ Send Response
  └─ Example encrypted email
  └─ Mock Data
▸ splitOut
  └─ Split Out
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note6
  └─ Sticky Note8
  └─ Sticky Note7
▸ webhook
  └─ Webhook Example Page
▸ wooCommerce
  └─ WooCommerce - Get User

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1283_Splitout_Webhook_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. WooCommerce - Get User
      → Tipo: wooCommerce
      → Credencial requerida: wooCommerceApi
   2. WooCommerce Get Orders
      → Tipo: httpRequest
      → Credencial requerida: wooCommerceApi
   3. DHL
      → Tipo: dhl
      → Credencial requerida: dhlApi
   4. OpenAI Chat Model
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
