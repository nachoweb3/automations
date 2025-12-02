╔══════════════════════════════════════════════════════════════════╗
║  Build a Phone Agent to qualify outbound leads and inbound calls with RetellAI -vide  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1362_Wait_Webhook_Create_Webhook.json
📂 Categoría: Utilidades/Espera
🔢 ID: 1362

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

🌐 Activado por webhook (API)

📊 Total de nodos: 18
🏷️  Keywords: wait, webhook, create, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (18 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.openAi
  └─ Generate call summary with OpenAI
▸ filter
  └─ Filter for analyzed calls only
▸ gmail
  └─ Send call summary email
  └─ Send confirmation email to lead
▸ googleSheets
  └─ Check if phone number exists in Google Sheets
  └─ Update lead record in Google Sheets
▸ googleSheetsTrigger
  └─ Detect new lead in Google Sheets
▸ httpRequest
  └─ Call new lead using RetellAI
▸ if
  └─ Check if call was outbound
▸ respondToWebhook
  └─ Send response to inbound webhook call
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note4
  └─ Sticky Note2
  └─ Sticky Note1
▸ twilio
  └─ Send SMS reminder to call lead in 5 minutes
▸ wait
  └─ Wait 5 minutes before making call
▸ webhook
  └─ Receive inbound call from RetellAI (webhook)
  └─ Receive post-call data from RetellAI (webhook)

═════════════════════════════════════════════════════════════════
 ETIQUETAS
═════════════════════════════════════════════════════════════════

🏷️  inbound
🏷️  outbound

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1362_Wait_Webhook_Create_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Detect new lead in Google Sheets
      → Tipo: googleSheetsTrigger
      → Credencial requerida: googleSheetsTriggerOAuth2Api
   2. Send SMS reminder to call lead in 5 minutes
      → Tipo: twilio
      → Credencial requerida: twilioApi
   3. Check if phone number exists in Google Sheets
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   4. Update lead record in Google Sheets
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   5. Send call summary email
      → Tipo: gmail
      → Credencial requerida: gmailOAuth2
   6. Generate call summary with OpenAI
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   7. Send confirmation email to lead
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
