╔══════════════════════════════════════════════════════════════════╗
║  Hacker News to Video Template - AlexK1919                       ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1121_Linkedin_Wait_Create_Webhook.json
📂 Categoría: Comunicación/Redes-Sociales
🔢 ID: 1121

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 48
🏷️  Keywords: linkedin, wait, create, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (48 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ Article Analysis
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model3
▸ @n8n/n8n-nodes-langchain.openAi
  └─ Image Analysis
  └─ Article Prep
▸ @n8n/n8n-nodes-langchain.outputParserStructured
  └─ Structured Output Parser
▸ @n8n/n8n-nodes-langchain.toolHttpRequest
  └─ HTTP Request1
▸ dropbox
  └─ Dropbox
▸ googleDrive
  └─ Google Drive
▸ hackerNews
  └─ Hacker News
▸ httpRequest
  └─ Leo - Improve Prompt
  └─ Leo - Get imageId
  └─ Runway - Create Video
  └─ Runway - Get Video
  └─ Get Image
  └─ Leo - Generate Image
  └─ Instagram
  └─ Leo - Improve Prompt2
  └─ Leo - Generate Image2
  └─ Leo - Get imageId2
  └─ Runway - Create Video2
  └─ Runway - Get Video2
  └─ Cre - Generate Video1
  └─ Cre - Get Video
▸ if
  └─ If Topic
▸ limit
  └─ Limit
▸ linkedIn
  └─ LinkedIn
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ microsoftOneDrive
  └─ Microsoft OneDrive
▸ s3
  └─ Upload to Minio
▸ set
  └─ News1
  └─ Prompt Settings1
▸ splitInBatches
  └─ Loop Over Items
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note6
  └─ Sticky Note7
  └─ Sticky Note5
  └─ Sticky Note8
▸ twitter
  └─ X
▸ wait
  └─ Wait2
  └─ Wait1
  └─ Wait3
  └─ Wait4
  └─ Wait6
▸ youTube
  └─ YouTube

═════════════════════════════════════════════════════════════════
 ETIQUETAS
═════════════════════════════════════════════════════════════════

🏷️  RunwayML
🏷️  Video
🏷️  OpenAI
🏷️  Creatomate
🏷️  Leonardo

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1121_Linkedin_Wait_Create_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. Image Analysis
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi
   2. Google Drive
      → Tipo: googleDrive
      → Credencial requerida: googleDriveOAuth2Api
   3. Leo - Improve Prompt2
      → Tipo: httpRequest
      → Credencial requerida: httpCustomAuth
   4. Runway - Create Video2
      → Tipo: httpRequest
      → Credencial requerida: httpCustomAuth
   5. Cre - Generate Video1
      → Tipo: httpRequest
      → Credencial requerida: httpCustomAuth
   6. Cre - Get Video
      → Tipo: httpRequest
      → Credencial requerida: httpCustomAuth
   7. Article Prep
      → Tipo: @n8n/n8n-nodes-langchain.openAi
      → Credencial requerida: openAiApi

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
