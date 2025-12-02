╔══════════════════════════════════════════════════════════════════╗
║  Bitrix24 Task Form Widget Application Workflow example with Webhook Integration  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1356_Code_Webhook_Import_Webhook.json
📂 Categoría: Desarrollo/Scripts
🔢 ID: 1356

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

🌐 Activado por webhook (API)

📊 Total de nodos: 21
🏷️  Keywords: code, webhook, import, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (21 total)
═════════════════════════════════════════════════════════════════

▸ code
  └─ Check Event Type
▸ convertToFile
  └─ Create Settings File
▸ extractFromFile
  └─ Extract Installation Settings
▸ function
  └─ Process Settings
  └─ Format Task Data
▸ httpRequest
  └─ Register Placement
  └─ Get Task Data
▸ if
  └─ Is Installation?
  └─ Has Valid Settings?
  └─ If Installation finished
▸ merge
  └─ Merge Installation info
  └─ Merge request data with installation settings
▸ readWriteFile
  └─ Save Installation Settings
  └─ Read Installation Settings
▸ respondToWebhook
  └─ Installation Response
  └─ Task View Response
  └─ Error Response
  └─ Installation finished Response
▸ set
  └─ Extract Credentials
  └─ Set Settings Data
▸ webhook
  └─ Bitrix24 Handler

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1356_Code_Webhook_Import_Webhook.json

🔐 PASO 2: Configurar credenciales
   ✅ No se detectaron credenciales automáticamente
   ⚠️  Revisa manualmente cada nodo por si requiere configuración

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
