╔══════════════════════════════════════════════════════════════════╗
║  Two Way Sync Pipedrive and MySQL                                ║
╚══════════════════════════════════════════════════════════════════╝

✅ WORKFLOW 100% GRATUITO

📁 Archivo: 1092_Datetime_Schedule_Sync_Scheduled.json
📂 Categoría: Bases-de-Datos-Gratis
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
   ✅ mysql
   ✅ json
   ✅ datetime


═════════════════════════════════════════════════════════════════
 💡 CASOS DE USO PRÁCTICOS
═════════════════════════════════════════════════════════════════

1. 💾 Sincronización de Datos en Base de datos
   ─────────────────────────────────────────────────────────────
   Mantén tus datos sincronizados entre sistemas

   📝 EJEMPLO REAL:
   "Cuando agregas un contacto en tu CRM, se copia automáticamente a Base de datos"

   🔧 CÓMO IMPLEMENTARLO:
   1. Webhook/trigger detecta nuevo registro
   2. Extrae información relevante
   3. Crea/actualiza registro en Base de datos
   4. Confirma sincronización

2. 📊 Dashboard Automático en Base de datos
   ─────────────────────────────────────────────────────────────
   Actualiza métricas y reportes automáticamente

   📝 EJEMPLO REAL:
   "Cada hora actualiza tu hoja de métricas con datos frescos"

   🔧 CÓMO IMPLEMENTARLO:
   1. Trigger programado cada hora
   2. Consulta APIs/bases de datos
   3. Calcula métricas y KPIs
   4. Actualiza Base de datos con datos nuevos

3. 🔄 Backup Automático de Datos
   ─────────────────────────────────────────────────────────────
   Respalda información crítica regularmente

   📝 EJEMPLO REAL:
   "Cada noche exporta datos importantes a Base de datos como backup"

   🔧 CÓMO IMPLEMENTARLO:
   1. Trigger programado (ej: 2am diario)
   2. Extrae datos de sistema principal
   3. Formatea y limpia datos
   4. Guarda en Base de datos con timestamp

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

6. ⚙️ ETL y Procesamiento de Datos
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

📊 Total de nodos: 14

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS
═════════════════════════════════════════════════════════════════

▸ compareDatasets
  └─ Compare Datasets
▸ dateTime
  └─ Date & Time
▸ if
  └─ IF Data Changed
  └─ IF Updated On
▸ mySql
  └─ MySQL
  └─ Create Contact
  └─ Update Contact
▸ pipedrive
  └─ Pipedrive
  └─ Create Person
  └─ Update Person
▸ scheduleTrigger
  └─ Schedule Trigger
▸ set
  └─ Set Input2
  └─ Set Input1
  └─ Set

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar
   1. Abre n8n → http://localhost:5678
   2. Menú (☰) → "Import from File"
   3. Selecciona: 1092_Datetime_Schedule_Sync_Scheduled.json

🔐 PASO 2: Credenciales (GRATIS)
   1. MySQL
      → Tipo: mySql
      → ✅ Usa cuentas/servicios gratuitos
   2. Pipedrive
      → Tipo: pipedrive
      → ✅ Usa cuentas/servicios gratuitos
   3. Create Person
      → Tipo: pipedrive
      → ✅ Usa cuentas/servicios gratuitos
   4. Create Contact
      → Tipo: mySql
      → ✅ Usa cuentas/servicios gratuitos
   5. Update Contact
      → Tipo: mySql
      → ✅ Usa cuentas/servicios gratuitos
   6. Update Person
      → Tipo: pipedrive
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
