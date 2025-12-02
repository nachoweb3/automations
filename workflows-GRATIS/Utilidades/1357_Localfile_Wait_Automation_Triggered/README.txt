╔══════════════════════════════════════════════════════════════════╗
║  1357_Localfile_Wait_Automation_Triggered                        ║
╚══════════════════════════════════════════════════════════════════╝

✅ WORKFLOW 100% GRATUITO

📁 Archivo: 1357_Localfile_Wait_Automation_Triggered.json
📂 Categoría: Utilidades
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
   ✅ set
   ✅ switch
   ✅ merge
   ✅ split
   ✅ wait
   ✅ json


═════════════════════════════════════════════════════════════════
 💡 CASOS DE USO PRÁCTICOS
═════════════════════════════════════════════════════════════════

1. ⚙️ ETL y Procesamiento de Datos
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

📊 Total de nodos: 42

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ Generate
  └─ Interview
▸ @n8n/n8n-nodes-langchain.chainRetrievalQa
  └─ Discover
▸ @n8n/n8n-nodes-langchain.chainSummarization
  └─ Summarization Chain
▸ @n8n/n8n-nodes-langchain.documentDefaultDataLoader
  └─ Default Data Loader
▸ @n8n/n8n-nodes-langchain.embeddingsMistralCloud
  └─ Embeddings Mistral Cloud
  └─ Embeddings Mistral Cloud1
▸ @n8n/n8n-nodes-langchain.lmChatMistralCloud
  └─ Mistral Cloud Chat Model
  └─ Mistral Cloud Chat Model1
  └─ Mistral Cloud Chat Model2
  └─ Mistral Cloud Chat Model3
▸ @n8n/n8n-nodes-langchain.outputParserItemList
  └─ Item List Output Parser
▸ @n8n/n8n-nodes-langchain.retrieverVectorStore
  └─ Vector Store Retriever
▸ @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
  └─ Recursive Character Text Splitter
▸ @n8n/n8n-nodes-langchain.vectorStoreQdrant
  └─ Qdrant Vector Store1
  └─ Qdrant Vector Store
▸ aggregate
  └─ Aggregate
▸ convertToFile
  └─ To Binary
▸ extractFromFile
  └─ Extract from PDF
  └─ Extract from DOCX
  └─ Extract from TEXT
▸ localFileTrigger
  └─ Local File Trigger
▸ merge
  └─ Merge
▸ readWriteFile
  └─ Export to Folder
  └─ Import File
▸ set
  └─ Prep Incoming Doc
  └─ Settings
  └─ Get Doc Types
  └─ Get Generated Documents
  └─ Prep For AI
▸ splitInBatches
  └─ For Each Doc Type...
▸ splitOut
  └─ Split Out Doc Types
  └─ Split Out
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note6
▸ switch
  └─ Get FileType
▸ wait
  └─ 2secs

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar
   1. Abre n8n → http://localhost:5678
   2. Menú (☰) → "Import from File"
   3. Selecciona: 1357_Localfile_Wait_Automation_Triggered.json

🔐 PASO 2: Credenciales (GRATIS)
   1. Embeddings Mistral Cloud
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsMistralCloud
      → ✅ Usa cuentas/servicios gratuitos
   2. Mistral Cloud Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatMistralCloud
      → ✅ Usa cuentas/servicios gratuitos
   3. Mistral Cloud Chat Model1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatMistralCloud
      → ✅ Usa cuentas/servicios gratuitos
   4. Embeddings Mistral Cloud1
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsMistralCloud
      → ✅ Usa cuentas/servicios gratuitos
   5. Qdrant Vector Store1
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreQdrant
      → ✅ Usa cuentas/servicios gratuitos
   6. Mistral Cloud Chat Model2
      → Tipo: @n8n/n8n-nodes-langchain.lmChatMistralCloud
      → ✅ Usa cuentas/servicios gratuitos
   7. Mistral Cloud Chat Model3
      → Tipo: @n8n/n8n-nodes-langchain.lmChatMistralCloud
      → ✅ Usa cuentas/servicios gratuitos
   8. Qdrant Vector Store
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
