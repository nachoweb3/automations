╔══════════════════════════════════════════════════════════════════╗
║  Receive_and_analyze_emails_with_rules_in_Sublime_Security       ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1161_Code_Slack_Send_Webhook.json
📂 Categoría: Desarrollo/Scripts
🔢 ID: 1161

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 13
🏷️  Keywords: code, slack, send, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (13 total)
═════════════════════════════════════════════════════════════════

▸ code
  └─ Split to matched and unmatched
▸ emailReadImap
  └─ Email Trigger (IMAP)
▸ httpRequest
  └─ Analyze email with Sublime Security
▸ if
  └─ IF email has attachment
▸ manualTrigger
  └─ When clicking "Execute Workflow"
▸ moveBinaryData
  └─ Move Binary Data
▸ set
  └─ Format the message
▸ slack
  └─ Slack
  └─ Notify about missing attachment
▸ stickyNote
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4

═════════════════════════════════════════════════════════════════
 ETIQUETAS
═════════════════════════════════════════════════════════════════

🏷️  🛠️ In progress
🏷️  Secops

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1161_Code_Slack_Send_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Email Trigger (IMAP)
      → Tipo: emailReadImap
      → Credencial requerida: imap
   2. Slack
      → Tipo: slack
      → Credencial requerida: slackApi
   3. Notify about missing attachment
      → Tipo: slack
      → Credencial requerida: slackApi
   4. Analyze email with Sublime Security
      → Tipo: httpRequest
      → Credencial requerida: httpHeaderAuth

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
