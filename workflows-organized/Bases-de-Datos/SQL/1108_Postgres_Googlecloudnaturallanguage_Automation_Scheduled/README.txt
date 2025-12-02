╔══════════════════════════════════════════════════════════════════╗
║  ETL pipeline                                                    ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1108_Postgres_Googlecloudnaturallanguage_Automation_Scheduled.json
📂 Categoría: Bases-de-Datos/SQL
🔢 ID: 1108

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 9
🏷️  Keywords: postgres, googlecloudnaturallanguage, automation, scheduled

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Sincronizar datos entre sistemas
2. Automatizar backups y exportaciones
3. Procesar y transformar datos en lotes

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (9 total)
═════════════════════════════════════════════════════════════════

▸ cron
  └─ Cron
▸ googleCloudNaturalLanguage
  └─ Google Cloud Natural Language
▸ if
  └─ IF
▸ mongoDb
  └─ MongoDB
▸ noOp
  └─ NoOp
▸ postgres
  └─ Postgres
▸ set
  └─ Set
▸ slack
  └─ Slack
▸ twitter
  └─ Twitter

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1108_Postgres_Googlecloudnaturallanguage_Automation_Scheduled.json

🔐 PASO 2: Configurar credenciales
   1. Twitter
      → Tipo: twitter
      → Credencial requerida: twitterOAuth1Api
   2. Postgres
      → Tipo: postgres
      → Credencial requerida: postgres
   3. MongoDB
      → Tipo: mongoDb
      → Credencial requerida: mongoDb
   4. Slack
      → Tipo: slack
      → Credencial requerida: slackApi
   5. Google Cloud Natural Language
      → Tipo: googleCloudNaturalLanguage
      → Credencial requerida: googleCloudNaturalLanguageOAuth2Api

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
