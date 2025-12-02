╔══════════════════════════════════════════════════════════════════╗
║  💥🛠️Build a Web Search Chatbot with GPT-4o and MCP Brave Search  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1104_Stickynote_Create_Triggered.json
📂 Categoría: Utilidades/Creación
🔢 ID: 1104

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 15
🏷️  Keywords: stickynote, create, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (15 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Agent
▸ @n8n/n8n-nodes-langchain.chatTrigger
  └─ When chat message received
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ gpt-4o
▸ @n8n/n8n-nodes-langchain.memoryBufferWindow
  └─ Simple Memory
▸ n8n-nodes-mcp.mcpClientTool
  └─ MCP Get Brave Tools
  └─ MCP Execute Brave Search
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note6
  └─ Sticky Note7
  └─ Sticky Note8
  └─ Sticky Note1
  └─ Sticky Note2

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1104_Stickynote_Create_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. MCP Get Brave Tools
      → Tipo: n8n-nodes-mcp.mcpClientTool
      → Credencial requerida: mcpClientApi
   2. MCP Execute Brave Search
      → Tipo: n8n-nodes-mcp.mcpClientTool
      → Credencial requerida: mcpClientApi
   3. gpt-4o
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi

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
