╔══════════════════════════════════════════════════════════════════╗
║  All-in-One Telegram/Baserow AI Assistant 🤖🧠 Voice/Photo/Save Notes/Long Term Mem  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1305_Telegram_Splitout_Export_Webhook.json
📂 Categoría: Comunicación/Chat
🔢 ID: 1305

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

🌐 Activado por webhook (API)

📊 Total de nodos: 48
🏷️  Keywords: telegram, splitout, export, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Crear bots de respuesta automática
2. Enviar notificaciones a canales/grupos
3. Integrar con otros servicios para notificaciones

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (48 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Tools Agent
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ gpt-4o-mini
▸ @n8n/n8n-nodes-langchain.memoryBufferWindow
  └─ Window Memory (Easy Mode)
▸ @n8n/n8n-nodes-langchain.memoryPostgresChat
  └─ Postgres Chat Memory
▸ @n8n/n8n-nodes-langchain.openAi
  └─ Analyze Image
  └─ Transcribe Recording
▸ aggregate
  └─ Aggregate
▸ baserow
  └─ Baserow Retrieve Memories
  └─ Baserow Retrieve Notes
▸ baserowTool
  └─ Save Note Tool
  └─ Save Memory
▸ convertToFile
  └─ Convert to Image File
▸ extractFromFile
  └─ Extract from File to Base64
▸ if
  └─ Check User & Chat ID
▸ merge
  └─ Merge
  └─ Merge1
▸ set
  └─ Chat Response
  └─ Edit Fields
  └─ Image Schema1
  └─ Edit Fields1
  └─ Validation
▸ splitOut
  └─ caption
▸ stickyNote
  └─ Sticky Note7
  └─ Sticky Note8
  └─ Sticky Note9
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note10
  └─ Sticky Note11
  └─ Sticky Note5
  └─ Sticky Note3
  └─ Sticky Note12
  └─ Sticky Note6
  └─ Sticky Note13
  └─ Sticky Note14
  └─ Sticky Note15
  └─ Sticky Note4
  └─ Sticky Note16
  └─ Sticky Note17
  └─ Sticky Note18
  └─ Sticky Note19
▸ switch
  └─ Message Router
▸ telegram
  └─ Telegram Response
  └─ Get Audio File
  └─ Get Image
  └─ Error message
▸ webhook
  └─ Listen for Telegram Events

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1305_Telegram_Splitout_Export_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. gpt-4o-mini
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   2. Telegram Response
      → Tipo: telegram
      → Credencial requerida: telegramApi
   3. Get Audio File
      → Tipo: telegram
      → Credencial requerida: telegramApi
   4. Analyze Image
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   5. Transcribe Recording
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   6. Get Image
      → Tipo: telegram
      → Credencial requerida: telegramApi
   7. Postgres Chat Memory
      → Tipo: @n8n/n8n-nodes-langchain.memoryPostgresChat
      → Credencial requerida: postgres
   8. Save Note Tool
      → Tipo: baserowTool
      → Credencial requerida: baserowApi
   9. Save Memory
      → Tipo: baserowTool
      → Credencial requerida: baserowApi
   10. Error message
      → Tipo: telegram
      → Credencial requerida: telegramApi
   11. Baserow Retrieve Memories
      → Tipo: baserow
      → Credencial requerida: baserowApi
   12. Baserow Retrieve Notes
      → Tipo: baserow
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
