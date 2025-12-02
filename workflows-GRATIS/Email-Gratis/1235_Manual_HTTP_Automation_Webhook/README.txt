╔══════════════════════════════════════════════════════════════════╗
║  Google Trend Data Extract, Summarization with Bright Data & Go  ║
╚══════════════════════════════════════════════════════════════════╝

✅ WORKFLOW 100% GRATUITO

📁 Archivo: 1235_Manual_HTTP_Automation_Webhook.json
📂 Categoría: Email-Gratis
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
   ✅ function
   ✅ set
   ✅ manual
   ✅ gmail
   ✅ json


═════════════════════════════════════════════════════════════════
 💡 CASOS DE USO PRÁCTICOS
═════════════════════════════════════════════════════════════════

1. 📧 Procesamiento Automático de Emails
   ─────────────────────────────────────────────────────────────
   Clasifica, archiva y responde emails automáticamente

   📝 EJEMPLO REAL:
   "Emails de clientes se clasifican por urgencia y derivan al departamento correcto"

   🔧 CÓMO IMPLEMENTARLO:
   1. Nuevo email en Gmail activa workflow
   2. Analiza asunto y contenido
   3. Clasifica por categoría (ventas/soporte/etc)
   4. Reenvía al equipo correspondiente

2. 🔔 Alertas por Email Inteligentes
   ─────────────────────────────────────────────────────────────
   Recibe notificaciones cuando pasan ciertas condiciones

   📝 EJEMPLO REAL:
   "Te avisa por email cuando hay cambios importantes en tu base de datos"

   🔧 CÓMO IMPLEMENTARLO:
   1. Monitorea base de datos cada hora
   2. Detecta cambios o anomalías
   3. Formatea alerta con detalles
   4. Envía email a tu bandeja

3. 🌐 Integración entre Servicios Web
   ─────────────────────────────────────────────────────────────
   Conecta aplicaciones que no se integran nativamente

   📝 EJEMPLO REAL:
   "Cuando hay una venta en Shopify, crea tarea en tu sistema de gestión"

   🔧 CÓMO IMPLEMENTARLO:
   1. Webhook recibe datos de Shopify
   2. Transforma formato de datos
   3. Envía a tu sistema vía API
   4. Registra transacción

4. 📡 Monitoreo de APIs
   ─────────────────────────────────────────────────────────────
   Verifica disponibilidad y rendimiento de servicios

   📝 EJEMPLO REAL:
   "Cada 5 minutos verifica que tu API esté funcionando, alerta si hay problemas"

   🔧 CÓMO IMPLEMENTARLO:
   1. Trigger cada 5 minutos
   2. Hace request a tu API
   3. Verifica status y tiempo de respuesta
   4. Alerta si detecta problema

5. 🔧 Lógica de Negocio Personalizada
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

📊 Total de nodos: 16

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ Markdown to Textual Data Extractor
▸ @n8n/n8n-nodes-langchain.chainSummarization
  └─ Summarize Google Trends
▸ @n8n/n8n-nodes-langchain.informationExtractor
  └─ Structured Data Extractor
▸ @n8n/n8n-nodes-langchain.lmChatGoogleGemini
  └─ Google Gemini Chat Model for Data Extract
  └─ Google Gemini Chat Model for Summarization
  └─ Google Gemini Chat Model for Structured Data Extract
▸ function
  └─ Create a binary data
▸ gmail
  └─ Send Summary to Gmail
▸ httpRequest
  └─ Initiate a Webhook Notification for Markdown to Textual Data Extraction
  └─ Perform Bright Data Web Request
  └─ Initiate a Webhook Notification for Summarization
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ readWriteFile
  └─ Write the file to disk
▸ set
  └─ Set URL and Bright Data Zone
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar
   1. Abre n8n → http://localhost:5678
   2. Menú (☰) → "Import from File"
   3. Selecciona: 1235_Manual_HTTP_Automation_Webhook.json

🔐 PASO 2: Credenciales (GRATIS)
   1. Google Gemini Chat Model for Data Extract
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → ✅ Usa cuentas/servicios gratuitos
   2. Perform Bright Data Web Request
      → Tipo: httpRequest
      → ✅ Usa cuentas/servicios gratuitos
   3. Google Gemini Chat Model for Summarization
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → ✅ Usa cuentas/servicios gratuitos
   4. Google Gemini Chat Model for Structured Data Extract
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → ✅ Usa cuentas/servicios gratuitos
   5. Send Summary to Gmail
      → Tipo: gmail
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
