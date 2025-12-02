╔══════════════════════════════════════════════════════════════════╗
║  modelo do chatbot                                               ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1350_Mysqltool_Stickynote_Automate_Webhook.json
📂 Categoría: Automatización/General
🔢 ID: 1350

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 12
🏷️  Keywords: mysqltool, stickynote, automate, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (12 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chatTrigger
  └─ Chat Trigger
▸ @n8n/n8n-nodes-langchain.memoryPostgresChat
  └─ Postgres Chat Memory
  └─ Postgres Chat Memory1
▸ @n8n/n8n-nodes-langchain.openAi
  └─ OpenAI
  └─ OpenAI2
▸ @n8n/n8n-nodes-langchain.toolHttpRequest
  └─ Knowledge Base
  └─ External API
▸ if
  └─ If
▸ mySqlTool
  └─ Products in Daatabase
▸ set
  └─ Edit Fields1
  └─ Edit Fields2
▸ stickyNote
  └─ Sticky Note

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1350_Mysqltool_Stickynote_Automate_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. OpenAI
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   2. Postgres Chat Memory
      → Tipo: @n8n/n8n-nodes-langchain.memoryPostgresChat
      → Credencial requerida: postgres
   3. Postgres Chat Memory1
      → Tipo: @n8n/n8n-nodes-langchain.memoryPostgresChat
      → Credencial requerida: postgres
   4. Products in Daatabase
      → Tipo: mySqlTool
      → Credencial requerida: mySql
   5. OpenAI2
      → Tipo: @n8n/n8n-nodes-langchain.openAi
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
