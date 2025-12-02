╔══════════════════════════════════════════════════════════════════╗
║  Extract expenses from emails and add to Google Sheet            ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1188_GoogleSheets_Emailreadimap_Create.json
📂 Categoría: Bases-de-Datos/Hojas-de-Cálculo
🔢 ID: 1188

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 6
🏷️  Keywords: googlesheets, emailreadimap, create

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Sincronizar datos entre sistemas
2. Automatizar backups y exportaciones
3. Procesar y transformar datos en lotes

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (6 total)
═════════════════════════════════════════════════════════════════

▸ emailReadImap
  └─ Check for new emails
▸ googleSheets
  └─ Add to Google Sheet
▸ if
  └─ Check subject
▸ mindee
  └─ Read Receipts
▸ set
  └─ Setup Variables
  └─ Set column data

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1188_GoogleSheets_Emailreadimap_Create.json

🔐 PASO 2: Configurar credenciales
   1. Check for new emails
      → Tipo: emailReadImap
      → Credencial requerida: imap
   2. Read Receipts
      → Tipo: mindee
      → Credencial requerida: mindeeReceiptApi
   3. Add to Google Sheet
      → Tipo: googleSheets
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
