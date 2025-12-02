╔══════════════════════════════════════════════════════════════════╗
║  Workflow Importer                                               ║
╚══════════════════════════════════════════════════════════════════╝

✅ WORKFLOW 100% GRATUITO

📁 Archivo: 1169_Splitout_Code_Import_Webhook.json
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
   ✅ code
   ✅ set
   ✅ if
   ✅ merge
   ✅ split
   ✅ json
   ✅ executecommand


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

4. 🔧 Lógica de Negocio Personalizada
   ─────────────────────────────────────────────────────────────
   Ejecuta cálculos y lógica compleja automáticamente

   📝 EJEMPLO REAL:
   "Calcula comisiones de vendedores basado en reglas complejas"

   🔧 CÓMO IMPLEMENTARLO:
   1. Recibe datos de ventas
   2. Ejecuta código JavaScript personalizado
   3. Aplica reglas de negocio
   4. Guarda resultados en base de datos

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

📊 Total de nodos: 58

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS
═════════════════════════════════════════════════════════════════

▸ code
  └─ Prepare Request Data
  └─ Get Workflow Names
  └─ Generate Instance Options
  └─ Get Selected Workflow
  └─ Get Selected Credentials
  └─ Replace Credentials in Workflow
  └─ Generate Credential Options
  └─ Get Missing Credentials
▸ executeCommand
  └─ Export Credentials
▸ extractFromFile
  └─ Extract from File
  └─ Binary to JSON
▸ filter
  └─ Filter Out Nodes Having Credentials
▸ form
  └─ Error1
  └─ Error
  └─ Upload File
  └─ Choose Workflow
  └─ Success
  └─ Choose Instance
  └─ Map Credentials
▸ formTrigger
  └─ On form submission
▸ httpRequest
  └─ Get Workflows
▸ if
  └─ Determine Workflow Source
▸ merge
  └─ Merge
  └─ Collect Credentials to Replace
▸ n8n
  └─ Create Workflow
  └─ Create Empty Credentials
▸ noOp
  └─ No Operation
  └─ No Operation1
▸ readWriteFile
  └─ Get Credentials Data
▸ removeDuplicates
  └─ Remove Duplicate Credentials by Name
▸ renameKeys
  └─ Rename Keys
▸ set
  └─ Settings
  └─ Extract Credentials
  └─ Add Old Names
▸ sort
  └─ Sort by updatedAt DESC
▸ splitOut
  └─ Split Out Workflows
  └─ Split Out Nodes
▸ stickyNote
  └─ Sticky Note6
  └─ Sticky Note2
  └─ Sticky Note7
  └─ Sticky Note8
  └─ Sticky Note9
  └─ Sticky Note10
  └─ Sticky Note11
  └─ Sticky Note
  └─ Sticky Note12
  └─ Sticky Note13
  └─ Sticky Note14
  └─ Sticky Note15
  └─ Sticky Note16
  └─ Sticky Note17
  └─ Sticky Note18
  └─ Sticky Note19
  └─ Sticky Note20
  └─ Sticky Note21
  └─ Sticky Note22
  └─ Sticky Note23
  └─ Sticky Note24

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar
   1. Abre n8n → http://localhost:5678
   2. Menú (☰) → "Import from File"
   3. Selecciona: 1169_Splitout_Code_Import_Webhook.json

🔐 PASO 2: Credenciales (GRATIS)
   1. Create Workflow
      → Tipo: n8n
      → ✅ Usa cuentas/servicios gratuitos
   2. Create Empty Credentials
      → Tipo: n8n
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
