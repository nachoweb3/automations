╔══════════════════════════════════════════════════════════════════╗
║  Agent Milvus tool                                               ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1243_Splitout_Limit_Automation_Webhook.json
📂 Categoría: Procesamiento-Datos/Transformación
🔢 ID: 1243

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 21
🏷️  Keywords: splitout, limit, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (21 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Agent
▸ @n8n/n8n-nodes-langchain.chatTrigger
  └─ When chat message received
▸ @n8n/n8n-nodes-langchain.documentDefaultDataLoader
  └─ Default Data Loader
▸ @n8n/n8n-nodes-langchain.embeddingsOpenAi
  └─ Embeddings OpenAI
  └─ Embeddings OpenAI1
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
▸ @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
  └─ Recursive Character Text Splitter1
▸ @n8n/n8n-nodes-langchain.vectorStoreMilvus
  └─ Milvus Vector Store
  └─ Milvus Vector Store as tool
▸ html
  └─ Extract essay names
  └─ Extract Text Only
▸ httpRequest
  └─ Fetch Essay List
  └─ Fetch essay texts
▸ limit
  └─ Limit to first 3
▸ manualTrigger
  └─ When clicking "Execute Workflow"
▸ splitOut
  └─ Split out into items
▸ stickyNote
  └─ Sticky Note3
  └─ Sticky Note5
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2

═════════════════════════════════════════════════════════════════
 ETIQUETAS
═════════════════════════════════════════════════════════════════

🏷️  Milvus
🏷️  AI

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1243_Splitout_Limit_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Milvus Vector Store
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreMilvus
      → Credencial requerida: milvusApi
   2. Milvus Vector Store as tool
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreMilvus
      → Credencial requerida: milvusApi
   3. Embeddings OpenAI
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsOpenAi
      → Credencial requerida: openAiApi
   4. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   5. Embeddings OpenAI1
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsOpenAi
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
