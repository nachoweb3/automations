╔══════════════════════════════════════════════════════════════════╗
║  Automate Pinterest Analysis & AI-Powered Content Suggestions With Pinterest API  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1331_Code_Schedule_Automate_Webhook.json
📂 Categoría: Desarrollo/Scripts
🔢 ID: 1331

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

⏰ Ejecución programada (cron/schedule)

📊 Total de nodos: 13
🏷️  Keywords: code, schedule, automate, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (13 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ Pinterest Analysis AI Agent
▸ @n8n/n8n-nodes-langchain.chainSummarization
  └─ Pinterest Data Analysis Summary LLM
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
  └─ OpenAI Chat Model1
▸ airtable
  └─ Create Record Within Pinterest Data Table
▸ airtableTool
  └─ Airtable2
▸ code
  └─ Update Data Field To Include Organic
▸ gmail
  └─ Send Marketing Trends & Pinterest Analysis To Marketing Manager
▸ httpRequest
  └─ Pull List of Pinterest Pins From Account
▸ scheduleTrigger
  └─ 8:00am Morning Scheduled Trigger
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1331_Code_Schedule_Automate_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   2. Airtable2
      → Tipo: airtableTool
      → Credencial requerida: airtableTokenApi
   3. OpenAI Chat Model1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   4. Create Record Within Pinterest Data Table
      → Tipo: airtable
      → Credencial requerida: airtableTokenApi
   5. Send Marketing Trends & Pinterest Analysis To Marketing Manager
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
