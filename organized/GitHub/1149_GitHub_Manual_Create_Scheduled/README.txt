# 1149_GitHub_Manual_Create_Scheduled

## Archivo
1149_GitHub_Manual_Create_Scheduled.json

## Descripción

## Nodos utilizados (16 total)

### n8n-nodes-base.cron
- Daily @ 20:00

### n8n-nodes-base.function
- dataArray
- isDiffOrNew

### n8n-nodes-base.github
- GitHub
- GitHub Edit
- GitHub Create

### n8n-nodes-base.httpRequest
- N8N Workflows
- N8N Workflow Detail

### n8n-nodes-base.manualTrigger
- On clicking 'execute'

### n8n-nodes-base.merge
- Merge

### n8n-nodes-base.noOp
- same
- different
- new

### n8n-nodes-base.set
- Globals

### n8n-nodes-base.splitInBatches
- OneAtATime

### n8n-nodes-base.switch
- github_status

## Configuración

1. Importa el archivo `1149_GitHub_Manual_Create_Scheduled.json` en n8n
2. Revisa las credenciales necesarias:
   - GitHub: Configura las credenciales necesarias
   - GitHub Edit: Configura las credenciales necesarias
   - GitHub Create: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n
