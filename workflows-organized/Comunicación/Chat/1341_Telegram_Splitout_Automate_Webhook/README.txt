╔══════════════════════════════════════════════════════════════════╗
║  Automated Research Report Generation with OpenAI, Wikipedia, Google Search, and Gmail/Telegram  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1341_Telegram_Splitout_Automate_Webhook.json
📂 Categoría: Comunicación/Chat
🔢 ID: 1341

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 26
🏷️  Keywords: telegram, splitout, automate, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Crear bots de respuesta automática
2. Enviar notificaciones a canales/grupos
3. Integrar con otros servicios para notificaciones

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (26 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ Query Refiner
  └─ Research AI Agent
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
  └─ OpenAI Chat Model1
▸ @n8n/n8n-nodes-langchain.memoryBufferWindow
  └─ Simple Memory
▸ @n8n/n8n-nodes-langchain.outputParserStructured
  └─ Structured Output Parser
▸ @n8n/n8n-nodes-langchain.toolHttpRequest
  └─ Search News
  └─ Wikipedia
  └─ Google Search Web
  └─ SerpApi
▸ aggregate
  └─ Aggregate
▸ code
  └─ Input Validation
  └─ Parse Research Output
  └─ Merge Split Items
  └─ Generate PDF HTML
▸ executeWorkflowTrigger
  └─ Executed by Main AI Agent
▸ gmail
  └─ Send Research to Gmail
▸ googleDrive
  └─ Search Folder
▸ googleSheets
  └─ Store Research Metadata
▸ httpRequest
  └─ Convert HTML to PDF
  └─ Download PDF
▸ if
  └─ If
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ splitOut
  └─ Split Out
▸ stickyNote
  └─ Sticky Note
▸ telegram
  └─ Send PDF

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1341_Telegram_Splitout_Automate_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   2. OpenAI Chat Model1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   3. SerpApi
      → Tipo: @n8n/n8n-nodes-langchain.toolHttpRequest
      → Credencial requerida: serpApi
   4. Store Research Metadata
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   5. Send Research to Gmail
      → Tipo: gmail
      → Credencial requerida: gmailOAuth2
   6. Send PDF
      → Tipo: telegram
      → Credencial requerida: telegramApi
   7. Search Folder
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api

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
