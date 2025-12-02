╔══════════════════════════════════════════════════════════════════╗
║  Scrape Twitter for mentions of company                          ║
╚══════════════════════════════════════════════════════════════════╝

✅ WORKFLOW 100% GRATUITO

📁 Archivo: 1212_Twitter_Slack_Automation_Scheduled.json
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
   ✅ if
   ✅ schedule
   ✅ cron
   ✅ json
   ✅ datetime


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

4. ⏰ Tareas Recurrentes Automatizadas
   ─────────────────────────────────────────────────────────────
   Ejecuta tareas repetitivas sin intervención manual

   📝 EJEMPLO REAL:
   "Cada viernes genera reporte semanal y lo envía al equipo"

   🔧 CÓMO IMPLEMENTARLO:
   1. Trigger programado (viernes 5pm)
   2. Recopila datos de la semana
   3. Genera reporte formateado
   4. Envía por email/Telegram al equipo

5. 🧹 Limpieza Automática de Datos
   ─────────────────────────────────────────────────────────────
   Mantén tus sistemas limpios y organizados

   📝 EJEMPLO REAL:
   "Cada noche elimina registros temporales mayores a 30 días"

   🔧 CÓMO IMPLEMENTARLO:
   1. Trigger programado (2am diario)
   2. Consulta registros antiguos
   3. Filtra los que cumplen criterios
   4. Elimina o archiva automáticamente

6. 📱 Automatización de Twitter
   ─────────────────────────────────────────────────────────────
   Publica y monitorea contenido en Twitter

   📝 EJEMPLO REAL:
   "Programa posts de Twitter con una semana de adelanto"

   🔧 CÓMO IMPLEMENTARLO:
   1. Carga posts programados en Google Sheets
   2. Trigger revisa horarios
   3. Publica en ${platform} automáticamente
   4. Registra métricas de engagement

7. ⚙️ ETL y Procesamiento de Datos
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

📊 Total de nodos: 7

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS
═════════════════════════════════════════════════════════════════

▸ cron
  └─ Run Every 10 Minutes
▸ dateTime
  └─ Now - 10 minutes
▸ if
  └─ Created since last run?
▸ set
  └─ Filter Tweet Data
  └─ Setup
▸ slack
  └─ Post to Slack
▸ twitter
  └─ Get last 50 mentions

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar
   1. Abre n8n → http://localhost:5678
   2. Menú (☰) → "Import from File"
   3. Selecciona: 1212_Twitter_Slack_Automation_Scheduled.json

🔐 PASO 2: Credenciales (GRATIS)
   1. Get last 50 mentions
      → Tipo: twitter
      → ✅ Usa cuentas/servicios gratuitos
   2. Post to Slack
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
