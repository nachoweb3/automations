╔══════════════════════════════════════════════════════════════════╗
║  HR-focused automation pipeline with AI                          ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1254_Extractfromfile_Form_Automate_Triggered.json
📂 Categoría: Automatización/General
🔢 ID: 1254

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 18
🏷️  Keywords: extractfromfile, form, automate, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (18 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ HR Expert
▸ @n8n/n8n-nodes-langchain.chainSummarization
  └─ Summarization Chain
▸ @n8n/n8n-nodes-langchain.informationExtractor
  └─ Qualifications
  └─ Personal Data
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI
▸ @n8n/n8n-nodes-langchain.outputParserStructured
  └─ Structured Output Parser
▸ extractFromFile
  └─ Extract from File
▸ formTrigger
  └─ On form submission
▸ googleDrive
  └─ Upload CV
▸ googleSheets
  └─ Google Sheets
▸ merge
  └─ Merge
▸ set
  └─ Profile Wanted
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1254_Extractfromfile_Form_Automate_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. Google Sheets
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   2. Upload CV
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   3. OpenAI
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
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
