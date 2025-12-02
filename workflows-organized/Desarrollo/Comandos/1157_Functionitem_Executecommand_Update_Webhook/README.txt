╔══════════════════════════════════════════════════════════════════╗
║  1157_Functionitem_Executecommand_Update_Webhook                 ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1157_Functionitem_Executecommand_Update_Webhook.json
📂 Categoría: Desarrollo/Comandos
🔢 ID: 1157

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 25
🏷️  Keywords: functionitem, executecommand, update, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (25 total)
═════════════════════════════════════════════════════════════════

▸ cron
  └─ Cron
▸ emailSend
  └─ NotifyBetterPrice
  └─ NotifyIncorrectPrice
▸ executeCommand
  └─ checkifexists
  └─ cleanData
▸ functionItem
  └─ getActualPrice
  └─ FunctionItem
  └─ changeME
  └─ initItem
  └─ initItem1
  └─ updateSavedItems
  └─ updateSavedItems1
▸ htmlExtract
  └─ HTML Extract
▸ httpRequest
  └─ fetchWeb
▸ if
  └─ IF1
  └─ IF3
  └─ IF
  └─ IF2
  └─ IF4
▸ moveBinaryData
  └─ Move Binary Data1
  └─ JsonToBinary
  └─ itemsToJSON
▸ readBinaryFile
  └─ savedItems
▸ writeBinaryFile
  └─ Write Binary File1
  └─ SaveToFile

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1157_Functionitem_Executecommand_Update_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. NotifyBetterPrice
      → Tipo: emailSend
      → Credencial requerida: smtp
   2. NotifyIncorrectPrice
      → Tipo: emailSend
      → Credencial requerida: smtp

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
