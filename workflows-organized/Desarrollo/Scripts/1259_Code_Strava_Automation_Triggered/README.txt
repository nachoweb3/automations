╔══════════════════════════════════════════════════════════════════╗
║  1259_Code_Strava_Automation_Triggered                           ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1259_Code_Strava_Automation_Triggered.json
📂 Categoría: Desarrollo/Scripts
🔢 ID: 1259

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 15
🏷️  Keywords: code, strava, automation, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (15 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ Fitness Coach
▸ @n8n/n8n-nodes-langchain.lmChatGoogleGemini
  └─ Google Gemini Chat Model
▸ code
  └─ Combine Everything
  └─ Structure Output
  └─ Conver to HTML
  └─ Code
▸ emailSend
  └─ Send Email
▸ gmail
  └─ Gmail
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note12
  └─ Sticky Note13
  └─ Sticky Note11
  └─ Sticky Note16
▸ stravaTrigger
  └─ Strava Trigger
▸ whatsApp
  └─ WhatsApp Business Cloud

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1259_Code_Strava_Automation_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. Strava Trigger
      → Tipo: stravaTrigger
      → Credencial requerida: stravaOAuth2Api
   2. Google Gemini Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → Credencial requerida: googlePalmApi
   3. Gmail
      → Tipo: gmail
      → Credencial requerida: gmailOAuth2
   4. Send Email
      → Tipo: emailSend
      → Credencial requerida: smtp
   5. WhatsApp Business Cloud
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
