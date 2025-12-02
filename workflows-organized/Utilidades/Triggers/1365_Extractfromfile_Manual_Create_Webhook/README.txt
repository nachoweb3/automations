╔══════════════════════════════════════════════════════════════════╗
║  1365_Extractfromfile_Manual_Create_Webhook                      ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1365_Extractfromfile_Manual_Create_Webhook.json
📂 Categoría: Utilidades/Triggers
🔢 ID: 1365

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 28
🏷️  Keywords: extractfromfile, manual, create, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (28 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Sales Agent
▸ @n8n/n8n-nodes-langchain.documentDefaultDataLoader
  └─ Default Data Loader
▸ @n8n/n8n-nodes-langchain.embeddingsOpenAi
  └─ Embeddings OpenAI
  └─ Embeddings OpenAI1
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
  └─ OpenAI Chat Model1
▸ @n8n/n8n-nodes-langchain.memoryBufferWindow
  └─ Window Buffer Memory
▸ @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
  └─ Recursive Character Text Splitter
▸ @n8n/n8n-nodes-langchain.toolVectorStore
  └─ Vector Store Tool
▸ @n8n/n8n-nodes-langchain.vectorStoreInMemory
  └─ Product Catalogue
  └─ Create Product Catalogue
▸ extractFromFile
  └─ Extract from File
▸ httpRequest
  └─ get Product Brochure
▸ manualTrigger
  └─ When clicking ‘Test workflow’
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
▸ switch
  └─ Handle Message Types
▸ whatsApp
  └─ Reply To User
  └─ Reply To User1
▸ whatsAppTrigger
  └─ WhatsApp Trigger

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1365_Extractfromfile_Manual_Create_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. WhatsApp Trigger
      → Tipo: whatsAppTrigger
      → Credencial requerida: whatsAppTriggerApi
   2. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   3. Embeddings OpenAI
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsOpenAi
      → Credencial requerida: openAiApi
   4. OpenAI Chat Model1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   5. Embeddings OpenAI1
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsOpenAi
      → Credencial requerida: openAiApi
   6. Reply To User
      → Tipo: whatsApp
      → Credencial requerida: whatsAppApi
   7. Reply To User1
      → Tipo: whatsApp
      → Credencial requerida: whatsAppApi

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
