╔══════════════════════════════════════════════════════════════════╗
║  RAG Workflow For Company Documents stored in Google Drive       ║
╚══════════════════════════════════════════════════════════════════╝

✅ WORKFLOW 100% GRATUITO

📁 Archivo: 1141_Stickynote_GoogleDrive_Automate_Triggered.json
📂 Categoría: Google-Gratis
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
   ✅ split
   ✅ googledrive
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

📊 Total de nodos: 18

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Agent
▸ @n8n/n8n-nodes-langchain.chatTrigger
  └─ When chat message received
▸ @n8n/n8n-nodes-langchain.documentDefaultDataLoader
  └─ Default Data Loader
▸ @n8n/n8n-nodes-langchain.embeddingsGoogleGemini
  └─ Embeddings Google Gemini
  └─ Embeddings Google Gemini (retrieval)
▸ @n8n/n8n-nodes-langchain.lmChatGoogleGemini
  └─ Google Gemini Chat Model
  └─ Google Gemini Chat Model (retrieval)
▸ @n8n/n8n-nodes-langchain.memoryBufferWindow
  └─ Window Buffer Memory
▸ @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
  └─ Recursive Character Text Splitter
▸ @n8n/n8n-nodes-langchain.toolVectorStore
  └─ Vector Store Tool
▸ @n8n/n8n-nodes-langchain.vectorStorePinecone
  └─ Pinecone Vector Store
  └─ Pinecone Vector Store (Retrieval)
▸ googleDrive
  └─ Download File From Google Drive
▸ googleDriveTrigger
  └─ Google Drive File Updated
  └─ Google Drive File Created
▸ stickyNote
  └─ Sticky Note2
  └─ Sticky Note
  └─ Sticky Note1

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar
   1. Abre n8n → http://localhost:5678
   2. Menú (☰) → "Import from File"
   3. Selecciona: 1141_Stickynote_GoogleDrive_Automate_Triggered.json

🔐 PASO 2: Credenciales (GRATIS)
   1. Pinecone Vector Store
      → Tipo: @n8n/n8n-nodes-langchain.vectorStorePinecone
      → ✅ Usa cuentas/servicios gratuitos
   2. Embeddings Google Gemini
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsGoogleGemini
      → ✅ Usa cuentas/servicios gratuitos
   3. Pinecone Vector Store (Retrieval)
      → Tipo: @n8n/n8n-nodes-langchain.vectorStorePinecone
      → ✅ Usa cuentas/servicios gratuitos
   4. Embeddings Google Gemini (retrieval)
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsGoogleGemini
      → ✅ Usa cuentas/servicios gratuitos
   5. Download File From Google Drive
      → Tipo: googleDrive
      → ✅ Usa cuentas/servicios gratuitos
   6. Google Drive File Updated
      → Tipo: googleDriveTrigger
      → ✅ Usa cuentas/servicios gratuitos
   7. Google Drive File Created
      → Tipo: googleDriveTrigger
      → ✅ Usa cuentas/servicios gratuitos
   8. Google Gemini Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → ✅ Usa cuentas/servicios gratuitos
   9. Google Gemini Chat Model (retrieval)
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
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
