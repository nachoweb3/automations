╔══════════════════════════════════════════════════════════════════╗
║  Very simple Human in the loop system email with AI e IMAP       ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1240_Markdown_Stickynote_Send.json
📂 Categoría: Comunicación/Email
🔢 ID: 1240

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 16
🏷️  Keywords: markdown, stickynote, send

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar respuestas a emails basadas en contenido
2. Clasificar y archivar emails automáticamente
3. Enviar notificaciones por email ante eventos específicos

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (16 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ Write email
▸ @n8n/n8n-nodes-langchain.chainSummarization
  └─ Email Summarization Chain
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI
  └─ OpenAI Chat Model
▸ emailReadImap
  └─ Email Trigger (IMAP)
▸ emailSend
  └─ Send Email
  └─ Approve Email
▸ if
  └─ Approved?
▸ markdown
  └─ Markdown
▸ set
  └─ Set Email text
▸ stickyNote
  └─ Sticky Note2
  └─ Sticky Note5
  └─ Sticky Note1
  └─ Sticky Note7
  └─ Sticky Note
  └─ Sticky Note11

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1240_Markdown_Stickynote_Send.json

🔐 PASO 2: Configurar credenciales
   1. Email Trigger (IMAP)
      → Tipo: emailReadImap
      → Credencial requerida: imap
   2. Send Email
      → Tipo: emailSend
      → Credencial requerida: smtp
   3. OpenAI
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   4. Approve Email
      → Tipo: emailSend
      → Credencial requerida: smtp
   5. OpenAI Chat Model
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
