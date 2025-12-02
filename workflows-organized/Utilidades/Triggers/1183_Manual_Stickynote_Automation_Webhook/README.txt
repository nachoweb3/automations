╔══════════════════════════════════════════════════════════════════╗
║  Enhance Chat Responses with Real-Time Search Data via Bright Data & Gemini AI  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1183_Manual_Stickynote_Automation_Webhook.json
📂 Categoría: Utilidades/Triggers
🔢 ID: 1183

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 18
🏷️  Keywords: manual, stickynote, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (18 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Agent
▸ @n8n/n8n-nodes-langchain.chatTrigger
  └─ When chat message received
▸ @n8n/n8n-nodes-langchain.lmChatGoogleGemini
  └─ Google Gemini Chat Model
▸ @n8n/n8n-nodes-langchain.memoryBufferWindow
  └─ Simple Memory
▸ @n8n/n8n-nodes-langchain.toolHttpRequest
  └─ HTTP Request for Webhook Notification
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ n8n-nodes-mcp.mcpClient
  └─ MCP Client list all tools for Bright Data
  └─ MCP Client Bright Data Search Tool
▸ n8n-nodes-mcp.mcpClientTool
  └─ Google Search Engine for Bright Data
  └─ Bing Search Engine for Bright Data
  └─ MCP Client List all tools
  └─ Yandex Search Engine for Bright Data
▸ set
  └─ Set search query
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4

═════════════════════════════════════════════════════════════════
 ETIQUETAS
═════════════════════════════════════════════════════════════════

🏷️  Engineering
🏷️  Building Blocks
🏷️  AI

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1183_Manual_Stickynote_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Google Gemini Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → Credencial requerida: googlePalmApi
   2. MCP Client list all tools for Bright Data
      → Tipo: n8n-nodes-mcp.mcpClient
      → Credencial requerida: mcpClientApi
   3. MCP Client Bright Data Search Tool
      → Tipo: n8n-nodes-mcp.mcpClient
      → Credencial requerida: mcpClientApi
   4. Google Search Engine for Bright Data
      → Tipo: n8n-nodes-mcp.mcpClientTool
      → Credencial requerida: mcpClientApi
   5. Bing Search Engine for Bright Data
      → Tipo: n8n-nodes-mcp.mcpClientTool
      → Credencial requerida: mcpClientApi
   6. MCP Client List all tools
      → Tipo: n8n-nodes-mcp.mcpClientTool
      → Credencial requerida: mcpClientApi
   7. Yandex Search Engine for Bright Data
      → Tipo: n8n-nodes-mcp.mcpClientTool
      → Credencial requerida: mcpClientApi

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
