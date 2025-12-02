╔══════════════════════════════════════════════════════════════════╗
║  1256_Openai_Form_Automation_Triggered                           ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1256_Openai_Form_Automation_Triggered.json
📂 Categoría: IA-y-Automatización/OpenAI
🔢 ID: 1256

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 9
🏷️  Keywords: openai, form, automation, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Generar contenido automáticamente con IA
2. Procesar y analizar texto con modelos de lenguaje
3. Crear chatbots inteligentes

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (9 total)
═════════════════════════════════════════════════════════════════

▸ formTrigger
  └─ Submit form with customer feedback
▸ googleSheets
  └─ Add customer feedback to Google Sheets
▸ merge
  └─ Merge sentiment with form content
▸ openAi
  └─ Classify feedback with OpenAI
▸ stickyNote
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
  └─ Sticky Note5
  └─ Sticky Note6

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1256_Openai_Form_Automation_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. Add customer feedback to Google Sheets
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   2. Classify feedback with OpenAI
      → Tipo: openAi
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
