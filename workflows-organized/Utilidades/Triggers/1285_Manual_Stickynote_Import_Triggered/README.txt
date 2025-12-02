╔══════════════════════════════════════════════════════════════════╗
║  LangChain - Example - Workflow Retriever                        ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1285_Manual_Stickynote_Import_Triggered.json
📂 Categoría: Utilidades/Triggers
🔢 ID: 1285

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 7
🏷️  Keywords: manual, stickynote, import, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (7 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.chainRetrievalQa
  └─ Retrieval QA Chain2
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ OpenAI Chat Model
▸ @n8n/n8n-nodes-langchain.retrieverWorkflow
  └─ Workflow Retriever
▸ manualTrigger
  └─ When clicking "Execute Workflow"
▸ set
  └─ Example Prompt
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1

═════════════════════════════════════════════════════════════════
 ETIQUETAS
═════════════════════════════════════════════════════════════════

🏷️  LangChain - Example

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1285_Manual_Stickynote_Import_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. OpenAI Chat Model
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
