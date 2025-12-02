╔══════════════════════════════════════════════════════════════════╗
║  1274_Webhook_Code_Automate_Webhook                              ║
╚══════════════════════════════════════════════════════════════════╝

✅ WORKFLOW 100% GRATUITO

📁 Archivo: 1274_Webhook_Code_Automate_Webhook.json
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
   ✅ switch
   ✅ if
   ✅ merge
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

📊 Total de nodos: 39

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ Recruitment AI Agent
▸ @n8n/n8n-nodes-langchain.lmChatGoogleGemini
  └─ Google Gemini Chat Model
▸ code
  └─ Code
  └─ Convert to Fields
▸ erpNext
  └─ ERPNext - Reject if Resume not Attached
  └─ ERPNext - Hold Applicant
  └─ Get Job Opening
▸ extractFromFile
  └─ PDF to Text
  └─ Txt File to Text (Example)
▸ httpRequest
  └─ Reject Applicant
  └─ Update Applicant Data
  └─ Accept Applicant
  └─ Download PDF Resume
▸ if
  └─ Applied Against Job
  └─ If score less than 80
  └─ Resume Link Provided
▸ merge
  └─ Merge1
▸ microsoftOutlook
  └─ Microsoft Outlook
▸ set
  └─ ApplicantData
  └─ Reume Attachment Link
▸ stickyNote
  └─ Sticky Note4
  └─ Sticky Note6
  └─ Sticky Note
  └─ Sticky Note2
  └─ Sticky Note5
  └─ Sticky Note7
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
  └─ File Type
▸ webhook
  └─ Webhook
▸ whatsApp
  └─ WhatsApp Business Cloud

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar
   1. Abre n8n → http://localhost:5678
   2. Menú (☰) → "Import from File"
   3. Selecciona: 1274_Webhook_Code_Automate_Webhook.json

🔐 PASO 2: Credenciales (GRATIS)
   1. ERPNext - Reject if Resume not Attached
      → Tipo: erpNext
      → ✅ Usa cuentas/servicios gratuitos
   2. ERPNext - Hold Applicant
      → Tipo: erpNext
      → ✅ Usa cuentas/servicios gratuitos
   3. Get Job Opening
      → Tipo: erpNext
      → ✅ Usa cuentas/servicios gratuitos
   4. Google Gemini Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → ✅ Usa cuentas/servicios gratuitos
   5. Reject Applicant
      → Tipo: httpRequest
      → ✅ Usa cuentas/servicios gratuitos
   6. Update Applicant Data
      → Tipo: httpRequest
      → ✅ Usa cuentas/servicios gratuitos
   7. Accept Applicant
      → Tipo: httpRequest
      → ✅ Usa cuentas/servicios gratuitos
   8. Microsoft Outlook
      → Tipo: microsoftOutlook
      → ✅ Usa cuentas/servicios gratuitos
   9. WhatsApp Business Cloud
      → Tipo: whatsApp
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
