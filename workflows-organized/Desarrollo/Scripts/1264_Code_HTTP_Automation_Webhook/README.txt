╔══════════════════════════════════════════════════════════════════╗
║  Complete Youtube                                                ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1264_Code_HTTP_Automation_Webhook.json
📂 Categoría: Desarrollo/Scripts
🔢 ID: 1264

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 15
🏷️  Keywords: code, http, automation, webhook

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (15 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Agent
▸ @n8n/n8n-nodes-langchain.chatTrigger
  └─ chat_message_received
▸ @n8n/n8n-nodes-langchain.lmChatOpenAi
  └─ openai_llm
▸ @n8n/n8n-nodes-langchain.memoryBufferWindow
  └─ window_buffer_memory
▸ @n8n/n8n-nodes-langchain.toolWorkflow
  └─ youtube_search
▸ code
  └─ save_data_to_memory1
  └─ retrieve_data_from_memory1
▸ httpRequest
  └─ find_video_data1
▸ if
  └─ if_longer_than_3_
▸ set
  └─ response1
  └─ group_data1
▸ splitInBatches
  └─ loop_over_items1
▸ stickyNote
  └─ Sticky Note1
  └─ Sticky Note2
▸ youTube
  └─ get_videos1

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1264_Code_HTTP_Automation_Webhook.json

🔐 PASO 2: Configurar credenciales
   1. get_videos1
      → Tipo: youTube
      → Credencial requerida: youTubeOAuth2Api

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
