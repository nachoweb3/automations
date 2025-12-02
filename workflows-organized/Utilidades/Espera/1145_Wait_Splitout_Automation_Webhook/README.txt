╔══════════════════════════════════════════════════════════════════╗
║  Google Site Index - sitemap.xml example                         ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1145_Wait_Splitout_Automation_Webhook.json
📂 Categoría: Utilidades/Espera
🔢 ID: 1145

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

⏰ Ejecución programada (cron/schedule)
👆 Activación manual

📊 Total de nodos: 21
🏷️  Keywords: wait, splitout, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (21 total)
═════════════════════════════════════════════════════════════════

▸ httpRequest
  └─ Check status
  └─ URL Updated
  └─ Get sitemap.xml
  └─ Get content of each sitemap
▸ if
  └─ is new?
▸ manualTrigger
  └─ When clicking "Test workflow"
▸ scheduleTrigger
  └─ Schedule Trigger
▸ set
  └─ Force urlset.url to array
  └─ Assign mandatiry sitemap fields
▸ sort
  └─ Sort
▸ splitInBatches
  └─ Loop Over Items
▸ splitOut
  └─ Split Out
  └─ Get content-specific sitemaps
▸ stickyNote
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note
  └─ Sticky Note4
▸ wait
  └─ Wait
▸ xml
  └─ Convert sitemap to JSON
  └─ convert page data to JSON

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1145_Wait_Splitout_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Check status
      → Tipo: httpRequest
      → Credencial requerida: googleOAuth2Api
   2. URL Updated
      → Tipo: httpRequest
      → Credencial requerida: googleOAuth2Api

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
