# 💥AI Social Video Generator with GPT-4, Kling & Blotato —Auto-Post to Instagram, Facebook,, TikTok, Twitter & Pinterest - vide

## Archivo
1288_Telegram_Wait_Automation_Webhook.json

## Descripción

## Nodos utilizados (38 total)

### @n8n/n8n-nodes-langchain.agent
- Transform Prompt for Kling (GPT-4)

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Model Bridge

### @n8n/n8n-nodes-langchain.openAi
- Generate Voice-Over Script
- Convert Script to Audio (TTS)
- Generate Social Caption from Voiceover
- Generate YouTube-Style Title

### n8n-nodes-base.code
- Extract Prompt & Caption

### n8n-nodes-base.googleSheets
- Save Video Metadata to Google Sheets

### n8n-nodes-base.httpRequest
- Generate Video via Kling API
- Get Generated Video URL
- Upload Audio to Cloudinary
- Merge Audio + Video
- Get Video URL with Audio
- Add Captions/Subtitles to Video
- Get Final Video URL (Audio + Captions)
- Upload Video to Blotato
- Post to Instagram
- Post to YouTube
- Post to TikTok
- Post to Facebook Page
- Post to Threads
- Post to Twitter (X)
- Post to LinkedIn
- Post to Bluesky
- Post to Pinterest

### n8n-nodes-base.set
- Assign Social Media IDs

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note3
- Sticky Note4
- Sticky Note2

### n8n-nodes-base.telegram
- Send Final Video to Telegram
- Send Caption Link via Telegram

### n8n-nodes-base.telegramTrigger
- Trigger: Telegram Prompt

### n8n-nodes-base.wait
- Wait for Video Generation
- Wait for Audio/Video Fusion
- Wait Before Captioning
- Wait for Caption Render

## Configuración

1. Importa el archivo `1288_Telegram_Wait_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Trigger: Telegram Prompt: Configura las credenciales necesarias
   - OpenAI Model Bridge: Configura las credenciales necesarias
   - Generate Video via Kling API: Configura las credenciales necesarias
   - Get Generated Video URL: Configura las credenciales necesarias
   - Generate Voice-Over Script: Configura las credenciales necesarias
   - Convert Script to Audio (TTS): Configura las credenciales necesarias
   - Upload Audio to Cloudinary: Configura las credenciales necesarias
   - Merge Audio + Video: Configura las credenciales necesarias
   - Get Video URL with Audio: Configura las credenciales necesarias
   - Add Captions/Subtitles to Video: Configura las credenciales necesarias
   - Get Final Video URL (Audio + Captions): Configura las credenciales necesarias
   - Generate Social Caption from Voiceover: Configura las credenciales necesarias
   - Generate YouTube-Style Title: Configura las credenciales necesarias
   - Save Video Metadata to Google Sheets: Configura las credenciales necesarias
   - Send Final Video to Telegram: Configura las credenciales necesarias
   - Send Caption Link via Telegram: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n
