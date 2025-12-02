# Code Review workflow

## Archivo
1292_Code_GitHub_Automate_Webhook.json

## Descripción

## Nodos utilizados (14 total)

### @n8n/n8n-nodes-langchain.agent
- Code Review Agent

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model

### n8n-nodes-base.code
- Create target Prompt from PR Diffs

### n8n-nodes-base.github
- GitHub Robot
- Add Label to PR

### n8n-nodes-base.githubTrigger
- PR Trigger

### n8n-nodes-base.googleSheetsTool
- Code Best Practices

### n8n-nodes-base.httpRequest
- Get file's Diffs from PR

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2
- Sticky Note3
- Sticky Note4
- Sticky Note5

## Configuración

1. Importa el archivo `1292_Code_GitHub_Automate_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - OpenAI Chat Model: Configura las credenciales necesarias
   - PR Trigger: Configura las credenciales necesarias
   - GitHub Robot: Configura las credenciales necesarias
   - Add Label to PR: Configura las credenciales necesarias
   - Code Best Practices: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n
