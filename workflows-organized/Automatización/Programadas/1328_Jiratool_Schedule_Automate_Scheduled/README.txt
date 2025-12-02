╔══════════════════════════════════════════════════════════════════╗
║  1328_Jiratool_Schedule_Automate_Scheduled                       ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1328_Jiratool_Schedule_Automate_Scheduled.json
📂 Categoría: Automatización/Programadas
🔢 ID: 1328

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

⏰ Ejecución programada (cron/schedule)

📊 Total de nodos: 36
🏷️  Keywords: jiratool, schedule, automate, scheduled

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (36 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ KnowledgeBase Agent
▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ Issue Reminder Agent
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
  └─ OpenAI Chat Model1
  └─ OpenAI Chat Model3
  └─ OpenAI Chat Model4
▸ @n8n/n8n-nodes-langchain.outputParserStructured
  └─ Structured Output Parser
▸ @n8n/n8n-nodes-langchain.sentimentAnalysis
  └─ Customer Satisfaction Agent
▸ @n8n/n8n-nodes-langchain.textClassifier
  └─ Classify Current Issue State
▸ aggregate
  └─ Join Comments
▸ executeWorkflow
  └─ Execute Workflow
▸ executeWorkflowTrigger
  └─ Execute Workflow Trigger
▸ if
  └─ Solution Found?
  └─ Last Message is Not Bot
▸ jira
  └─ Get Issue Comments
  └─ Close Issue
  └─ Send Reminder
  └─ Add Autoclose Message
  └─ Ask For Feedback Message
  └─ Reply to Issue
  └─ Close Issue2
  └─ Get List of Unresolved Long Lived Issues
▸ jiraTool
  └─ Find Simlar Issues
▸ notionTool
  └─ Query KnowledgeBase
▸ scheduleTrigger
  └─ Schedule Trigger
▸ set
  └─ Simplify Thread For AI
  └─ Get Issue Metadata
▸ slack
  └─ Notify Slack Channel
  └─ Report Unhappy Resolution
▸ stickyNote
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note6
  └─ Sticky Note

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1328_Jiratool_Schedule_Automate_Scheduled.json

🔐 PASO 2: Configurar credenciales
   1. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   2. OpenAI Chat Model1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   3. OpenAI Chat Model3
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   4. OpenAI Chat Model4
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   5. Get Issue Comments
      → Tipo: jira
      → Credencial requerida: jiraSoftwareCloudApi
   6. Close Issue
      → Tipo: jira
      → Credencial requerida: jiraSoftwareCloudApi
   7. Send Reminder
      → Tipo: jira
      → Credencial requerida: jiraSoftwareCloudApi
   8. Add Autoclose Message
      → Tipo: jira
      → Credencial requerida: jiraSoftwareCloudApi
   9. Ask For Feedback Message
      → Tipo: jira
      → Credencial requerida: jiraSoftwareCloudApi
   10. Reply to Issue
      → Tipo: jira
      → Credencial requerida: jiraSoftwareCloudApi
   11. Notify Slack Channel
      → Tipo: slack
      → Credencial requerida: slackApi
   12. Close Issue2
      → Tipo: jira
      → Credencial requerida: jiraSoftwareCloudApi
   13. Get List of Unresolved Long Lived Issues
      → Tipo: jira
      → Credencial requerida: jiraSoftwareCloudApi
   14. Find Simlar Issues
      → Tipo: jiraTool
      → Credencial requerida: jiraSoftwareCloudApi
   15. Query KnowledgeBase
      → Tipo: notionTool
      → Credencial requerida: notionApi
   16. Report Unhappy Resolution
      → Tipo: slack
      → Credencial requerida: slackApi

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
