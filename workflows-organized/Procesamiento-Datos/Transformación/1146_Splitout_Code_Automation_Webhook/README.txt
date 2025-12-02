╔══════════════════════════════════════════════════════════════════╗
║  LinkedIn Leads Scraping & Enrichment (Main)                     ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1146_Splitout_Code_Automation_Webhook.json
📂 Categoría: Procesamiento-Datos/Transformación
🔢 ID: 1146

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

⏰ Ejecución programada (cron/schedule)

📊 Total de nodos: 66
🏷️  Keywords: splitout, code, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (66 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.openAi
  └─ OpenAI1
  └─ Posts AI Summarizer
  └─ AI Profile Summarizer
  └─ AI Profile Summarizer1
  └─ Posts AI Summarizer1
▸ code
  └─ Clean Profile Data
  └─ Clean Posts Data
  └─ Stringify Profile Data1
  └─ Stringify Posts Data
  └─ Clean Profile Data1
  └─ Stringify Data2
  └─ Stringify Data3
  └─ Clean Profile Data2
▸ formTrigger
  └─ On form submission
▸ googleSheets
  └─ Add Leads to Google Sheet
  └─ Add Linkedin Username
  └─ Get Pending Username Row
  └─ Add Email Address
  └─ Mark Invalid Email
  └─ Get Pending Email Statuses
  └─ Get Pending About and Posts Rows
  └─ Get Pending About and Posts Rows1
  └─ get invalid email rows
  └─ update_to_pending
  └─ get_failed_profile_summary_rows
  └─ update_to_pending1
  └─ get_failed_posts_summary_rows1
  └─ Update Profile Summary
  └─ Update Posts Summary
  └─ Get Completely Enriched Profiles
  └─ update_to_unscraped
  └─ Append to Enriched Leads Database
  └─ update status to failed
  └─ Google Sheets
  └─ Get Pending About and Posts Rows2
  └─ Update Profile Summary1
  └─ update status to failed1
▸ googleSheetsTrigger
  └─ Google Sheets Trigger
  └─ Google Sheets Trigger2
  └─ Google Sheets Trigger3
  └─ Google Sheets Trigger4
  └─ Google Sheets Trigger5
  └─ Google Sheets Trigger6
▸ httpRequest
  └─ Get Email from Apollo
  └─ Confirm Email Validity
  └─ Get Profile Posts
  └─ Get About Profile
  └─ Generate Leads with Apollo.io
  └─ Get About Profile2
▸ if
  └─ If email is valid
▸ merge
  └─ Merge
▸ scheduleTrigger
  └─ Schedule Trigger
  └─ Schedule Trigger2
  └─ Schedule Trigger3
▸ set
  └─ Clean Data
▸ splitOut
  └─ Split Out
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note6
  └─ Sticky Note8
  └─ Sticky Note9
  └─ Sticky Note7

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1146_Splitout_Code_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Google Sheets Trigger
      → Tipo: googleSheetsTrigger
      → Credencial requerida: googleSheetsTriggerOAuth2Api
   2. OpenAI1
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   3. Google Sheets Trigger2
      → Tipo: googleSheetsTrigger
      → Credencial requerida: googleSheetsTriggerOAuth2Api
   4. Add Leads to Google Sheet
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   5. Add Linkedin Username
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   6. Get Pending Username Row
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   7. Add Email Address
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   8. Mark Invalid Email
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   9. Get Pending Email Statuses
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   10. Google Sheets Trigger3
      → Tipo: googleSheetsTrigger
      → Credencial requerida: googleSheetsTriggerOAuth2Api
   11. Get Pending About and Posts Rows
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   12. Google Sheets Trigger4
      → Tipo: googleSheetsTrigger
      → Credencial requerida: googleSheetsTriggerOAuth2Api
   13. Get Pending About and Posts Rows1
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   14. Google Sheets Trigger5
      → Tipo: googleSheetsTrigger
      → Credencial requerida: googleSheetsTriggerOAuth2Api
   15. get invalid email rows
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   16. update_to_pending
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   17. get_failed_profile_summary_rows
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   18. update_to_pending1
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   19. get_failed_posts_summary_rows1
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   20. Posts AI Summarizer
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   21. AI Profile Summarizer
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   22. Update Profile Summary
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   23. Update Posts Summary
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   24. Get Completely Enriched Profiles
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   25. update_to_unscraped
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   26. Append to Enriched Leads Database
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   27. update status to failed
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   28. Google Sheets
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   29. Google Sheets Trigger6
      → Tipo: googleSheetsTrigger
      → Credencial requerida: googleSheetsTriggerOAuth2Api
   30. Get Pending About and Posts Rows2
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   31. AI Profile Summarizer1
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   32. Update Profile Summary1
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   33. Posts AI Summarizer1
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   34. update status to failed1
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api

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
