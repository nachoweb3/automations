╔══════════════════════════════════════════════════════════════════╗
║  1258_Splitout_Code_Automation_Webhook                           ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1258_Splitout_Code_Automation_Webhook.json
📂 Categoría: Procesamiento-Datos/Transformación
🔢 ID: 1258

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

🌐 Activado por webhook (API)

📊 Total de nodos: 45
🏷️  Keywords: splitout, code, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (45 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ Generate Field Value
  └─ Generate Field Value1
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
  └─ OpenAI Chat Model1
▸ code
  └─ Get Prompt Fields
  └─ Get Valid Rows
  └─ Fields to Update
▸ extractFromFile
  └─ Extract from File
  └─ Extract from File1
▸ filter
  └─ Filter Valid Rows
  └─ Filter Valid Fields
▸ httpRequest
  └─ Table Fields API
  └─ List Table API
  └─ Get File Data
  └─ Update Row
  └─ Get Row
  └─ Get File Data1
  └─ Update Row1
▸ noOp
  └─ Row Reference
  └─ Row Ref
  └─ Event Ref
  └─ Event Ref1
▸ set
  └─ Get Event Body
  └─ Get Result
  └─ Get Result1
▸ splitInBatches
  └─ Loop Over Items
  └─ Loop Over Items1
▸ splitOut
  └─ Rows to List
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note7
  └─ Sticky Note8
  └─ Sticky Note9
  └─ Sticky Note10
  └─ Sticky Note11
  └─ Sticky Note12
  └─ Sticky Note13
  └─ Sticky Note6
  └─ Sticky Note14
▸ switch
  └─ Event Type
▸ webhook
  └─ Baserow Event

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1258_Splitout_Code_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Table Fields API
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   2. List Table API
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   3. Update Row
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   4. Get Row
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   5. Update Row1
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   6. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   7. OpenAI Chat Model1
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
