╔══════════════════════════════════════════════════════════════════╗
║  Check for valid Hubspot contact email                           ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1172_Slack_HubSpot_Send_Triggered.json
📂 Categoría: Comunicación/Chat
🔢 ID: 1172

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 5
🏷️  Keywords: slack, hubspot, send, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Crear bots de respuesta automática
2. Enviar notificaciones a canales/grupos
3. Integrar con otros servicios para notificaciones

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (5 total)
═════════════════════════════════════════════════════════════════

▸ hubspot
  └─ Get contact email address
▸ hubspotTrigger
  └─ When contact created
▸ if
  └─ If email is suspicious
▸ oneSimpleApi
  └─ validate the email
▸ slack
  └─ Send to Slack

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1172_Slack_HubSpot_Send_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. When contact created
      → Tipo: hubspotTrigger
      → Credencial requerida: hubspotDeveloperApi
   2. Get contact email address
      → Tipo: hubspot
      → Credencial requerida: hubspotApi
   3. validate the email
      → Tipo: oneSimpleApi
      → Credencial requerida: oneSimpleApi
   4. Send to Slack
      → Tipo: slack
      → Credencial requerida: slackApi

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
