╔══════════════════════════════════════════════════════════════════╗
║  1302_Trello_Limit_Automate_Scheduled                            ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1302_Trello_Limit_Automate_Scheduled.json
📂 Categoría: Productividad/Gestión-Proyectos
🔢 ID: 1302

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

⏰ Ejecución programada (cron/schedule)

📊 Total de nodos: 15
🏷️  Keywords: trello, limit, automate, scheduled

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (15 total)
═════════════════════════════════════════════════════════════════

▸ code
  └─ Transform new to MD
▸ filter
  └─ Filter by date (more than 7 days)
▸ gmail
  └─ Send revision email
▸ limit
  └─ Limit news to x
▸ merge
  └─ Merge
▸ rssFeedRead
  └─ RSS Read Testing Catalog
  └─ RSS Read marktechpost
  └─ RSS Read
▸ scheduleTrigger
  └─ Schedule Trigger
▸ set
  └─ Transform date
▸ sort
  └─ Sort by date
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
▸ trello
  └─ Publish comment

═════════════════════════════════════════════════════════════════
 ETIQUETAS
═════════════════════════════════════════════════════════════════

🏷️  Pollup Automation

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1302_Trello_Limit_Automate_Scheduled.json

🔐 PASO 2: Configurar credenciales
   1. Publish comment
      → Tipo: trello
      → Credencial requerida: trelloApi
   2. Send revision email
      → Tipo: gmail
      → Credencial requerida: gmailOAuth2

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
