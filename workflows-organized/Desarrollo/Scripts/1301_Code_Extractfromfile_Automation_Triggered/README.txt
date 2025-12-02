╔══════════════════════════════════════════════════════════════════╗
║  Amazon Ads AI Optimization                                      ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1301_Code_Extractfromfile_Automation_Triggered.json
📂 Categoría: Desarrollo/Scripts
🔢 ID: 1301

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 22
🏷️  Keywords: code, extractfromfile, automation, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (22 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ AI Analyze
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
▸ code
  └─ Format Data
▸ extractFromFile
  └─ Extract XLSX Data
  └─ Extract CSV Data
▸ gmail
  └─ Email Optimizations
▸ googleDrive
  └─ List Files
  └─ Get File
▸ if
  └─ is XLSX
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ merge
  └─ Merge XLSX and CSV
▸ set
  └─ Set fileName
  └─ Preserve File Name
  └─ Preserve CSV File Name
  └─ Email Options
▸ stickyNote
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note5
  └─ Sticky Note6
  └─ Sticky Note7
  └─ Sticky Note
  └─ Sticky Note1

═════════════════════════════════════════════════════════════════
 ETIQUETAS
═════════════════════════════════════════════════════════════════

🏷️  AI Flow

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1301_Code_Extractfromfile_Automation_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. List Files
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   2. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   3. Get File
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   4. Email Optimizations
      → Tipo: gmail
      → Credencial requerida: gmailOAuth2

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
