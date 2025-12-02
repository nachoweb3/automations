# LinkedIn Leads Scraping & Enrichment (Main)

## Archivo
1146_Splitout_Code_Automation_Webhook.json

## Descripción

## Nodos utilizados (66 total)

### @n8n/n8n-nodes-langchain.openAi
- OpenAI1
- Posts AI Summarizer
- AI Profile Summarizer
- AI Profile Summarizer1
- Posts AI Summarizer1

### n8n-nodes-base.code
- Clean Profile Data
- Clean Posts Data
- Stringify Profile Data1
- Stringify Posts Data
- Clean Profile Data1
- Stringify Data2
- Stringify Data3
- Clean Profile Data2

### n8n-nodes-base.formTrigger
- On form submission

### n8n-nodes-base.googleSheets
- Add Leads to Google Sheet
- Add Linkedin Username
- Get Pending Username Row
- Add Email Address
- Mark Invalid Email
- Get Pending Email Statuses
- Get Pending About and Posts Rows
- Get Pending About and Posts Rows1
- get invalid email rows
- update_to_pending
- get_failed_profile_summary_rows
- update_to_pending1
- get_failed_posts_summary_rows1
- Update Profile Summary
- Update Posts Summary
- Get Completely Enriched Profiles
- update_to_unscraped
- Append to Enriched Leads Database
- update status to failed
- Google Sheets
- Get Pending About and Posts Rows2
- Update Profile Summary1
- update status to failed1

### n8n-nodes-base.googleSheetsTrigger
- Google Sheets Trigger
- Google Sheets Trigger2
- Google Sheets Trigger3
- Google Sheets Trigger4
- Google Sheets Trigger5
- Google Sheets Trigger6

### n8n-nodes-base.httpRequest
- Get Email from Apollo
- Confirm Email Validity
- Get Profile Posts
- Get About Profile
- Generate Leads with Apollo.io
- Get About Profile2

### n8n-nodes-base.if
- If email is valid

### n8n-nodes-base.merge
- Merge

### n8n-nodes-base.scheduleTrigger
- Schedule Trigger
- Schedule Trigger2
- Schedule Trigger3

### n8n-nodes-base.set
- Clean Data

### n8n-nodes-base.splitOut
- Split Out

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2
- Sticky Note3
- Sticky Note4
- Sticky Note5
- Sticky Note6
- Sticky Note8
- Sticky Note9
- Sticky Note7

## Configuración

1. Importa el archivo `1146_Splitout_Code_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Google Sheets Trigger: Configura las credenciales necesarias
   - OpenAI1: Configura las credenciales necesarias
   - Google Sheets Trigger2: Configura las credenciales necesarias
   - Add Leads to Google Sheet: Configura las credenciales necesarias
   - Add Linkedin Username: Configura las credenciales necesarias
   - Get Pending Username Row: Configura las credenciales necesarias
   - Add Email Address: Configura las credenciales necesarias
   - Mark Invalid Email: Configura las credenciales necesarias
   - Get Pending Email Statuses: Configura las credenciales necesarias
   - Google Sheets Trigger3: Configura las credenciales necesarias
   - Get Pending About and Posts Rows: Configura las credenciales necesarias
   - Google Sheets Trigger4: Configura las credenciales necesarias
   - Get Pending About and Posts Rows1: Configura las credenciales necesarias
   - Google Sheets Trigger5: Configura las credenciales necesarias
   - get invalid email rows: Configura las credenciales necesarias
   - update_to_pending: Configura las credenciales necesarias
   - get_failed_profile_summary_rows: Configura las credenciales necesarias
   - update_to_pending1: Configura las credenciales necesarias
   - get_failed_posts_summary_rows1: Configura las credenciales necesarias
   - Posts AI Summarizer: Configura las credenciales necesarias
   - AI Profile Summarizer: Configura las credenciales necesarias
   - Update Profile Summary: Configura las credenciales necesarias
   - Update Posts Summary: Configura las credenciales necesarias
   - Get Completely Enriched Profiles: Configura las credenciales necesarias
   - update_to_unscraped: Configura las credenciales necesarias
   - Append to Enriched Leads Database: Configura las credenciales necesarias
   - update status to failed: Configura las credenciales necesarias
   - Google Sheets: Configura las credenciales necesarias
   - Google Sheets Trigger6: Configura las credenciales necesarias
   - Get Pending About and Posts Rows2: Configura las credenciales necesarias
   - AI Profile Summarizer1: Configura las credenciales necesarias
   - Update Profile Summary1: Configura las credenciales necesarias
   - Posts AI Summarizer1: Configura las credenciales necesarias
   - update status to failed1: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n
