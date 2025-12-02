╔══════════════════════════════════════════════════════════════════╗
║  OpenAI Assistant for Hubspot Chat                               ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1366_Wait_Code_Automation_Webhook.json
📂 Categoría: Utilidades/Espera
🔢 ID: 1366

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

🌐 Activado por webhook (API)

📊 Total de nodos: 34
🏷️  Keywords: wait, code, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (34 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.openAi
  └─ OpenAI
▸ airtable
  └─ Airtable
  └─ createThread
▸ code
  └─ Code1
  └─ Code
▸ httpRequest
  └─ getHubspotMessage
  └─ OpenAi Create Thread
  └─ OpenAI Run
  └─ Get Run
  └─ Get Last Message
  └─ HTTP Request
  └─ Submit Data
  └─ HTTP Request1
  └─ Submit Data1
  └─ respondHubspotMessage1
  └─ OpenAI Run1
▸ if
  └─ IF
  └─ IF1
  └─ IF2
▸ stickyNote
  └─ Sticky Note1
  └─ Sticky Note
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note6
  └─ Sticky Note7
  └─ Sticky Note8
  └─ Sticky Note9
▸ switch
  └─ Completed, Action or Inprogress
  └─ Select Function
▸ wait
  └─ Wait
  └─ Wait1
  └─ Wait2
  └─ Wait3
▸ webhook
  └─ Webhook

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1366_Wait_Code_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. getHubspotMessage
      → Tipo: httpRequest
      → Credencial requerida: hubspotAppToken
      → Credencial requerida: hubspotOAuth2Api
      → Credencial requerida: hubspotDeveloperApi
   2. OpenAi Create Thread
      → Tipo: httpRequest
      → Credencial requerida: openAiApi
   3. OpenAI Run
      → Tipo: httpRequest
      → Credencial requerida: openAiApi
   4. Get Run
      → Tipo: httpRequest
      → Credencial requerida: openAiApi
   5. Get Last Message
      → Tipo: httpRequest
      → Credencial requerida: openAiApi
   6. Submit Data
      → Tipo: httpRequest
      → Credencial requerida: openAiApi
   7. Submit Data1
      → Tipo: httpRequest
      → Credencial requerida: openAiApi
   8. respondHubspotMessage1
      → Tipo: httpRequest
      → Credencial requerida: hubspotAppToken
      → Credencial requerida: hubspotOAuth2Api
      → Credencial requerida: hubspotDeveloperApi
   9. Airtable
      → Tipo: airtable
      → Credencial requerida: airtableTokenApi
   10. createThread
      → Tipo: airtable
      → Credencial requerida: airtableTokenApi
   11. OpenAI Run1
      → Tipo: httpRequest
      → Credencial requerida: openAiApi
   12. OpenAI
      → Tipo: @n8n/n8n-nodes-langchain.openAi
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
