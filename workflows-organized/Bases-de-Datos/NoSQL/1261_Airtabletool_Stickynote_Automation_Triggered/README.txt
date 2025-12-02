╔══════════════════════════════════════════════════════════════════╗
║  AI Social Media Caption Creator                                 ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1261_Airtabletool_Stickynote_Automation_Triggered.json
📂 Categoría: Bases-de-Datos/NoSQL
🔢 ID: 1261

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 10
🏷️  Keywords: airtabletool, stickynote, automation, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Sincronizar datos entre sistemas
2. Automatizar backups y exportaciones
3. Procesar y transformar datos en lotes

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (10 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Agent
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
▸ @n8n/n8n-nodes-langchain.memoryBufferWindow
  └─ Window Buffer Memory
▸ airtable
  └─ Get Airtable Record Data
  └─ Post Caption into Airtable Record
▸ airtableTool
  └─ Background Info
▸ airtableTrigger
  └─ Airtable Trigger: New Record
▸ set
  └─ Format Fields
▸ stickyNote
  └─ Sticky Note1
▸ wait
  └─ Wait 1 Minute

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1261_Airtabletool_Stickynote_Automation_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   2. Get Airtable Record Data
      → Tipo: airtable
      → Credencial requerida: airtableTokenApi
   3. Post Caption into Airtable Record
      → Tipo: airtable
      → Credencial requerida: airtableTokenApi
   4. Airtable Trigger: New Record
      → Tipo: airtableTrigger
      → Credencial requerida: airtableTokenApi
   5. Background Info
      → Tipo: airtableTool
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
