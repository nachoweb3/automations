# Coffee Bot (Mattermost)

## Archivo
1137_Mattermost_Cron_Automate_Scheduled.json

## Descripción

## Nodos utilizados (6 total)

### n8n-nodes-base.cron
- Weekly trigger on monday

### n8n-nodes-base.function
- Divide into groups

### n8n-nodes-base.googleCalendar
- Send calendar invites

### n8n-nodes-base.mattermost
- Greetings
- Announce groups
- Employees in coffee chat channel

## Configuración

1. Importa el archivo `1137_Mattermost_Cron_Automate_Scheduled.json` en n8n
2. Revisa las credenciales necesarias:
   - Greetings: Configura las credenciales necesarias
   - Announce groups: Configura las credenciales necesarias
   - Employees in coffee chat channel: Configura las credenciales necesarias
   - Send calendar invites: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n
