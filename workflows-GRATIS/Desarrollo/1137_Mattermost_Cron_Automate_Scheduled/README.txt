╔══════════════════════════════════════════════════════════════════╗
║  Coffee Bot (Mattermost)                                         ║
╚══════════════════════════════════════════════════════════════════╝

✅ WORKFLOW 100% GRATUITO

📁 Archivo: 1137_Mattermost_Cron_Automate_Scheduled.json
📂 Categoría: Desarrollo
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
   ✅ function
   ✅ schedule
   ✅ cron
   ✅ calendar
   ✅ json


═════════════════════════════════════════════════════════════════
 💡 CASOS DE USO PRÁCTICOS
═════════════════════════════════════════════════════════════════

1. ⏰ Tareas Recurrentes Automatizadas
   ─────────────────────────────────────────────────────────────
   Ejecuta tareas repetitivas sin intervención manual

   📝 EJEMPLO REAL:
   "Cada viernes genera reporte semanal y lo envía al equipo"

   🔧 CÓMO IMPLEMENTARLO:
   1. Trigger programado (viernes 5pm)
   2. Recopila datos de la semana
   3. Genera reporte formateado
   4. Envía por email/Telegram al equipo

2. 🧹 Limpieza Automática de Datos
   ─────────────────────────────────────────────────────────────
   Mantén tus sistemas limpios y organizados

   📝 EJEMPLO REAL:
   "Cada noche elimina registros temporales mayores a 30 días"

   🔧 CÓMO IMPLEMENTARLO:
   1. Trigger programado (2am diario)
   2. Consulta registros antiguos
   3. Filtra los que cumplen criterios
   4. Elimina o archiva automáticamente

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

📊 Total de nodos: 6

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS
═════════════════════════════════════════════════════════════════

▸ cron
  └─ Weekly trigger on monday
▸ function
  └─ Divide into groups
▸ googleCalendar
  └─ Send calendar invites
▸ mattermost
  └─ Greetings
  └─ Announce groups
  └─ Employees in coffee chat channel

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar
   1. Abre n8n → http://localhost:5678
   2. Menú (☰) → "Import from File"
   3. Selecciona: 1137_Mattermost_Cron_Automate_Scheduled.json

🔐 PASO 2: Credenciales (GRATIS)
   1. Greetings
      → Tipo: mattermost
      → ✅ Usa cuentas/servicios gratuitos
   2. Announce groups
      → Tipo: mattermost
      → ✅ Usa cuentas/servicios gratuitos
   3. Employees in coffee chat channel
      → Tipo: mattermost
      → ✅ Usa cuentas/servicios gratuitos
   4. Send calendar invites
      → Tipo: googleCalendar
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
