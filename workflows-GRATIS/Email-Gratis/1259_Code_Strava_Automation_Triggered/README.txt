╔══════════════════════════════════════════════════════════════════╗
║  1259_Code_Strava_Automation_Triggered                           ║
╚══════════════════════════════════════════════════════════════════╝

✅ WORKFLOW 100% GRATUITO

📁 Archivo: 1259_Code_Strava_Automation_Triggered.json
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
   ✅ code
   ✅ gmail
   ✅ email
   ✅ smtp
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

3. 🔧 Lógica de Negocio Personalizada
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

📊 Total de nodos: 15

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ Fitness Coach
▸ @n8n/n8n-nodes-langchain.lmChatGoogleGemini
  └─ Google Gemini Chat Model
▸ code
  └─ Combine Everything
  └─ Structure Output
  └─ Conver to HTML
  └─ Code
▸ emailSend
  └─ Send Email
▸ gmail
  └─ Gmail
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note12
  └─ Sticky Note13
  └─ Sticky Note11
  └─ Sticky Note16
▸ stravaTrigger
  └─ Strava Trigger
▸ whatsApp
  └─ WhatsApp Business Cloud

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar
   1. Abre n8n → http://localhost:5678
   2. Menú (☰) → "Import from File"
   3. Selecciona: 1259_Code_Strava_Automation_Triggered.json

🔐 PASO 2: Credenciales (GRATIS)
   1. Strava Trigger
      → Tipo: stravaTrigger
      → ✅ Usa cuentas/servicios gratuitos
   2. Google Gemini Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → ✅ Usa cuentas/servicios gratuitos
   3. Gmail
      → Tipo: gmail
      → ✅ Usa cuentas/servicios gratuitos
   4. Send Email
      → Tipo: emailSend
      → ✅ Usa cuentas/servicios gratuitos
   5. WhatsApp Business Cloud
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
