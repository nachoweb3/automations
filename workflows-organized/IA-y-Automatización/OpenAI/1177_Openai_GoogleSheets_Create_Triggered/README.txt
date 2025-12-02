╔══════════════════════════════════════════════════════════════════╗
║  Qualify new leads in Google Sheets via OpenAI's GPT-4           ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1177_Openai_GoogleSheets_Create_Triggered.json
📂 Categoría: IA-y-Automatización/OpenAI
🔢 ID: 1177

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 9
🏷️  Keywords: openai, googlesheets, create, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Generar contenido automáticamente con IA
2. Procesar y analizar texto con modelos de lenguaje
3. Crear chatbots inteligentes

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (9 total)
═════════════════════════════════════════════════════════════════

▸ googleSheets
  └─ Update lead status
▸ googleSheetsTrigger
  └─ Check for new entries
▸ merge
  └─ Merge
▸ openAi
  └─ Qualify leads with GPT
▸ set
  └─ Extract JSON reply
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3

═════════════════════════════════════════════════════════════════
 ETIQUETAS
═════════════════════════════════════════════════════════════════

🏷️  Ted's Tech Talks

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1177_Openai_GoogleSheets_Create_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. Update lead status
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   2. Qualify leads with GPT
      → Tipo: openAi
      → Credencial requerida: openAiApi
   3. Check for new entries
      → Tipo: googleSheetsTrigger
      → Credencial requerida: googleSheetsTriggerOAuth2Api

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
