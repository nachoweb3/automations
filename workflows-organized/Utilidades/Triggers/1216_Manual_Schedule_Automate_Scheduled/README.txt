╔══════════════════════════════════════════════════════════════════╗
║  1216_Manual_Schedule_Automate_Scheduled                         ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1216_Manual_Schedule_Automate_Scheduled.json
📂 Categoría: Utilidades/Triggers
🔢 ID: 1216

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

⏰ Ejecución programada (cron/schedule)
👆 Activación manual

📊 Total de nodos: 5
🏷️  Keywords: manual, schedule, automate, scheduled

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (5 total)
═════════════════════════════════════════════════════════════════

▸ if
  └─ If
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ openWeatherMap
  └─ OpenWeatherMap
▸ scheduleTrigger
  └─ Schedule Trigger
▸ signl4
  └─ SIGNL4

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1216_Manual_Schedule_Automate_Scheduled.json

🔐 PASO 2: Configurar credenciales
   1. SIGNL4
      → Tipo: signl4
      → Credencial requerida: signl4Api
   2. OpenWeatherMap
      → Tipo: openWeatherMap
      → Credencial requerida: openWeatherMapApi

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
