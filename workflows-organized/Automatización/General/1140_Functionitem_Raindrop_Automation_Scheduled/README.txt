╔══════════════════════════════════════════════════════════════════╗
║  YouTube to Raindrop                                             ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1140_Functionitem_Raindrop_Automation_Scheduled.json
📂 Categoría: Automatización/General
🔢 ID: 1140

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 6
🏷️  Keywords: functionitem, raindrop, automation, scheduled

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (6 total)
═════════════════════════════════════════════════════════════════

▸ cron
  └─ Every 30 mins
▸ function
  └─ Filter new items
▸ functionItem
  └─ Flatten JSON
▸ manualTrigger
  └─ On clicking 'execute'
▸ raindrop
  └─ Raindrop Bookmark
▸ youTube
  └─ YouTube

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1140_Functionitem_Raindrop_Automation_Scheduled.json

🔐 PASO 2: Configurar credenciales
   1. YouTube
      → Tipo: youTube
      → Credencial requerida: youTubeOAuth2Api
   2. Raindrop Bookmark
      → Tipo: raindrop
      → Credencial requerida: raindropOAuth2Api

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
