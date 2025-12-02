# 1307_Code_Converttofile_Send_Webhook

## Archivo
1307_Code_Converttofile_Send_Webhook.json

## Descripción

## Nodos utilizados (25 total)

### @n8n/n8n-nodes-langchain.openAi
- Analyze Email with ChatGPT

### n8n-nodes-base.code
- Format Headers
- Rename Screenshot
- Rename Email Body Screenshot

### n8n-nodes-base.convertToFile
- Convert Email Body to File

### n8n-nodes-base.gmailTrigger
- Gmail Trigger

### n8n-nodes-base.httpRequest
- Screenshot HTML
- Retrieve Screenshot
- Retrieve Headers of Email

### n8n-nodes-base.if
- Check if Malicious

### n8n-nodes-base.jira
- Create Potentially Malicious Ticket
- Create Potentially Benign Ticket
- Upload Screenshot of Email to Jira
- Upload Email Body to Jira

### n8n-nodes-base.microsoftOutlookTrigger
- Microsoft Outlook Trigger

### n8n-nodes-base.set
- Set Outlook Variables
- Set Gmail Variables
- Set Jira ID
- Set Email Variables

### n8n-nodes-base.stickyNote
- Sticky Note2
- Sticky Note
- Sticky Note1
- Sticky Note3
- Sticky Note4
- Sticky Note5

## Configuración

1. Importa el archivo `1307_Code_Converttofile_Send_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Gmail Trigger: Configura las credenciales necesarias
   - Microsoft Outlook Trigger: Configura las credenciales necesarias
   - Screenshot HTML: Configura las credenciales necesarias
   - Retrieve Screenshot: Configura las credenciales necesarias
   - Retrieve Headers of Email: Configura las credenciales necesarias
   - Analyze Email with ChatGPT: Configura las credenciales necesarias
   - Create Potentially Malicious Ticket: Configura las credenciales necesarias
   - Create Potentially Benign Ticket: Configura las credenciales necesarias
   - Upload Screenshot of Email to Jira: Configura las credenciales necesarias
   - Upload Email Body to Jira: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n
