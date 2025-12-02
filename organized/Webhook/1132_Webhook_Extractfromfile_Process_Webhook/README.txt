# Convert Squarespace Profiles to Shopify Customers in Google Sheets

## Archivo
1132_Webhook_Extractfromfile_Process_Webhook.json

## Descripción

## Nodos utilizados (8 total)

### n8n-nodes-base.extractFromFile
- Extract items from webhook submission

### n8n-nodes-base.googleSheets
- Shopify Customers
- Read Squarespace profiles
- Append Squarespace profiles

### n8n-nodes-base.manualTrigger
- Manual trigger

### n8n-nodes-base.splitInBatches
- Loop Over Items

### n8n-nodes-base.stickyNote
- Sticky Note

### n8n-nodes-base.webhook
- Webhook

## Configuración

1. Importa el archivo `1132_Webhook_Extractfromfile_Process_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Shopify Customers: Configura las credenciales necesarias
   - Read Squarespace profiles: Configura las credenciales necesarias
   - Append Squarespace profiles: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n
