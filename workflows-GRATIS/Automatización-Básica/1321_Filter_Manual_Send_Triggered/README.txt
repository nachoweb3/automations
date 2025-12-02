╔══════════════════════════════════════════════════════════════════╗
║  1321_Filter_Manual_Send_Triggered                               ║
╚══════════════════════════════════════════════════════════════════╝

✅ WORKFLOW 100% GRATUITO

📁 Archivo: 1321_Filter_Manual_Send_Triggered.json
📂 Categoría: Automatización-Básica
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
   ✅ if
   ✅ merge
   ✅ split
   ✅ manual
   ✅ json
   ✅ markdown


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

📊 Total de nodos: 36

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Agent1
▸ @n8n/n8n-nodes-langchain.lmChatOllama
  └─ Ollama Chat Model1
▸ filter
  └─ Filter1
▸ if
  └─ If1
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ markdown
  └─ Markdown1
▸ merge
  └─ Merge1
▸ microsoftOutlook
  └─ Microsoft Outlook10
  └─ Microsoft Outlook12
  └─ Microsoft Outlook13
  └─ Microsoft Outlook15
  └─ Microsoft Outlook16
  └─ Microsoft Outlook17
  └─ Microsoft Outlook18
  └─ Microsoft Outlook19
  └─ Microsoft Outlook20
  └─ Microsoft Outlook21
  └─ Microsoft Outlook22
  └─ Microsoft Outlook23
  └─ Microsoft Outlook Move Message1
▸ set
  └─ varEmal1
  └─ Catch Errors1
  └─ varJSON1
  └─ varID & Category1
▸ splitInBatches
  └─ Loop Over Items1
▸ stickyNote
  └─ Sticky Note8
  └─ Sticky Note9
  └─ Sticky Note10
  └─ Sticky Note11
  └─ Sticky Note12
  └─ Sticky Note13
  └─ Sticky Note14
  └─ Sticky Note15
  └─ Sticky Note16
  └─ Sticky Note17
▸ switch
  └─ Switch1

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar
   1. Abre n8n → http://localhost:5678
   2. Menú (☰) → "Import from File"
   3. Selecciona: 1321_Filter_Manual_Send_Triggered.json

🔐 PASO 2: Credenciales
   ✅ No requiere credenciales externas

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
