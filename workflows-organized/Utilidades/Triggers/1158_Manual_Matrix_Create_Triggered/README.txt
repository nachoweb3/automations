╔══════════════════════════════════════════════════════════════════╗
║  Create a room, invite members from a different room, and send a message in the room we created  ║
╚══════════════════════════════════════════════════════════════════╝

📁 Archivo: 1158_Manual_Matrix_Create_Triggered.json
📂 Categoría: Utilidades/Triggers
🔢 ID: 1158

═════════════════════════════════════════════════════════════════
 DESCRIPCIÓN
═════════════════════════════════════════════════════════════════

👆 Activación manual

📊 Total de nodos: 8
🏷️  Keywords: manual, matrix, create, triggered

═════════════════════════════════════════════════════════════════
 CASOS DE USO
═════════════════════════════════════════════════════════════════

1. Automatizar tareas repetitivas
2. Integrar múltiples servicios en un flujo único
3. Procesar datos de forma automatizada

═════════════════════════════════════════════════════════════════
 NODOS UTILIZADOS (8 total)
═════════════════════════════════════════════════════════════════

▸ if
  └─ IF
▸ manualTrigger
  └─ On clicking 'execute'
▸ matrix
  └─ Matrix
  └─ Matrix3
  └─ Matrix4
  └─ Matrix1
  └─ Matrix2
▸ noOp
  └─ NoOp

═════════════════════════════════════════════════════════════════
 CONFIGURACIÓN PASO A PASO
═════════════════════════════════════════════════════════════════

📥 PASO 1: Importar el workflow
   1. Abre n8n en http://localhost:5678
   2. Click en menú (☰) → "Import from File"
   3. Selecciona: 1158_Manual_Matrix_Create_Triggered.json

🔐 PASO 2: Configurar credenciales
   1. Matrix
      → Tipo: matrix
      → Credencial requerida: matrixApi
   2. Matrix3
      → Tipo: matrix
      → Credencial requerida: matrixApi
   3. Matrix4
      → Tipo: matrix
      → Credencial requerida: matrixApi
   4. Matrix1
      → Tipo: matrix
      → Credencial requerida: matrixApi
   5. Matrix2
      → Tipo: matrix
      → Credencial requerida: matrixApi

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
