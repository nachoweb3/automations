# Automating Betting Data Retrieval with TheOddsAPI and Airtable

## Archivo
1111_HTTP_Schedule_Automation_Webhook.json

## Descripción

## Nodos utilizados (10 total)

### n8n-nodes-base.airtable
- Create Records Of Upcoming Events For The Day
- Update Table Records With Scores And Results For Sport Events

### n8n-nodes-base.httpRequest
- Retrieve Data Of Upcoming Sport Events For The Day
- Retrieve Sport Results Data At The End Of The Day

### n8n-nodes-base.merge
- Combine Sport Results With Upcoming Events Records By Matching ID

### n8n-nodes-base.scheduleTrigger
- Morning Trigger To Pull Data At 7:00am
- Evening Trigger To Pull Data At 11:00pm

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2

## Configuración

1. Importa el archivo `1111_HTTP_Schedule_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Retrieve Data Of Upcoming Sport Events For The Day: Configura las credenciales necesarias
   - Create Records Of Upcoming Events For The Day: Configura las credenciales necesarias
   - Retrieve Sport Results Data At The End Of The Day: Configura las credenciales necesarias
   - Update Table Records With Scores And Results For Sport Events: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n
