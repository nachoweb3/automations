╔══════════════════════════════════════════════════════════════════╗
║  Translate questions about e-mails into SQL queries and run them  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1245_Postgres_Extractfromfile_Automation_Triggered.json
📂 Categoría: Bases-de-Datos/SQL
🔢 ID: 1245

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 26
🏷️  Keywords: postgres, extractfromfile, automation, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Sincronizar datos entre sistemas
2. Automatizar backups y exportaciones
3. Procesar y transformar datos en lotes

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (26 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Agent
▸ @n8n/n8n-nodes-langchain.chatTrigger
  └─ Chat Trigger
▸ @n8n/n8n-nodes-langchain.lmChatOllama
  └─ Ollama Chat Model
▸ convertToFile
  └─ Convert data to binary
▸ executeWorkflowTrigger
  └─ WorkflowTrigger
▸ extractFromFile
  └─ Extract data from file
▸ if
  └─ Check if query exists
  └─ Check for trailing semicolon
  └─ If ran manually
  └─ If file exists or already retried generating it
▸ manualTrigger
  └─ When clicking "Test workflow"
▸ merge
  └─ Combine query result and chat answer
▸ postgres
  └─ List all columns in a table
  └─ List all tables in a database
  └─ Postgres
▸ readWriteFile
  └─ Save file locally
  └─ Load the schema from the local file
▸ set
  └─ Add table name to output
  └─ Combine schema data and chat input
  └─ Extract SQL query
  └─ Format query results
  └─ Add trailing semicolon
  └─ Format empty output
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
   3. Selecciona: 1245_Postgres_Extractfromfile_Automation_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. List all columns in a table
      → Tipo: postgres
   2. List all tables in a database
      → Tipo: postgres
   3. Ollama Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOllama
   4. Postgres
      → Tipo: postgres

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
