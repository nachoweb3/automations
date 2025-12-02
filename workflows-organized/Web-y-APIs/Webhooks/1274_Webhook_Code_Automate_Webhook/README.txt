╔══════════════════════════════════════════════════════════════════╗
║  1274_Webhook_Code_Automate_Webhook                              ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1274_Webhook_Code_Automate_Webhook.json
📂 Categoría: Web-y-APIs/Webhooks
🔢 ID: 1274

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

🌐 Activado por webhook (API)

📊 Total de nodos: 39
🏷️  Keywords: webhook, code, automate, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (39 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ Recruitment AI Agent
▸ @n8n/n8n-nodes-langchain.lmChatGoogleGemini
  └─ Google Gemini Chat Model
▸ code
  └─ Code
  └─ Convert to Fields
▸ erpNext
  └─ ERPNext - Reject if Resume not Attached
  └─ ERPNext - Hold Applicant
  └─ Get Job Opening
▸ extractFromFile
  └─ PDF to Text
  └─ Txt File to Text (Example)
▸ httpRequest
  └─ Reject Applicant
  └─ Update Applicant Data
  └─ Accept Applicant
  └─ Download PDF Resume
▸ if
  └─ Applied Against Job
  └─ If score less than 80
  └─ Resume Link Provided
▸ merge
  └─ Merge1
▸ microsoftOutlook
  └─ Microsoft Outlook
▸ set
  └─ ApplicantData
  └─ Reume Attachment Link
▸ stickyNote
  └─ Sticky Note4
  └─ Sticky Note6
  └─ Sticky Note
  └─ Sticky Note2
  └─ Sticky Note5
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
▸ switch
  └─ File Type
▸ webhook
  └─ Webhook
▸ whatsApp
  └─ WhatsApp Business Cloud

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1274_Webhook_Code_Automate_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. ERPNext - Reject if Resume not Attached
      → Tipo: erpNext
      → Credencial requerida: erpNextApi
   2. ERPNext - Hold Applicant
      → Tipo: erpNext
      → Credencial requerida: erpNextApi
   3. Get Job Opening
      → Tipo: erpNext
      → Credencial requerida: erpNextApi
   4. Google Gemini Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → Credencial requerida: googlePalmApi
   5. Reject Applicant
      → Tipo: httpRequest
      → Credencial requerida: erpNextApi
   6. Update Applicant Data
      → Tipo: httpRequest
      → Credencial requerida: erpNextApi
   7. Accept Applicant
      → Tipo: httpRequest
      → Credencial requerida: erpNextApi
   8. Microsoft Outlook
      → Tipo: microsoftOutlook
      → Credencial requerida: microsoftOutlookOAuth2Api
   9. WhatsApp Business Cloud
      → Tipo: whatsApp
      → Credencial requerida: whatsAppApi

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
