╔══════════════════════════════════════════════════════════════════╗
║  Telegram ChatBot with multiple sessions                         ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1244_Telegram_GoogleSheets_Automate_Triggered.json
📂 Categoría: Comunicación/Chat
🔢 ID: 1244

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 38
🏷️  Keywords: telegram, googlesheets, automate, triggered

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
  └─ Telegram Chatbot
▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ Basic LLM Chain
▸ @n8n/n8n-nodes-langchain.chainSummarization
  └─ Summarization Chain
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
  └─ OpenAI Chat Model1
  └─ OpenAI Chat Model2
▸ @n8n/n8n-nodes-langchain.memoryBufferWindow
  └─ Simple Memory
▸ code
  └─ Trim resume
  └─ Prompt + Resume
  └─ Trim question
  └─ fullText
▸ googleSheets
  └─ Get session
  └─ Disable previous session
  └─ Set new session
  └─ Update database
  └─ Set to expire
  └─ Get session1
  └─ Set new current session
  └─ Response + Text
▸ if
  └─ Exist?
▸ set
  └─ Get message1
  └─ Get message2
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note6
▸ switch
  └─ Command or text?
▸ telegram
  └─ Session activated
  └─ Send response
  └─ OK
  └─ KO
  └─ Send summary
  └─ Send answer
  └─ Send current session
▸ telegramTrigger
  └─ Get message

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1244_Telegram_GoogleSheets_Automate_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   2. Get message
      → Tipo: telegramTrigger
      → Credencial requerida: telegramApi
   3. Get session
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   4. Disable previous session
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   5. Set new session
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   6. Session activated
      → Tipo: telegram
      → Credencial requerida: telegramApi
   7. Send response
      → Tipo: telegram
      → Credencial requerida: telegramApi
   8. Update database
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   9. OpenAI Chat Model1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   10. OpenAI Chat Model2
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   11. Set to expire
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   12. OK
      → Tipo: telegram
      → Credencial requerida: telegramApi
   13. KO
      → Tipo: telegram
      → Credencial requerida: telegramApi
   14. Get session1
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   15. Send summary
      → Tipo: telegram
      → Credencial requerida: telegramApi
   16. Set new current session
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   17. Response + Text
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   18. Send answer
      → Tipo: telegram
      → Credencial requerida: telegramApi
   19. Send current session
      → Tipo: telegram
      → Credencial requerida: telegramApi

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
