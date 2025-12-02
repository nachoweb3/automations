╔══════════════════════════════════════════════════════════════════╗
║  Analyze Screenshots with AI                                     ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1334_HTTP_Manual_Automation_Webhook.json
📂 Categoría: Web-y-APIs/HTTP
🔢 ID: 1334

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 9
🏷️  Keywords: http, manual, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (9 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.openAi
  └─ Analyze the Screenshot
▸ httpRequest
  └─ URLbox API Request
▸ manualTrigger
  └─ Manual Execution
▸ merge
  └─ Merge Name & Description
▸ set
  └─ Setup
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1334_HTTP_Manual_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   ✅ No se detectaron credenciales automáticamente
   ⚠️  Revisa manualmente cada nodo por si requiere configuración

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
