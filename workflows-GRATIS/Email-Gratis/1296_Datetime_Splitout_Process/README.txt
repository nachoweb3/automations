╔══════════════════════════════════════════════════════════════════╗
║  Parse DMARC reports                                             ║
╚══════════════════════════════════════════════════════════════════╝

✅ WORKFLOW 100% GRATUITO

📁 Archivo: 1296_Datetime_Splitout_Process.json
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
   ✅ set
   ✅ if
   ✅ split
   ✅ email
   ✅ imap
   ✅ mysql
   ✅ xml
   ✅ json
   ✅ datetime
   ✅ xml
   ✅ compression


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

3. 💬 Bot de Notificaciones en Slack
   ─────────────────────────────────────────────────────────────
   Recibe alertas instantáneas en Slack cuando ocurren eventos

   📝 EJEMPLO REAL:
   "Cuando alguien compra en tu tienda, recibes mensaje en Slack con detalles"

   🔧 CÓMO IMPLEMENTARLO:
   1. Webhook/trigger detecta evento (compra, registro, etc)
   2. Formatea mensaje con información relevante
   3. Envía a tu canal/chat de Slack
   4. Notificación instantánea en tu móvil

4. 🤖 Comandos Interactivos en Slack
   ─────────────────────────────────────────────────────────────
   Controla tus sistemas con comandos desde Slack

   📝 EJEMPLO REAL:
   "Escribe /ventas en Slack y recibe reporte de ventas del día"

   🔧 CÓMO IMPLEMENTARLO:
   1. Usuario envía comando en Slack
   2. Workflow detecta el comando
   3. Ejecuta acción (consulta BD, genera reporte)
   4. Responde con resultado en Slack

5. 📊 Reportes Diarios en Slack
   ─────────────────────────────────────────────────────────────
   Recibe resúmenes automáticos cada día

   📝 EJEMPLO REAL:
   "Todos los días a las 8am recibes métricas del negocio en Slack"

   🔧 CÓMO IMPLEMENTARLO:
   1. Trigger programado (8am diario)
   2. Consulta bases de datos/APIs
   3. Genera resumen formateado
   4. Envía a Slack

6. 💾 Sincronización de Datos en Base de datos
   ─────────────────────────────────────────────────────────────
   Mantén tus datos sincronizados entre sistemas

   📝 EJEMPLO REAL:
   "Cuando agregas un contacto en tu CRM, se copia automáticamente a Base de datos"

   🔧 CÓMO IMPLEMENTARLO:
   1. Webhook/trigger detecta nuevo registro
   2. Extrae información relevante
   3. Crea/actualiza registro en Base de datos
   4. Confirma sincronización

7. 📊 Dashboard Automático en Base de datos
   ─────────────────────────────────────────────────────────────
   Actualiza métricas y reportes automáticamente

   📝 EJEMPLO REAL:
   "Cada hora actualiza tu hoja de métricas con datos frescos"

   🔧 CÓMO IMPLEMENTARLO:
   1. Trigger programado cada hora
   2. Consulta APIs/bases de datos
   3. Calcula métricas y KPIs
   4. Actualiza Base de datos con datos nuevos

8. 🔄 Backup Automático de Datos
   ─────────────────────────────────────────────────────────────
   Respalda información crítica regularmente

   📝 EJEMPLO REAL:
   "Cada noche exporta datos importantes a Base de datos como backup"

   🔧 CÓMO IMPLEMENTARLO:
   1. Trigger programado (ej: 2am diario)
   2. Extrae datos de sistema principal
   3. Formatea y limpia datos
   4. Guarda en Base de datos con timestamp

9. ⚙️ ETL y Procesamiento de Datos
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

📊 Total de nodos: 20

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS
═════════════════════════════════════════════════════════════════

▸ compression
  └─ Unzip File
▸ dateTime
  └─ End date format
  └─ Begin format date
▸ emailReadImap
  └─ Email Trigger (IMAP)
▸ emailSend
  └─ Send Error Notification Email
▸ extractFromFile
  └─ Extract XML data
▸ if
  └─ If multiple records to parse
  └─ If issue with DKIM or SPF
▸ mySql
  └─ Input into database
▸ renameKeys
  └─ Rename Keys
▸ set
  └─ Map fields for DB input and parse
  └─ Rename column for consistency
▸ slack
  └─ Slack Post Message On Channel
▸ splitOut
  └─ Split Out For Separate Entries
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
▸ xml
  └─ Parse XML data to JSON

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar
   1. Abre n8n → http://localhost:5678
   2. Menú (☰) → "Import from File"
   3. Selecciona: 1296_Datetime_Splitout_Process.json

🔐 PASO 2: Credenciales (GRATIS)
   1. Email Trigger (IMAP)
      → Tipo: emailReadImap
      → ✅ Usa cuentas/servicios gratuitos
   2. Input into database
      → Tipo: mySql
      → ✅ Usa cuentas/servicios gratuitos
   3. Slack Post Message On Channel
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
