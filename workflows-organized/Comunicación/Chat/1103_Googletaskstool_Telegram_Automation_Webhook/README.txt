╔══════════════════════════════════════════════════════════════════╗
║  agente                                                          ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1103_Googletaskstool_Telegram_Automation_Webhook.json
📂 Categoría: Comunicación/Chat
🔢 ID: 1103

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

⏰ Ejecución programada (cron/schedule)
🌐 Activado por webhook (API)

📊 Total de nodos: 38
🏷️  Keywords: googletaskstool, telegram, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Crear bots de respuesta automática
2. Enviar notificaciones a canales/grupos
3. Integrar con otros servicios para notificaciones

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (38 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ Assistente clinica interno
  └─ Assistente Clínica
  └─ Assistente de confirmação
  └─ AI Agent
  └─ AI Agent2
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model1
  └─ OpenAI Chat Model
  └─ OpenAI Chat Model2
▸ @n8n/n8n-nodes-langchain.lmChatOpenRouter
  └─ OpenRouter Chat Model1
  └─ OpenRouter Chat Model2
▸ @n8n/n8n-nodes-langchain.mcpClientTool
  └─ MCP Google Calendar
  └─ MCP Google Calendar2
  └─ MCP GMAIL
  └─ MCP CALENDAR
▸ @n8n/n8n-nodes-langchain.memoryPostgresChat
  └─ Postgres Chat Memory
  └─ Postgres Chat Memory1
▸ @n8n/n8n-nodes-langchain.openAi
  └─ OpenAI
  └─ OpenAI1
▸ @n8n/n8n-nodes-langchain.toolWorkflow
  └─ CallToHuman
▸ convertToFile
  └─ Convert to File
▸ googleTasksTool
  └─ Google Tasks
▸ n8n-nodes-evolution-api.evolutionApi
  └─ Evolution API
  └─ Evolution API2
  └─ REMINDER
▸ scheduleTrigger
  └─ Gatilho diário
▸ set
  └─ Edit Fields1
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note5
  └─ Sticky Note1
  └─ Sticky Note6
  └─ Sticky Note4
▸ switch
  └─ Switch
▸ telegram
  └─ Telegram
▸ telegramTool
  └─ Enviar alerta de cancelamento
▸ telegramTrigger
  └─ Receber Mensagem Telegram
▸ webhook
  └─ Webhook1

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1103_Googletaskstool_Telegram_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. OpenAI Chat Model1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   2. Google Tasks
      → Tipo: googleTasksTool
      → Credencial requerida: googleTasksOAuth2Api
   3. Receber Mensagem Telegram
      → Tipo: telegramTrigger
      → Credencial requerida: telegramApi
   4. Postgres Chat Memory
      → Tipo: @n8n/n8n-nodes-langchain.memoryPostgresChat
      → Credencial requerida: postgres
   5. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   6. Enviar alerta de cancelamento
      → Tipo: telegramTool
      → Credencial requerida: telegramApi
   7. Postgres Chat Memory1
      → Tipo: @n8n/n8n-nodes-langchain.memoryPostgresChat
      → Credencial requerida: postgres
   8. Telegram
      → Tipo: telegram
      → Credencial requerida: telegramApi
   9. OpenRouter Chat Model1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenRouter
      → Credencial requerida: openRouterApi
   10. OpenAI
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   11. Evolution API
      → Tipo: n8n-nodes-evolution-api.evolutionApi
      → Credencial requerida: evolutionApi
   12. OpenAI1
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   13. OpenRouter Chat Model2
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenRouter
      → Credencial requerida: openRouterApi
   14. Evolution API2
      → Tipo: n8n-nodes-evolution-api.evolutionApi
      → Credencial requerida: evolutionApi
   15. OpenAI Chat Model2
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   16. REMINDER
      → Tipo: n8n-nodes-evolution-api.evolutionApi
      → Credencial requerida: evolutionApi

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
