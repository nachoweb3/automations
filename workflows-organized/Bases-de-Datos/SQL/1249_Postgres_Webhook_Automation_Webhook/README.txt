╔══════════════════════════════════════════════════════════════════╗
║  1249_Postgres_Webhook_Automation_Webhook                        ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1249_Postgres_Webhook_Automation_Webhook.json
📂 Categoría: Bases-de-Datos/SQL
🔢 ID: 1249

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

🌐 Activado por webhook (API)

📊 Total de nodos: 19
🏷️  Keywords: postgres, webhook, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Sincronizar datos entre sistemas
2. Automatizar backups y exportaciones
3. Procesar y transformar datos en lotes

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (19 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.openAi
  └─ OpenAI1
▸ httpRequest
  └─ Create Recall bot
  └─ Create OpenAI thread
▸ if
  └─ If Jimmy word
▸ postgres
  └─ Insert Transcription Part
▸ postgresTool
  └─ Create Note
▸ set
  └─ Scenario 1 Start - Edit Fields
▸ stickyNote
  └─ Sticky Note9
  └─ Sticky Note7
  └─ Sticky Note6
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note8
▸ supabase
  └─ Create data record
▸ webhook
  └─ Scenario 2 Start - Webhook

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1249_Postgres_Webhook_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. OpenAI1
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   2. Insert Transcription Part
      → Tipo: postgres
      → Credencial requerida: postgres
   3. Create Note
      → Tipo: postgresTool
      → Credencial requerida: postgres
   4. Create Recall bot
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth
   5. Create OpenAI thread
      → Tipo: httpRequest
      → Credencial requerida: openAiApi
   6. Create data record
      → Tipo: supabase
      → Credencial requerida: supabaseApi

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
