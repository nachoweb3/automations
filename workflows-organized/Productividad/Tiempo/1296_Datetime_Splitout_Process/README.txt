╔══════════════════════════════════════════════════════════════════╗
║  Parse DMARC reports                                             ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1296_Datetime_Splitout_Process.json
📂 Categoría: Productividad/Tiempo
🔢 ID: 1296

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 20
🏷️  Keywords: datetime, splitout, process

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (20 total)
═════════════════════════════════════════════════════════════════

▸ compression
  └─ Unzip File
▸ dateTime
  └─ End date format
  └─ Begin format date
▸ emailReadImap
  └─ Email Trigger (IMAP)
▸ emailSend
  └─ Send Error Notification Email
▸ extractFromFile
  └─ Extract XML data
▸ if
  └─ If multiple records to parse
  └─ If issue with DKIM or SPF
▸ mySql
  └─ Input into database
▸ renameKeys
  └─ Rename Keys
▸ set
  └─ Map fields for DB input and parse
  └─ Rename column for consistency
▸ slack
  └─ Slack Post Message On Channel
▸ splitOut
  └─ Split Out For Separate Entries
▸ stickyNote
  └─ Sticky Note
  └─ Sticky Note1
  └─ Sticky Note2
  └─ Sticky Note3
  └─ Sticky Note4
▸ xml
  └─ Parse XML data to JSON

═════════════════════════════════════════════════════════════════
 ETIQUETAS
═════════════════════════════════════════════════════════════════

🏷️  DevOps

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1296_Datetime_Splitout_Process.json

🔐 PASO 2: Configurar credenciales
   1. Email Trigger (IMAP)
      → Tipo: emailReadImap
      → Credencial requerida: imap
   2. Input into database
      → Tipo: mySql
      → Credencial requerida: mySql
   3. Slack Post Message On Channel
      → Tipo: slack
      → Credencial requerida: slackOAuth2Api

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
