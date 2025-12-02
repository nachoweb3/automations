╔══════════════════════════════════════════════════════════════════╗
║  1209_Raindrop_Automate                                          ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1209_Raindrop_Automate.json
📂 Categoría: Automatización/General
🔢 ID: 1209

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════


📊 Total de nodos: 4
🏷️  Keywords: raindrop, automate

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (4 total)
═════════════════════════════════════════════════════════════════

▸ raindrop
  └─ Raindrop
  └─ Raindrop1
  └─ Raindrop2
  └─ Raindrop3

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1209_Raindrop_Automate.json

🔐 PASO 2: Configurar credenciales
   1. Raindrop
      → Tipo: raindrop
      → Credencial requerida: raindropOAuth2Api
   2. Raindrop1
      → Tipo: raindrop
      → Credencial requerida: raindropOAuth2Api
   3. Raindrop2
      → Tipo: raindrop
      → Credencial requerida: raindropOAuth2Api
   4. Raindrop3
      → Tipo: raindrop
      → Credencial requerida: raindropOAuth2Api

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
