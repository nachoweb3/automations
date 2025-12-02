╔══════════════════════════════════════════════════════════════════╗
║  AI Email processing autoresponder with approval (Yes/No)        ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1284_Emailreadimap_Markdown_Send.json
📂 Categoría: Comunicación/Email
🔢 ID: 1284

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 17
🏷️  Keywords: emailreadimap, markdown, send

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar respuestas a emails basadas en contenido
2. Clasificar y archivar emails automáticamente
3. Enviar notificaciones por email ante eventos específicos

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (17 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ Write email
▸ @n8n/n8n-nodes-langchain.chainSummarization
  └─ Email Summarization Chain
▸ @n8n/n8n-nodes-langchain.embeddingsOpenAi
  └─ Embeddings OpenAI
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ DeepSeek R1
  └─ OpenAI
▸ @n8n/n8n-nodes-langchain.vectorStoreQdrant
  └─ Qdrant Vector Store
▸ emailReadImap
  └─ Email Trigger (IMAP)
▸ emailSend
  └─ Send Email
▸ gmail
  └─ Send Draft
▸ if
  └─ Approve?
▸ markdown
  └─ Markdown
▸ set
  └─ Set Email
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1284_Emailreadimap_Markdown_Send.json

🔐 PASO 2: Configurar credenciales
   1. Email Trigger (IMAP)
      → Tipo: emailReadImap
      → Credencial requerida: imap
   2. DeepSeek R1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   3. Send Email
      → Tipo: emailSend
      → Credencial requerida: smtp
   4. Qdrant Vector Store
      → Tipo: @n8n/n8n-nodes-langchain.vectorStoreQdrant
      → Credencial requerida: qdrantApi
   5. Embeddings OpenAI
      → Tipo: @n8n/n8n-nodes-langchain.embeddingsOpenAi
      → Credencial requerida: openAiApi
   6. OpenAI
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   7. Send Draft
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
