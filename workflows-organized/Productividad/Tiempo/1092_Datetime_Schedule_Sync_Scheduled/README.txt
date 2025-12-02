╔══════════════════════════════════════════════════════════════════╗
║  Two Way Sync Pipedrive and MySQL                                ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1092_Datetime_Schedule_Sync_Scheduled.json
📂 Categoría: Productividad/Tiempo
🔢 ID: 1092

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

⏰ Ejecución programada (cron/schedule)

📊 Total de nodos: 14
🏷️  Keywords: datetime, schedule, sync, scheduled

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (14 total)
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
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1092_Datetime_Schedule_Sync_Scheduled.json

🔐 PASO 2: Configurar credenciales
   1. MySQL
      → Tipo: mySql
      → Credencial requerida: mySql
   2. Pipedrive
      → Tipo: pipedrive
      → Credencial requerida: pipedriveApi
   3. Create Person
      → Tipo: pipedrive
      → Credencial requerida: pipedriveApi
   4. Create Contact
      → Tipo: mySql
      → Credencial requerida: mySql
   5. Update Contact
      → Tipo: mySql
      → Credencial requerida: mySql
   6. Update Person
      → Tipo: pipedrive
      → Credencial requerida: pipedriveApi

⚙️  PASO 3: Configurar parámetros
   • Revisa cada nodo y ajusta los parámetros según tu caso
   • Presta atención a:
     - URLs y endpoints
     - Nombres de archivos y rutas
     - IDs de recursos (channels, grupos, etc.)
     - Horarios (si usa schedule)

▶️  PASO 4: Activar y probar
   1. Guarda el workflow (Ctrl+S)
   2. Activa el workflow (toggle en la esquina superior)
   3. Prueba con el botón "Execute Workflow"
   4. Revisa los logs para verificar ejecución

═════════════════════════════════════════════════════════════════
 TROUBLESHOOTING
═════════════════════════════════════════════════════════════════

❌ Si el workflow falla:
   • Verifica que todas las credenciales estén configuradas
   • Revisa que los servicios externos estén disponibles
   • Comprueba los permisos de API/webhooks
   • Consulta los logs de n8n para errores específicos

═════════════════════════════════════════════════════════════════

📅 Organizado: 2025-10-20
🔗 Fuente: https://github.com/oxbshw/ultimate-n8n-ai-workflows
