# YouTube to X Post- AlexK1919

## Archivo
1345_Schedule_Discord_Automation_Scheduled.json

## Descripción

## Nodos utilizados (28 total)

### @n8n/n8n-nodes-langchain.openAi
- Generate X Post
- Rewrite X Post to 220 Characters

### @n8n/n8n-nodes-langchain.toolCalculator
- Calculator
- Calculator2

### @n8n/n8n-nodes-langchain.toolWikipedia
- Wikipedia
- Wikipedia1

### n8n-nodes-base.discord
- Discord

### n8n-nodes-base.gmail
- Gmail

### n8n-nodes-base.googleSheets
- GS - Add Tweet
- GS - Update Tweet

### n8n-nodes-base.if
- Verify character limit constraints
- If Array is empty?

### n8n-nodes-base.manualTrigger
- When clicking "Test workflow"

### n8n-nodes-base.removeDuplicates
- Remove Duplicates

### n8n-nodes-base.scheduleTrigger
- Check Every 2 Hours

### n8n-nodes-base.set
- Set Fields
- Set Final Fields

### n8n-nodes-base.slack
- Slack

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note4
- Sticky Note1
- Sticky Note3
- Sticky Note6
- Sticky Note7
- Sticky Note8
- Sticky Note9

### n8n-nodes-base.twitter
- Post to X

### n8n-nodes-base.youTube
- Fetch Latest Videos

## Tags
- OpenAI
- YouTube
- X

## Configuración

1. Importa el archivo `1345_Schedule_Discord_Automation_Scheduled.json` en n8n
2. Revisa las credenciales necesarias:
   - Post to X: Configura las credenciales necesarias
   - Fetch Latest Videos: Configura las credenciales necesarias
   - GS - Add Tweet: Configura las credenciales necesarias
   - GS - Update Tweet: Configura las credenciales necesarias
   - Generate X Post: Configura las credenciales necesarias
   - Rewrite X Post to 220 Characters: Configura las credenciales necesarias
   - Gmail: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n
