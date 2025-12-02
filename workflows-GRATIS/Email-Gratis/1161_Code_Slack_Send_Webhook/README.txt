╔══════════════════════════════════════════════════════════════════╗
║  Receive_and_analyze_emails_with_rules_in_Sublime_Security       ║
╚══════════════════════════════════════════════════════════════════╝

✅ WORKFLOW 100% GRATUITO

📁 Archivo: 1161_Code_Slack_Send_Webhook.json
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
   ✅ code
   ✅ set
   ✅ if
   ✅ manual
   ✅ email
   ✅ imap
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

6. 🌐 Integración entre Servicios Web
   ─────────────────────────────────────────────────────────────
   Conecta aplicaciones que no se integran nativamente

   📝 EJEMPLO REAL:
   "Cuando hay una venta en Shopify, crea tarea en tu sistema de gestión"

   🔧 CÓMO IMPLEMENTARLO:
   1. Webhook recibe datos de Shopify
   2. Transforma formato de datos
   3. Envía a tu sistema vía API
   4. Registra transacción

7. 📡 Monitoreo de APIs
   ─────────────────────────────────────────────────────────────
   Verifica disponibilidad y rendimiento de servicios

   📝 EJEMPLO REAL:
   "Cada 5 minutos verifica que tu API esté funcionando, alerta si hay problemas"

   🔧 CÓMO IMPLEMENTARLO:
   1. Trigger cada 5 minutos
   2. Hace request a tu API
   3. Verifica status y tiempo de respuesta
   4. Alerta si detecta problema

8. ⚙️ ETL y Procesamiento de Datos
   ─────────────────────────────────────────────────────────────
   Extrae, transforma y carga datos entre sistemas

   📝 EJEMPLO REAL:
   "Convierte datos de ventas en formato compatible y los importa a analytics"

   🔧 CÓMO IMPLEMENTARLO:
   1. Extrae datos de sistema origen
   2. Transforma formato (filtros, cálculos)
   3. Valida y limpia datos
   4. Carga en sistema destino

9. 🔧 Lógica de Negocio Personalizada
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

📊 Total de nodos: 13

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS
═════════════════════════════════════════════════════════════════

▸ code
  └─ Split to matched and unmatched
▸ emailReadImap
  └─ Email Trigger (IMAP)
▸ httpRequest
  └─ Analyze email with Sublime Security
▸ if
  └─ IF email has attachment
▸ manualTrigger
  └─ When clicking "Execute Workflow"
▸ moveBinaryData
  └─ Move Binary Data
▸ set
  └─ Format the message
▸ slack
  └─ Slack
  └─ Notify about missing attachment
▸ stickyNote
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar
   1. Abre n8n → http://localhost:5678
   2. Menú (☰) → "Import from File"
   3. Selecciona: 1161_Code_Slack_Send_Webhook.json

🔐 PASO 2: Credenciales (GRATIS)
   1. Email Trigger (IMAP)
      → Tipo: emailReadImap
      → ✅ Usa cuentas/servicios gratuitos
   2. Slack
      → Tipo: slack
      → ✅ Usa cuentas/servicios gratuitos
   3. Notify about missing attachment
      → Tipo: slack
      → ✅ Usa cuentas/servicios gratuitos
   4. Analyze email with Sublime Security
      → Tipo: httpRequest
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
