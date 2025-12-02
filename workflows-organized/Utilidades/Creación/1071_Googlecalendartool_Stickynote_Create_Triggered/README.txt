╔══════════════════════════════════════════════════════════════════╗
║  Build an MCP Server with Google Calendar                        ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1071_Googlecalendartool_Stickynote_Create_Triggered.json
📂 Categoría: Utilidades/Creación
🔢 ID: 1071

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 23
🏷️  Keywords: googlecalendartool, stickynote, create, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (23 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Agent
▸ @n8n/n8n-nodes-langchain.chatTrigger
  └─ When chat message received
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ gpt-4o
▸ @n8n/n8n-nodes-langchain.mcpClientTool
  └─ Calendar MCP
▸ @n8n/n8n-nodes-langchain.mcpTrigger
  └─ Google Calendar MCP
▸ @n8n/n8n-nodes-langchain.memoryBufferWindow
  └─ Simple Memory
▸ googleCalendarTool
  └─ SearchEvent
  └─ CreateEvent
  └─ UpdateEvent
  └─ DeleteEvent
▸ stickyNote
  └─ Sticky Note8
  └─ Sticky Note9
  └─ Sticky Note2
  └─ Sticky Note5
  └─ Sticky Note4
  └─ Sticky Note
  └─ Sticky Note6
  └─ Sticky Note1
  └─ Sticky Note7
  └─ Sticky Note10
  └─ Sticky Note11
  └─ Sticky Note12
  └─ Sticky Note13

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1071_Googlecalendartool_Stickynote_Create_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. SearchEvent
      → Tipo: googleCalendarTool
      → Credencial requerida: googleCalendarOAuth2Api
   2. CreateEvent
      → Tipo: googleCalendarTool
      → Credencial requerida: googleCalendarOAuth2Api
   3. UpdateEvent
      → Tipo: googleCalendarTool
      → Credencial requerida: googleCalendarOAuth2Api
   4. DeleteEvent
      → Tipo: googleCalendarTool
      → Credencial requerida: googleCalendarOAuth2Api
   5. gpt-4o
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
