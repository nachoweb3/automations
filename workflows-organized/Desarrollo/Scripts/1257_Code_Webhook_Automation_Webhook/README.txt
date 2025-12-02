╔══════════════════════════════════════════════════════════════════╗
║  1257_Code_Webhook_Automation_Webhook                            ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1257_Code_Webhook_Automation_Webhook.json
📂 Categoría: Desarrollo/Scripts
🔢 ID: 1257

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

🌐 Activado por webhook (API)
👆 Activación manual

📊 Total de nodos: 51
🏷️  Keywords: code, webhook, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (51 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ Generate Field Value
  └─ Generate Field Value1
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
  └─ OpenAI Chat Model1
▸ airtable
  └─ Get Table Schema
  └─ Fetch Records
  └─ Update Row
  └─ Get Row
  └─ Update Record
  └─ Get Table Schema1
▸ code
  └─ Get Prompt Fields
  └─ Fields to Update
  └─ Parse Event
▸ extractFromFile
  └─ Extract from File
  └─ Extract from File1
▸ filter
  └─ Filter Valid Rows
  └─ Filter Valid Fields
▸ httpRequest
  └─ Get File Data
  └─ Get File Data1
  └─ Get Webhook Payload
  └─ RecordsChanged Webhook
  └─ FieldsChanged Webhook
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ noOp
  └─ Row Reference
  └─ Row Ref
  └─ Event Ref
  └─ Event Ref1
▸ set
  └─ Get Result
  └─ Get Result1
  └─ Add Row ID to Payload
  └─ Set Airtable Vars
  └─ Get "Input" Field
▸ splitInBatches
  └─ Loop Over Items
  └─ Loop Over Items1
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
  └─ Airtable Webhook

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1257_Code_Webhook_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   2. OpenAI Chat Model1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   3. Get Webhook Payload
      → Tipo: httpRequest
      → Credencial requerida: airtableTokenApi
   4. Get Table Schema
      → Tipo: airtable
      → Credencial requerida: airtableTokenApi
   5. Fetch Records
      → Tipo: airtable
      → Credencial requerida: airtableTokenApi
   6. Update Row
      → Tipo: airtable
      → Credencial requerida: airtableTokenApi
   7. Get Row
      → Tipo: airtable
      → Credencial requerida: airtableTokenApi
   8. Update Record
      → Tipo: airtable
      → Credencial requerida: airtableTokenApi
   9. Get Table Schema1
      → Tipo: airtable
      → Credencial requerida: airtableTokenApi
   10. RecordsChanged Webhook
      → Tipo: httpRequest
      → Credencial requerida: airtableTokenApi
   11. FieldsChanged Webhook
      → Tipo: httpRequest
      → Credencial requerida: airtableTokenApi

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
