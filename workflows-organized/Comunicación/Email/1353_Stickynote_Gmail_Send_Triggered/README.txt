╔══════════════════════════════════════════════════════════════════╗
║  1353_Stickynote_Gmail_Send_Triggered                            ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1353_Stickynote_Gmail_Send_Triggered.json
📂 Categoría: Comunicación/Email
🔢 ID: 1353

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 13
🏷️  Keywords: stickynote, gmail, send, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar respuestas a emails basadas en contenido
2. Clasificar y archivar emails automáticamente
3. Enviar notificaciones por email ante eventos específicos

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (13 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ Gmail labelling agent
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model1
▸ @n8n/n8n-nodes-langchain.memoryBufferWindow
  └─ Window Buffer Memory
▸ gmailTool
  └─ Gmail - read labels
  └─ Gmail - get message
  └─ Gmail - add label to message
  └─ Gmail - create label
▸ gmailTrigger
  └─ Gmail Trigger
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
▸ wait
  └─ Wait

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1353_Stickynote_Gmail_Send_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. Gmail Trigger
      → Tipo: gmailTrigger
      → Credencial requerida: gmailOAuth2
   2. OpenAI Chat Model1
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
      → Credencial requerida: openAiApi
   3. Gmail - read labels
      → Tipo: gmailTool
      → Credencial requerida: gmailOAuth2
   4. Gmail - get message
      → Tipo: gmailTool
      → Credencial requerida: gmailOAuth2
   5. Gmail - add label to message
      → Tipo: gmailTool
      → Credencial requerida: gmailOAuth2
   6. Gmail - create label
      → Tipo: gmailTool
      → Credencial requerida: gmailOAuth2

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
