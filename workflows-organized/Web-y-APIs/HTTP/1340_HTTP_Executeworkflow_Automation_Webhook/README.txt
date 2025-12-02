╔══════════════════════════════════════════════════════════════════╗
║  [3/3] Anomaly detection tool (crops dataset)                    ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1340_HTTP_Executeworkflow_Automation_Webhook.json
📂 Categoría: Web-y-APIs/HTTP
🔢 ID: 1340

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 17
🏷️  Keywords: http, executeworkflow, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (17 total)
═════════════════════════════════════════════════════════════════

▸ code
  └─ Compare scores
▸ executeWorkflowTrigger
  └─ Execute Workflow Trigger
▸ httpRequest
  └─ Embed image
  └─ Get similarity of medoids
  └─ Total Points in Collection
  └─ Each Crop Counts
▸ set
  └─ Variables for medoids
  └─ Info About Crop Labeled Clusters
  └─ Image URL hardcode
▸ stickyNote
  └─ Sticky Note1
  └─ Sticky Note4
  └─ Sticky Note3
  └─ Sticky Note2
  └─ Sticky Note5
  └─ Sticky Note6
  └─ Sticky Note7
  └─ Sticky Note22

═════════════════════════════════════════════════════════════════
 ETIQUETAS
═════════════════════════════════════════════════════════════════

🏷️  anomaly-detection

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1340_HTTP_Executeworkflow_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Embed image
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   2. Get similarity of medoids
      → Tipo: httpRequest
      → Credencial requerida: qdrantApi
   3. Total Points in Collection
      → Tipo: httpRequest
      → Credencial requerida: qdrantApi
   4. Each Crop Counts
      → Tipo: httpRequest
      → Credencial requerida: qdrantApi

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
