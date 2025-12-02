╔══════════════════════════════════════════════════════════════════╗
║  DeepSeek v3.1                                                   ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1142_Gmailtool_Stickynote_Automation_Triggered.json
📂 Categoría: Automatización/General
🔢 ID: 1142

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 10
🏷️  Keywords: gmailtool, stickynote, automation, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (10 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Task Planner
▸ @n8n/n8n-nodes-langchain.lmChatDeepSeek
  └─ DeepSeek Chat Model
▸ gmailTool
  └─ Send Email
▸ n8n-nodes-mcp.mcpClientTool
  └─ Notion List Available Tools
  └─ Notion Run a Tool
▸ notionTrigger
  └─ Watch Notion Updates
▸ set
  └─ Edit Workflow Variables
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note2
▸ wordpressTool
  └─ Publish Blog Post

═════════════════════════════════════════════════════════════════
 ETIQUETAS
═════════════════════════════════════════════════════════════════

🏷️  DeepSeek

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1142_Gmailtool_Stickynote_Automation_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. Watch Notion Updates
      → Tipo: notionTrigger
      → Credencial requerida: notionApi
   2. Send Email
      → Tipo: gmailTool
      → Credencial requerida: gmailOAuth2
   3. Publish Blog Post
      → Tipo: wordpressTool
      → Credencial requerida: wordpressApi
   4. Notion List Available Tools
      → Tipo: n8n-nodes-mcp.mcpClientTool
      → Credencial requerida: mcpClientApi
   5. Notion Run a Tool
      → Tipo: n8n-nodes-mcp.mcpClientTool
      → Credencial requerida: mcpClientApi
   6. DeepSeek Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatDeepSeek
      → Credencial requerida: deepSeekApi

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
