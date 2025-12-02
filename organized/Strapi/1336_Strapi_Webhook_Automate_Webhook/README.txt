# 1336_Strapi_Webhook_Automate_Webhook

## Archivo
1336_Strapi_Webhook_Automate_Webhook.json

## Descripción

## Nodos utilizados (14 total)

### n8n-nodes-base.googleCloudNaturalLanguage
- Analyze Form Submission
- Analyze Tweet

### n8n-nodes-base.if
- Is Retweet or Old?
- Positive Form Sentiment?
- Positive Tweet Sentiment?

### n8n-nodes-base.interval
- Every 30 Minutes

### n8n-nodes-base.merge
- Merge Form Sentiment with Source
- Merge Tweet Sentiment with Source

### n8n-nodes-base.set
- Simplify Result
- Simplify Webhook Result

### n8n-nodes-base.strapi
- Store in Strapi
- Store Form Submission in Strapi

### n8n-nodes-base.twitter
- Search Tweets

### n8n-nodes-base.webhook
- Webhook

## Configuración

1. Importa el archivo `1336_Strapi_Webhook_Automate_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Store in Strapi: Configura las credenciales necesarias
   - Search Tweets: Configura las credenciales necesarias
   - Analyze Form Submission: Configura las credenciales necesarias
   - Analyze Tweet: Configura las credenciales necesarias
   - Store Form Submission in Strapi: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n
