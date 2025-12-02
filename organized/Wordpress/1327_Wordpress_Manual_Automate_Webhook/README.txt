# Automate Content Generator for WordPress with DeepSeek R1

## Archivo
1327_Wordpress_Manual_Automate_Webhook.json

## Descripción

## Nodos utilizados (17 total)

### @n8n/n8n-nodes-langchain.openAi
- Generate article with DeepSeek
- Generate title with DeepSeek
- Generate Image with DALL-E

### n8n-nodes-base.googleSheets
- Get Ideas
- Update Sheet

### n8n-nodes-base.httpRequest
- Upload image
- Set Image

### n8n-nodes-base.manualTrigger
- When clicking ‘Test workflow’

### n8n-nodes-base.set
- Set your prompt

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2
- Sticky Note3
- Sticky Note4
- Sticky Note5
- Sticky Note6

### n8n-nodes-base.wordpress
- Create post on Wordpress

## Configuración

1. Importa el archivo `1327_Wordpress_Manual_Automate_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Get Ideas: Configura las credenciales necesarias
   - Create post on Wordpress: Configura las credenciales necesarias
   - Upload image: Configura las credenciales necesarias
   - Set Image: Configura las credenciales necesarias
   - Update Sheet: Configura las credenciales necesarias
   - Generate article with DeepSeek: Configura las credenciales necesarias
   - Generate title with DeepSeek: Configura las credenciales necesarias
   - Generate Image with DALL-E: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n
