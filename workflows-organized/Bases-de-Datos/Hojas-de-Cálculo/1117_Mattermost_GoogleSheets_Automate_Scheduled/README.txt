╔══════════════════════════════════════════════════════════════════╗
║  1117_Mattermost_GoogleSheets_Automate_Scheduled                 ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1117_Mattermost_GoogleSheets_Automate_Scheduled.json
📂 Categoría: Bases-de-Datos/Hojas-de-Cálculo
🔢 ID: 1117

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 3
🏷️  Keywords: mattermost, googlesheets, automate, scheduled

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Sincronizar datos entre sistemas
2. Automatizar backups y exportaciones
3. Procesar y transformar datos en lotes

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (3 total)
═════════════════════════════════════════════════════════════════

▸ cron
  └─ Cron
▸ googleSheets
  └─ Google Sheets
▸ mattermost
  └─ Mattermost

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1117_Mattermost_GoogleSheets_Automate_Scheduled.json

🔐 PASO 2: Configurar credenciales
   1. Google Sheets
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   2. Mattermost
      → Tipo: mattermost
      → Credencial requerida: mattermostApi

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
