╔══════════════════════════════════════════════════════════════════╗
║  Send an SMS to a number whenever you go out                     ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1198_Twilio_Pushcut_Send_Triggered.json
📂 Categoría: Comunicación/Email
🔢 ID: 1198

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 2
🏷️  Keywords: twilio, pushcut, send, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar respuestas a emails basadas en contenido
2. Clasificar y archivar emails automáticamente
3. Enviar notificaciones por email ante eventos específicos

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (2 total)
═════════════════════════════════════════════════════════════════

▸ pushcutTrigger
  └─ Pushcut Trigger
▸ twilio
  └─ Twilio

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1198_Twilio_Pushcut_Send_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. Pushcut Trigger
      → Tipo: pushcutTrigger
      → Credencial requerida: pushcutApi
   2. Twilio
      → Tipo: twilio
      → Credencial requerida: twilioApi

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
