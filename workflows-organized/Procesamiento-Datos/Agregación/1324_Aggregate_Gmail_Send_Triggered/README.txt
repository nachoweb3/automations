╔══════════════════════════════════════════════════════════════════╗
║  1324_Aggregate_Gmail_Send_Triggered                             ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1324_Aggregate_Gmail_Send_Triggered.json
📂 Categoría: Procesamiento-Datos/Agregación
🔢 ID: 1324

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 19
🏷️  Keywords: aggregate, gmail, send, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (19 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainLlm
  └─ Assign labels for message
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat
▸ @n8n/n8n-nodes-langchain.outputParserStructured
  └─ JSON Parser
▸ aggregate
  └─ Aggregate label IDs
▸ gmail
  └─ Get message content
  └─ Get all labels
  └─ Add labels to message
▸ gmailTrigger
  └─ Gmail trigger
▸ merge
  └─ Merge corresponding labels
▸ set
  └─ Set label values
▸ splitOut
  └─ Split out assigned labels
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note6
  └─ Sticky Note7
  └─ Sticky Note8

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1324_Aggregate_Gmail_Send_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. Gmail trigger
      → Tipo: gmailTrigger
      → Credencial requerida: gmailOAuth2
   2. Get message content
      → Tipo: gmail
      → Credencial requerida: gmailOAuth2
   3. Get all labels
      → Tipo: gmail
      → Credencial requerida: gmailOAuth2
   4. Add labels to message
      → Tipo: gmail
      → Credencial requerida: gmailOAuth2
   5. OpenAI Chat
      → Tipo: @n8n/n8n-nodes-langchain.lmChatOpenAi
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
