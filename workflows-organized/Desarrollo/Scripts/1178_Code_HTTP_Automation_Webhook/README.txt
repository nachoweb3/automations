╔══════════════════════════════════════════════════════════════════╗
║  Publish Videos & Images - Blotato                               ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1178_Code_HTTP_Automation_Webhook.json
📂 Categoría: Desarrollo/Scripts
🔢 ID: 1178

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 30
🏷️  Keywords: code, http, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (30 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.openAi
  └─ Ensure Valid YouTube Title
▸ airtable
  └─ Airtable
  └─ Airtable: Posted Instagram
  └─ Airtable: Posted Instagram1
▸ code
  └─ Pinterest Page Sleuth
▸ formTrigger
  └─ Pinterest System (tm)
▸ httpRequest
  └─ [Instagram] Publish via Blotato
  └─ [Facebook] Publish via Blotato
  └─ [Linkedin] Publish via Blotato
  └─ [Tiktok] Publish via Blotato
  └─ [Pinterest] Publish via Blotato
  └─ [Youtube] Publish via Blotato
  └─ [Threads] Publish via Blotato
  └─ [Twitter] Publish via Blotato
  └─ [Bluesky] Publish via Blotato
  └─ Upload Video to Blotato
  └─ Upload Image to Blotato
  └─ Grab Pinterest Board Page
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ set
  └─ Prepare for Publish
  └─ Airtable Record ID
▸ stickyNote
  └─ Sticky Note2
  └─ Sticky Note1
  └─ Sticky Note
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note6
  └─ Sticky Note7
  └─ Sticky Note8

═════════════════════════════════════════════════════════════════
 ETIQUETAS
═════════════════════════════════════════════════════════════════

🏷️  social media
🏷️  blotato
🏷️  schedule
🏷️  publish

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1178_Code_HTTP_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. [Instagram] Publish via Blotato
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   2. [Facebook] Publish via Blotato
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   3. [Linkedin] Publish via Blotato
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   4. [Tiktok] Publish via Blotato
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   5. [Pinterest] Publish via Blotato
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   6. [Youtube] Publish via Blotato
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   7. [Threads] Publish via Blotato
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   8. [Twitter] Publish via Blotato
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   9. [Bluesky] Publish via Blotato
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   10. Airtable
      → Tipo: airtable
      → Credencial requerida: airtableTokenApi
   11. Upload Video to Blotato
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   12. Upload Image to Blotato
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   13. Ensure Valid YouTube Title
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   14. Airtable: Posted Instagram
      → Tipo: airtable
      → Credencial requerida: airtableTokenApi
   15. Airtable: Posted Instagram1
      → Tipo: airtable
      → Credencial requerida: airtableTokenApi

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
