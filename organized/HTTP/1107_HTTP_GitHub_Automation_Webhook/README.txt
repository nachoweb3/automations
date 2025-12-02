# Dashboard

## Archivo
1107_HTTP_GitHub_Automation_Webhook.json

## Descripción

## Nodos utilizados (24 total)

### n8n-nodes-base.cron
- Cron

### n8n-nodes-base.function
- Massage npm Data
- Massage Product Hunt Data
- Massage Docker Data
- Massage GitHub Data

### n8n-nodes-base.github
- GitHub

### n8n-nodes-base.httpRequest
- Retrieve Docker Data
- Docker Pulls
- Docker Stars
- Retrieve npm Data
- GitHub Watchers
- GitHub Forks
- GitHub Open Issues 
- GitHub Stars
- npm Maintenance
- npm Popularity
- npm Quality
- npm Final
- Product Hunt Rating
- Product Hunt Reviews
- Product Hunt Votes
- Product Hunt Comments
- Retrieve Product Hunt Data

### n8n-nodes-base.set
- Dashboard Configuration

## Configuración

1. Importa el archivo `1107_HTTP_GitHub_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - GitHub: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n
