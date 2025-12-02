╔══════════════════════════════════════════════════════════════════╗
║  Code Review workflow                                            ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1292_Code_GitHub_Automate_Webhook.json
📂 Categoría: Desarrollo/Scripts
🔢 ID: 1292

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 14
🏷️  Keywords: code, github, automate, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (14 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ Code Review Agent
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
▸ code
  └─ Create target Prompt from PR Diffs
▸ github
  └─ GitHub Robot
  └─ Add Label to PR
▸ githubTrigger
  └─ PR Trigger
▸ googleSheetsTool
  └─ Code Best Practices
▸ httpRequest
  └─ Get file's Diffs from PR
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1292_Code_GitHub_Automate_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. OpenAI Chat Model
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   2. PR Trigger
      → Tipo: githubTrigger
      → Credencial requerida: githubOAuth2Api
   3. GitHub Robot
      → Tipo: github
      → Credencial requerida: githubApi
   4. Add Label to PR
      → Tipo: github
      → Credencial requerida: githubOAuth2Api
   5. Code Best Practices
      → Tipo: googleSheetsTool
      → Credencial requerida: googleSheetsOAuth2Api

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
