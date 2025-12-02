# Monitor USDT ERC-20 Wallet Balance with Etherscan and Telegram Notifications

## Archivo
1304_Telegram_Code_Monitor_Webhook.json

## Descripción

## Nodos utilizados (8 total)

### n8n-nodes-base.code
- balanceChecker

### n8n-nodes-base.cron
- Check Balance Every 5 Minutes

### n8n-nodes-base.httpRequest
- Fetch USDT Balance from Etherscan

### n8n-nodes-base.if
- Balance Changed?

### n8n-nodes-base.set
- userData

### n8n-nodes-base.stickyNote
- Sticky Note

### n8n-nodes-base.telegram
- Balance Changed.
- Balance Not Changed.

## Configuración

1. Importa el archivo `1304_Telegram_Code_Monitor_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Balance Changed.: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n
