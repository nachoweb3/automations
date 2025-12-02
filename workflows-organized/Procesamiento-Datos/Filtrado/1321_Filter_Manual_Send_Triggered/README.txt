╔══════════════════════════════════════════════════════════════════╗
║  1321_Filter_Manual_Send_Triggered                               ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1321_Filter_Manual_Send_Triggered.json
📂 Categoría: Procesamiento-Datos/Filtrado
🔢 ID: 1321

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 36
🏷️  Keywords: filter, manual, send, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (36 total)
═════════════════════════════════════════════════════════════════

▸ @n8n/n8n-nodes-langchain.agent
  └─ AI Agent1
▸ @n8n/n8n-nodes-langchain.lmChatOllama
  └─ Ollama Chat Model1
▸ filter
  └─ Filter1
▸ if
  └─ If1
▸ manualTrigger
  └─ When clicking ‘Test workflow’
▸ markdown
  └─ Markdown1
▸ merge
  └─ Merge1
▸ microsoftOutlook
  └─ Microsoft Outlook10
  └─ Microsoft Outlook12
  └─ Microsoft Outlook13
  └─ Microsoft Outlook15
  └─ Microsoft Outlook16
  └─ Microsoft Outlook17
  └─ Microsoft Outlook18
  └─ Microsoft Outlook19
  └─ Microsoft Outlook20
  └─ Microsoft Outlook21
  └─ Microsoft Outlook22
  └─ Microsoft Outlook23
  └─ Microsoft Outlook Move Message1
▸ set
  └─ varEmal1
  └─ Catch Errors1
  └─ varJSON1
  └─ varID & Category1
▸ splitInBatches
  └─ Loop Over Items1
▸ stickyNote
  └─ Sticky Note8
  └─ Sticky Note9
  └─ Sticky Note10
  └─ Sticky Note11
  └─ Sticky Note12
  └─ Sticky Note13
  └─ Sticky Note14
  └─ Sticky Note15
  └─ Sticky Note16
  └─ Sticky Note17
▸ switch
  └─ Switch1

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1321_Filter_Manual_Send_Triggered.json

🔐 PASO 2: Configurar credenciales
   ✅ No se detectaron credenciales automáticamente
   ⚠️  Revisa manualmente cada nodo por si requiere configuración

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
