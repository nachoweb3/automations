╔══════════════════════════════════════════════════════════════════╗
║  1336_Strapi_Webhook_Automate_Webhook                            ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1336_Strapi_Webhook_Automate_Webhook.json
📂 Categoría: Web-y-APIs/Webhooks
🔢 ID: 1336

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

🌐 Activado por webhook (API)

📊 Total de nodos: 14
🏷️  Keywords: strapi, webhook, automate, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (14 total)
═════════════════════════════════════════════════════════════════

▸ googleCloudNaturalLanguage
  └─ Analyze Form Submission
  └─ Analyze Tweet
▸ if
  └─ Is Retweet or Old?
  └─ Positive Form Sentiment?
  └─ Positive Tweet Sentiment?
▸ interval
  └─ Every 30 Minutes
▸ merge
  └─ Merge Form Sentiment with Source
  └─ Merge Tweet Sentiment with Source
▸ set
  └─ Simplify Result
  └─ Simplify Webhook Result
▸ strapi
  └─ Store in Strapi
  └─ Store Form Submission in Strapi
▸ twitter
  └─ Search Tweets
▸ webhook
  └─ Webhook

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1336_Strapi_Webhook_Automate_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Store in Strapi
      → Tipo: strapi
      → Credencial requerida: strapiApi
   2. Search Tweets
      → Tipo: twitter
      → Credencial requerida: twitterOAuth1Api
   3. Analyze Form Submission
      → Tipo: googleCloudNaturalLanguage
      → Credencial requerida: googleCloudNaturalLanguageOAuth2Api
   4. Analyze Tweet
      → Tipo: googleCloudNaturalLanguage
      → Credencial requerida: googleCloudNaturalLanguageOAuth2Api
   5. Store Form Submission in Strapi
      → Tipo: strapi
      → Credencial requerida: strapiApi

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
