╔══════════════════════════════════════════════════════════════════╗
║  Automate LinkedIn Posts with AI                                 ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1330_Linkedin_Schedule_Automate_Webhook.json
📂 Categoría: Comunicación/Redes-Sociales
🔢 ID: 1330

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

⏰ Ejecución programada (cron/schedule)

📊 Total de nodos: 11
🏷️  Keywords: linkedin, schedule, automate, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (11 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.openAi
  └─ Reformat Post Text
▸ aggregate
  └─ Pull together all text blocks + image
▸ httpRequest
  └─ Fetch image from post
▸ linkedIn
  └─ Post on LinkedIn
▸ merge
  └─ Combine text+image
▸ notion
  └─ Set post status to "Done"
  └─ get all content from post page
  └─ query entries from Notion table for today
▸ scheduleTrigger
  └─ Schedule Trigger
▸ stickyNote
  └─ Sticky Note1
  └─ Sticky Note

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1330_Linkedin_Schedule_Automate_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Set post status to "Done"
      → Tipo: notion
      → Credencial requerida: notionApi
   2. Post on LinkedIn
      → Tipo: linkedIn
      → Credencial requerida: linkedInOAuth2Api
   3. Reformat Post Text
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   4. get all content from post page
      → Tipo: notion
      → Credencial requerida: notionApi
   5. query entries from Notion table for today
      → Tipo: notion
      → Credencial requerida: notionApi

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
