╔══════════════════════════════════════════════════════════════════╗
║  Daily Language Learning                                         ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1138_Airtable_Vonage_Automation_Scheduled.json
📂 Categoría: Bases-de-Datos/NoSQL
🔢 ID: 1138

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 8
🏷️  Keywords: airtable, vonage, automation, scheduled

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Sincronizar datos entre sistemas
2. Automatizar backups y exportaciones
3. Procesar y transformar datos en lotes

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (8 total)
═════════════════════════════════════════════════════════════════

▸ airtable
  └─ Save today's words
▸ cron
  └─ Daily trigger
▸ function
  └─ Extract words
  └─ Craft message
▸ hackerNews
  └─ Get top 3 articles
▸ lingvaNex
  └─ Translate
▸ set
  └─ Filter data 
▸ vonage
  └─ Send SMS

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1138_Airtable_Vonage_Automation_Scheduled.json

🔐 PASO 2: Configurar credenciales
   1. Translate
      → Tipo: lingvaNex
      → Credencial requerida: lingvaNexApi
   2. Save today's words
      → Tipo: airtable
      → Credencial requerida: airtableApi
   3. Send SMS
      → Tipo: vonage
      → Credencial requerida: vonageApi

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
