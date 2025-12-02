╔══════════════════════════════════════════════════════════════════╗
║  1116_GoogleCalendar_GoogleSheets_Create_Triggered               ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1116_GoogleCalendar_GoogleSheets_Create_Triggered.json
📂 Categoría: Bases-de-Datos/Hojas-de-Cálculo
🔢 ID: 1116

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 10
🏷️  Keywords: googlecalendar, googlesheets, create, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Sincronizar datos entre sistemas
2. Automatizar backups y exportaciones
3. Procesar y transformar datos en lotes

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (10 total)
═════════════════════════════════════════════════════════════════

▸ function
  └─ Array to Rows
▸ gmail
  └─ Welcome Email
▸ googleCalendar
  └─ Add to Event
▸ googleSheets
  └─ Add to Sheets
  └─ Get Session Details
▸ mattermost
  └─ Create Account
  └─ Add to team
  └─ Add to channels
▸ merge
  └─ Merge Data
▸ typeformTrigger
  └─ Attendee Registrations

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1116_GoogleCalendar_GoogleSheets_Create_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. Attendee Registrations
      → Tipo: typeformTrigger
      → Credencial requerida: typeformApi
   2. Add to Sheets
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   3. Create Account
      → Tipo: mattermost
      → Credencial requerida: mattermostApi
   4. Add to team
      → Tipo: mattermost
      → Credencial requerida: mattermostApi
   5. Get Session Details
      → Tipo: googleSheets
      → Credencial requerida: googleSheetsOAuth2Api
   6. Add to channels
      → Tipo: mattermost
      → Credencial requerida: mattermostApi
   7. Add to Event
      → Tipo: googleCalendar
      → Credencial requerida: googleCalendarOAuth2Api
   8. Welcome Email
      → Tipo: gmail
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
