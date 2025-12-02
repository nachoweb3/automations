# Parse DMARC reports

## Archivo
1296_Datetime_Splitout_Process.json

## Descripción

## Nodos utilizados (20 total)

### n8n-nodes-base.compression
- Unzip File

### n8n-nodes-base.dateTime
- End date format
- Begin format date

### n8n-nodes-base.emailReadImap
- Email Trigger (IMAP)

### n8n-nodes-base.emailSend
- Send Error Notification Email

### n8n-nodes-base.extractFromFile
- Extract XML data

### n8n-nodes-base.if
- If multiple records to parse
- If issue with DKIM or SPF

### n8n-nodes-base.mySql
- Input into database

### n8n-nodes-base.renameKeys
- Rename Keys

### n8n-nodes-base.set
- Map fields for DB input and parse
- Rename column for consistency

### n8n-nodes-base.slack
- Slack Post Message On Channel

### n8n-nodes-base.splitOut
- Split Out For Separate Entries

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2
- Sticky Note3
- Sticky Note4

### n8n-nodes-base.xml
- Parse XML data to JSON

## Tags
- DevOps

## Configuración

1. Importa el archivo `1296_Datetime_Splitout_Process.json` en n8n
2. Revisa las credenciales necesarias:
   - Email Trigger (IMAP): Configura las credenciales necesarias
   - Input into database: Configura las credenciales necesarias
   - Slack Post Message On Channel: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n
