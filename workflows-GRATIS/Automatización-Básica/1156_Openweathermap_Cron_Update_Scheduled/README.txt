╔══════════════════════════════════════════════════════════════════╗
║  Send daily weather updates via a push notification using the P  ║
╚══════════════════════════════════════════════════════════════════╝

✅ WORKFLOW 100% GRATUITO

📁 Archivo: 1156_Openweathermap_Cron_Update_Scheduled.json
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
   ✅ schedule
   ✅ cron
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

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

📊 Total de nodos: 3

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS
═════════════════════════════════════════════════════════════════

▸ cron
  └─ Cron
▸ openWeatherMap
  └─ OpenWeatherMap
▸ pushcut
  └─ Pushcut

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar
   1. Abre n8n → http://localhost:5678
   2. Menú (☰) → "Import from File"
   3. Selecciona: 1156_Openweathermap_Cron_Update_Scheduled.json

🔐 PASO 2: Credenciales (GRATIS)
   1. Pushcut
      → Tipo: pushcut
      → ✅ Usa cuentas/servicios gratuitos
   2. OpenWeatherMap
      → Tipo: openWeatherMap
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
