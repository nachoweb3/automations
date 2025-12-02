╔══════════════════════════════════════════════════════════════════╗
║  Workflow Importer                                               ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1169_Splitout_Code_Import_Webhook.json
📂 Categoría: Procesamiento-Datos/Transformación
🔢 ID: 1169

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 58
🏷️  Keywords: splitout, code, import, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (58 total)
═════════════════════════════════════════════════════════════════

▸ code
  └─ Prepare Request Data
  └─ Get Workflow Names
  └─ Generate Instance Options
  └─ Get Selected Workflow
  └─ Get Selected Credentials
  └─ Replace Credentials in Workflow
  └─ Generate Credential Options
  └─ Get Missing Credentials
▸ executeCommand
  └─ Export Credentials
▸ extractFromFile
  └─ Extract from File
  └─ Binary to JSON
▸ filter
  └─ Filter Out Nodes Having Credentials
▸ form
  └─ Error1
  └─ Error
  └─ Upload File
  └─ Choose Workflow
  └─ Success
  └─ Choose Instance
  └─ Map Credentials
▸ formTrigger
  └─ On form submission
▸ httpRequest
  └─ Get Workflows
▸ if
  └─ Determine Workflow Source
▸ merge
  └─ Merge
  └─ Collect Credentials to Replace
▸ n8n
  └─ Create Workflow
  └─ Create Empty Credentials
▸ noOp
  └─ No Operation
  └─ No Operation1
▸ readWriteFile
  └─ Get Credentials Data
▸ removeDuplicates
  └─ Remove Duplicate Credentials by Name
▸ renameKeys
  └─ Rename Keys
▸ set
  └─ Settings
  └─ Extract Credentials
  └─ Add Old Names
▸ sort
  └─ Sort by updatedAt DESC
▸ splitOut
  └─ Split Out Workflows
  └─ Split Out Nodes
▸ stickyNote
  └─ Sticky Note6
  └─ Sticky Note2
  └─ Sticky Note7
  └─ Sticky Note8
  └─ Sticky Note9
  └─ Sticky Note10
  └─ Sticky Note11
  └─ Sticky Note
  └─ Sticky Note12
  └─ Sticky Note13
  └─ Sticky Note14
  └─ Sticky Note15
  └─ Sticky Note16
  └─ Sticky Note17
  └─ Sticky Note18
  └─ Sticky Note19
  └─ Sticky Note20
  └─ Sticky Note21
  └─ Sticky Note22
  └─ Sticky Note23
  └─ Sticky Note24

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1169_Splitout_Code_Import_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Create Workflow
      → Tipo: n8n
      → Credencial requerida: n8nApi
   2. Create Empty Credentials
      → Tipo: n8n
      → Credencial requerida: n8nApi

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
