╔══════════════════════════════════════════════════════════════════╗
║  Check for valid Mautic contact email                            ║
╚══════════════════════════════════════════════════════════════════╝

✅ WORKFLOW 100% GRATUITO

📁 Archivo: 1168_Mautic_Slack_Send_Triggered.json
📂 Categoría: Otros-Gratis
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
   ✅ if
   ✅ json


═════════════════════════════════════════════════════════════════
 💡 CASOS DE USO PRÁCTICOS
═════════════════════════════════════════════════════════════════

1. 💬 Bot de Notificaciones en Slack
   ─────────────────────────────────────────────────────────────
   Recibe alertas instantáneas en Slack cuando ocurren eventos

   📝 EJEMPLO REAL:
   "Cuando alguien compra en tu tienda, recibes mensaje en Slack con detalles"

   🔧 CÓMO IMPLEMENTARLO:
   1. Webhook/trigger detecta evento (compra, registro, etc)
   2. Formatea mensaje con información relevante
   3. Envía a tu canal/chat de Slack
   4. Notificación instantánea en tu móvil

2. 🤖 Comandos Interactivos en Slack
   ─────────────────────────────────────────────────────────────
   Controla tus sistemas con comandos desde Slack

   📝 EJEMPLO REAL:
   "Escribe /ventas en Slack y recibe reporte de ventas del día"

   🔧 CÓMO IMPLEMENTARLO:
   1. Usuario envía comando en Slack
   2. Workflow detecta el comando
   3. Ejecuta acción (consulta BD, genera reporte)
   4. Responde con resultado en Slack

3. 📊 Reportes Diarios en Slack
   ─────────────────────────────────────────────────────────────
   Recibe resúmenes automáticos cada día

   📝 EJEMPLO REAL:
   "Todos los días a las 8am recibes métricas del negocio en Slack"

   🔧 CÓMO IMPLEMENTARLO:
   1. Trigger programado (8am diario)
   2. Consulta bases de datos/APIs
   3. Genera resumen formateado
   4. Envía a Slack

4. ⚙️ ETL y Procesamiento de Datos
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

📊 Total de nodos: 6

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS
═════════════════════════════════════════════════════════════════

▸ if
  └─ If is not new contact
  └─ If the email is suspicious
▸ itemLists
  └─ extract information
▸ mauticTrigger
  └─ On Contact Identified
▸ oneSimpleApi
  └─ validate email
▸ slack
  └─ Send to Slack

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar
   1. Abre n8n → http://localhost:5678
   2. Menú (☰) → "Import from File"
   3. Selecciona: 1168_Mautic_Slack_Send_Triggered.json

🔐 PASO 2: Credenciales (GRATIS)
   1. On Contact Identified
      → Tipo: mauticTrigger
      → ✅ Usa cuentas/servicios gratuitos
   2. validate email
      → Tipo: oneSimpleApi
      → ✅ Usa cuentas/servicios gratuitos
   3. Send to Slack
      → Tipo: slack
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
