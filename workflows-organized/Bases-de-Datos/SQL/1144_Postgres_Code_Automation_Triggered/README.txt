╔══════════════════════════════════════════════════════════════════╗
║  SHEETS RAG                                                      ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1144_Postgres_Code_Automation_Triggered.json
📂 Categoría: Bases-de-Datos/SQL
🔢 ID: 1144

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 23
🏷️  Keywords: postgres, code, automation, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Sincronizar datos entre sistemas
2. Automatizar backups y exportaciones
3. Procesar y transformar datos en lotes

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (23 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Agent With SQL Query Prompt
▸ @n8n/n8n-nodes-langchain.lmChatGoogleGemini
  └─ Google Gemini Chat Model
▸ @n8n/n8n-nodes-langchain.manualChatTrigger
  └─ When chat message received
▸ @n8n/n8n-nodes-langchain.toolWorkflow
  └─ execute_query_tool
  └─ get_postgres_schema
▸ code
  └─ create table query
  └─ create insertion query
  └─ schema to string
▸ executeWorkflowTrigger
  └─ Execute Workflow Trigger
▸ googleDriveTrigger
  └─ Google Drive Trigger
▸ googleSheets
  └─ fetch sheet data
▸ if
  └─ is not in database
▸ postgres
  └─ table exists?
  └─ remove table
  └─ create table
  └─ perform insertion
  └─ sql query executor
  └─ schema finder
▸ set
  └─ change_this
  └─ response output
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1144_Postgres_Code_Automation_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. Google Drive Trigger
      → Tipo: googleDriveTrigger
      → Credencial requerida: googleDriveOAuth2Api
   2. Google Gemini Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
      → Credencial requerida: googlePalmApi
   3. table exists?
      → Tipo: postgres
      → Credencial requerida: postgres
   4. fetch sheet data
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   5. remove table
      → Tipo: postgres
      → Credencial requerida: postgres
   6. create table
      → Tipo: postgres
      → Credencial requerida: postgres
   7. perform insertion
      → Tipo: postgres
      → Credencial requerida: postgres
   8. sql query executor
      → Tipo: postgres
      → Credencial requerida: postgres
   9. schema finder
      → Tipo: postgres
      → Credencial requerida: postgres

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
