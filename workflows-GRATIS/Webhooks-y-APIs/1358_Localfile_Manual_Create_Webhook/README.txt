╔══════════════════════════════════════════════════════════════════╗
║  1358_Localfile_Manual_Create_Webhook                            ║
╚══════════════════════════════════════════════════════════════════╝

✅ WORKFLOW 100% GRATUITO

📁 Archivo: 1358_Localfile_Manual_Create_Webhook.json
📂 Categoría: Webhooks-y-APIs
💰 Costo: GRATIS - Sin servicios de pago requeridos

═════════════════════════════════════════════════════════════════
 ¿POR QUÉ ES GRATIS?
═════════════════════════════════════════════════════════════════

Este workflow NO requiere:
   ❌ APIs de pago (OpenAI, Anthropic, etc.)
   ❌ Servicios premium (Salesforce, HubSpot, etc.)
   ❌ Suscripciones mensuales
   ❌ Límites restrictivos en planes gratuitos

Usa únicamente:
   ✅ webhook
   ✅ http
   ✅ httprequest
   ✅ set
   ✅ switch
   ✅ if
   ✅ split
   ✅ manual
   ✅ json


═════════════════════════════════════════════════════════════════
 💡 CASOS DE USO PRÁCTICOS
═════════════════════════════════════════════════════════════════

1. 🌐 Integración entre Servicios Web
   ─────────────────────────────────────────────────────────────
   Conecta aplicaciones que no se integran nativamente

   📝 EJEMPLO REAL:
   "Cuando hay una venta en Shopify, crea tarea en tu sistema de gestión"

   🔧 CÓMO IMPLEMENTARLO:
   1. Webhook recibe datos de Shopify
   2. Transforma formato de datos
   3. Envía a tu sistema vía API
   4. Registra transacción

2. 📡 Monitoreo de APIs
   ─────────────────────────────────────────────────────────────
   Verifica disponibilidad y rendimiento de servicios

   📝 EJEMPLO REAL:
   "Cada 5 minutos verifica que tu API esté funcionando, alerta si hay problemas"

   🔧 CÓMO IMPLEMENTARLO:
   1. Trigger cada 5 minutos
   2. Hace request a tu API
   3. Verifica status y tiempo de respuesta
   4. Alerta si detecta problema

3. ⚙️ ETL y Procesamiento de Datos
   ─────────────────────────────────────────────────────────────
   Extrae, transforma y carga datos entre sistemas

   📝 EJEMPLO REAL:
   "Convierte datos de ventas en formato compatible y los importa a analytics"

   🔧 CÓMO IMPLEMENTARLO:
   1. Extrae datos de sistema origen
   2. Transforma formato (filtros, cálculos)
   3. Valida y limpia datos
   4. Carga en sistema destino

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

📊 Total de nodos: 29

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainRetrievalQa
  └─ Question and Answer Chain
▸ @n8n/n8n-nodes-langchain.chatTrigger
  └─ Chat Trigger
▸ @n8n/n8n-nodes-langchain.documentDefaultDataLoader
  └─ Default Data Loader
▸ @n8n/n8n-nodes-langchain.embeddingsMistralCloud
  └─ Embeddings Mistral Cloud
  └─ Embeddings Mistral Cloud1
▸ @n8n/n8n-nodes-langchain.lmChatMistralCloud
  └─ Mistral Cloud Chat Model
▸ @n8n/n8n-nodes-langchain.retrieverVectorStore
  └─ Vector Store Retriever
▸ @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
  └─ Recursive Character Text Splitter
▸ @n8n/n8n-nodes-langchain.vectorStoreQdrant
  └─ Qdrant Vector Store
  └─ Qdrant Vector Store1
▸ httpRequest
  └─ Search For Existing Point
  └─ Delete Existing Point
  └─ Search For Existing Point1
  └─ Delete Existing Point1
▸ if
  └─ Has Existing Point?
  └─ Has Existing Point?1
▸ localFileTrigger
  └─ Local File Trigger
▸ manualTrigger
  └─ When clicking "Test workflow"
▸ readWriteFile
  └─ Read File
▸ set
  └─ Set Variables
  └─ Prepare Embedding Document
  └─ Remap for File_Added Flow
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note4
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note5
▸ switch
  └─ Handle File Event

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar
   1. Abre n8n → http://localhost:5678
   2. Menú (☰) → "Import from File"
   3. Selecciona: 1358_Localfile_Manual_Create_Webhook.json

🔐 PASO 2: Credenciales (GRATIS)
   1. Embeddings Mistral Cloud
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsMistralCloud
      → ✅ Usa cuentas/servicios gratuitos
   2. Mistral Cloud Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatMistralCloud
      → ✅ Usa cuentas/servicios gratuitos
   3. Embeddings Mistral Cloud1
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsMistralCloud
      → ✅ Usa cuentas/servicios gratuitos
   4. Search For Existing Point
      → Tipo: httpRequest
      → ✅ Usa cuentas/servicios gratuitos
   5. Delete Existing Point
      → Tipo: httpRequest
      → ✅ Usa cuentas/servicios gratuitos
   6. Search For Existing Point1
      → Tipo: httpRequest
      → ✅ Usa cuentas/servicios gratuitos
   7. Delete Existing Point1
      → Tipo: httpRequest
      → ✅ Usa cuentas/servicios gratuitos
   8. Qdrant Vector Store
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreQdrant
      → ✅ Usa cuentas/servicios gratuitos
   9. Qdrant Vector Store1
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreQdrant
      → ✅ Usa cuentas/servicios gratuitos

⚙️  PASO 3: Configurar parámetros
   • Ajusta según tu caso de uso
   • Todos los servicios son gratuitos

▶️  PASO 4: Activar
   • Guarda (Ctrl+S)
   • Activa el workflow
   • ¡Pruébalo!

═════════════════════════════════════════════════════════════════

💡 VENTAJAS DE WORKFLOWS GRATUITOS:
   • Sin costos mensuales
   • Sin límites estrictos de uso
   • Fácil de escalar
   • Ideal para aprender y experimentar

📅 Organizado: 2025-10-20
🔗 Fuente: https://github.com/oxbshw/ultimate-n8n-ai-workflows
