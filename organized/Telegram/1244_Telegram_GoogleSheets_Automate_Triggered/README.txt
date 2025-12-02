# Telegram ChatBot with multiple sessions

## Archivo
1244_Telegram_GoogleSheets_Automate_Triggered.json

## Descripción

## Nodos utilizados (38 total)

### @n8n/n8n-nodes-langchain.agent
- Telegram Chatbot

### @n8n/n8n-nodes-langchain.chainLlm
- Basic LLM Chain

### @n8n/n8n-nodes-langchain.chainSummarization
- Summarization Chain

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model
- OpenAI Chat Model1
- OpenAI Chat Model2

### @n8n/n8n-nodes-langchain.memoryBufferWindow
- Simple Memory

### n8n-nodes-base.code
- Trim resume
- Prompt + Resume
- Trim question
- fullText

### n8n-nodes-base.googleSheets
- Get session
- Disable previous session
- Set new session
- Update database
- Set to expire
- Get session1
- Set new current session
- Response + Text

### n8n-nodes-base.if
- Exist?

### n8n-nodes-base.set
- Get message1
- Get message2

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2
- Sticky Note3
- Sticky Note4
- Sticky Note5
- Sticky Note6

### n8n-nodes-base.switch
- Command or text?

### n8n-nodes-base.telegram
- Session activated
- Send response
- OK
- KO
- Send summary
- Send answer
- Send current session

### n8n-nodes-base.telegramTrigger
- Get message

## Configuración

1. Importa el archivo `1244_Telegram_GoogleSheets_Automate_Triggered.json` en n8n
2. Revisa las credenciales necesarias:
   - OpenAI Chat Model: Configura las credenciales necesarias
   - Get message: Configura las credenciales necesarias
   - Get session: Configura las credenciales necesarias
   - Disable previous session: Configura las credenciales necesarias
   - Set new session: Configura las credenciales necesarias
   - Session activated: Configura las credenciales necesarias
   - Send response: Configura las credenciales necesarias
   - Update database: Configura las credenciales necesarias
   - OpenAI Chat Model1: Configura las credenciales necesarias
   - OpenAI Chat Model2: Configura las credenciales necesarias
   - Set to expire: Configura las credenciales necesarias
   - OK: Configura las credenciales necesarias
   - KO: Configura las credenciales necesarias
   - Get session1: Configura las credenciales necesarias
   - Send summary: Configura las credenciales necesarias
   - Set new current session: Configura las credenciales necesarias
   - Response + Text: Configura las credenciales necesarias
   - Send answer: Configura las credenciales necesarias
   - Send current session: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n
