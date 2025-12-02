╔══════════════════════════════════════════════════════════════════╗
║  1315_Telegram_Gmailtool_Automation_Triggered                    ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1315_Telegram_Gmailtool_Automation_Triggered.json
📂 Categoría: Comunicación/Chat
🔢 ID: 1315

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 15
🏷️  Keywords: telegram, gmailtool, automation, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Crear bots de respuesta automática
2. Enviar notificaciones a canales/grupos
3. Integrar con otros servicios para notificaciones

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (15 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ Angie, AI Assistant 👩🏻‍🏫
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
▸ @n8n/n8n-nodes-langchain.memoryBufferWindow
  └─ Window Buffer Memory
▸ @n8n/n8n-nodes-langchain.openAi
  └─ Speech to Text
▸ baserowTool
  └─ Tasks
  └─ Contacts
▸ gmailTool
  └─ Get Email
▸ googleCalendarTool
  └─ Google Calendar
▸ if
  └─ If
▸ set
  └─ Voice or Text
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note5
▸ telegram
  └─ Telegram
  └─ Get Voice File
▸ telegramTrigger
  └─ Listen for incoming events

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1315_Telegram_Gmailtool_Automation_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. Google Calendar
      → Tipo: googleCalendarTool
      → Credencial requerida: googleCalendarOAuth2Api
   2. Get Email
      → Tipo: gmailTool
      → Credencial requerida: gmailOAuth2
   3. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   4. Listen for incoming events
      → Tipo: telegramTrigger
      → Credencial requerida: telegramApi
   5. Telegram
      → Tipo: telegram
      → Credencial requerida: telegramApi
   6. Speech to Text
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   7. Get Voice File
      → Tipo: telegram
      → Credencial requerida: telegramApi
   8. Tasks
      → Tipo: baserowTool
      → Credencial requerida: baserowApi
   9. Contacts
      → Tipo: baserowTool
      → Credencial requerida: baserowApi

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
