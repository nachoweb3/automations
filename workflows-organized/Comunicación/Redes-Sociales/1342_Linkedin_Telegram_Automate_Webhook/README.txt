╔══════════════════════════════════════════════════════════════════╗
║  ✨🩷Automated Social Media Content Publishing Factory + System Prompt Composition  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1342_Linkedin_Telegram_Automate_Webhook.json
📂 Categoría: Comunicación/Redes-Sociales
🔢 ID: 1342

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 100
🏷️  Keywords: linkedin, telegram, automate, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (100 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ Social Media Content Creator
  └─ Prepare Email Contents
  └─ 🤖Social Media Router Agent
  └─ Prepare Social Media Email Contents
▸ @n8n/n8n-nodes-langchain.chatTrigger
  └─ When chat message received
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ gpt-40-mini
  └─ gpt-40-mini1
  └─ gpt-4o-mini
  └─ gpt-4o
▸ @n8n/n8n-nodes-langchain.memoryBufferWindow
  └─ Window Buffer Memory
▸ @n8n/n8n-nodes-langchain.toolSerpApi
  └─ SerpAPI
▸ @n8n/n8n-nodes-langchain.toolWorkflow
  └─ X-Twiter
  └─ Instagram
  └─ Facebook
  └─ LinkedIn
  └─ Short
  └─ YouTube Short
▸ code
  └─ Parse Schema
  └─ Parse System Prompt
▸ executeWorkflowTrigger
  └─ When Executed by Another Workflow
▸ extractFromFile
  └─ Extract as JSON
▸ facebookGraphApi
  └─ Instragram Post
  └─ Facebook Post
▸ gmail
  └─ Gmail
  └─ Gmail User for Approval
▸ googleDocs
  └─ Social Media Schema
  └─ Social Media System Prompt
▸ googleDrive
  └─ Save Image to Google Drive
  └─ Save Social Post to Google Drive
  └─ Get Social Post from Google Drive
▸ httpRequest
  └─ pollinations.ai1
  └─ Save Image to imgbb.com
  └─ Instagram Image
  └─ Get Social Post Image
▸ if
  └─ Is Approved?
▸ linkedIn
  └─ LinkedIn Post
▸ merge
  └─ Merge Prompts and Schema
  └─ Merge
  └─ Merge Image and Post Contents
▸ noOp
  └─ Implement Threads Here
  └─ Implement YouTube Shorts Here
▸ set
  └─ Schema
  └─ System Prompt
  └─ Compose Prompt & Schema
  └─ Social Content
  └─ Google Drive Image Meta
  └─ Social Post JSON
  └─ Respond with Google Drive Id
  └─ File Id
  └─ X Response
  └─ Instagram Response
  └─ Facebook Response
  └─ LinkedIn Response
▸ stickyNote
  └─ Sticky Note20
  └─ Sticky Note21
  └─ Sticky Note22
  └─ Sticky Note32
  └─ Sticky Note33
  └─ Sticky Note34
  └─ Sticky Note35
  └─ Sticky Note36
  └─ Sticky Note37
  └─ Sticky Note38
  └─ Sticky Note18
  └─ Sticky Note25
  └─ Sticky Note26
  └─ Sticky Note41
  └─ Sticky Note42
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note6
  └─ Sticky Note7
  └─ Sticky Note8
  └─ Sticky Note9
  └─ Sticky Note10
  └─ Sticky Note11
  └─ Sticky Note12
  └─ Sticky Note13
  └─ Sticky Note14
  └─ Sticky Note15
  └─ Sticky Note16
  └─ Sticky Note17
  └─ Sticky Note19
  └─ Sticky Note23
  └─ Sticky Note24
  └─ Sticky Note27
  └─ Sticky Note28
  └─ Sticky Note29
  └─ Sticky Note30
  └─ Sticky Note43
  └─ Sticky Note44
  └─ Sticky Note45
▸ switch
  └─ Social Media Publishing Router
▸ telegram
  └─ Telegram Success Message (Optional)
  └─ Telegram Error Message (Optional)
▸ twitter
  └─ X Post

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1342_Linkedin_Telegram_Automate_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Gmail
      → Tipo: gmail
      → Credencial requerida: gmailOAuth2
   2. Social Media Schema
      → Tipo: googleDocs
      → Credencial requerida: googleDocsOAuth2Api
   3. Social Media System Prompt
      → Tipo: googleDocs
      → Credencial requerida: googleDocsOAuth2Api
   4. gpt-40-mini
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   5. Instagram Image
      → Tipo: httpRequest
      → Credencial requerida: facebookGraphApi
   6. X Post
      → Tipo: twitter
      → Credencial requerida: twitterOAuth2Api
   7. Instragram Post
      → Tipo: facebookGraphApi
      → Credencial requerida: facebookGraphApi
   8. Facebook Post
      → Tipo: facebookGraphApi
      → Credencial requerida: facebookGraphApi
   9. LinkedIn Post
      → Tipo: linkedIn
      → Credencial requerida: linkedInOAuth2Api
   10. Gmail User for Approval
      → Tipo: gmail
      → Credencial requerida: gmailOAuth2
   11. gpt-40-mini1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   12. gpt-4o-mini
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   13. Save Image to Google Drive
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   14. Save Social Post to Google Drive
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   15. Telegram Success Message (Optional)
      → Tipo: telegram
      → Credencial requerida: telegramApi
   16. Telegram Error Message (Optional)
      → Tipo: telegram
      → Credencial requerida: telegramApi
   17. Get Social Post from Google Drive
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   18. SerpAPI
      → Tipo: @n8n/n8n-nodes-langchain.toolSerpApi
      → Credencial requerida: serpApi
   19. gpt-4o
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
