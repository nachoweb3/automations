# Remote IOT Sensor monitoring via MQTT and InfluxDB

## Archivo
1110_HTTP_Mqtt_Monitor_Webhook.json

## Descripción

## Nodos utilizados (6 total)

### n8n-nodes-base.code
- Payload data preparation node

### n8n-nodes-base.httpRequest
- Data ingest to InfluxDB bucket

### n8n-nodes-base.mqttTrigger
- Remote Sensor MQTT Trigger

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note3

## Configuración

1. Importa el archivo `1110_HTTP_Mqtt_Monitor_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Remote Sensor MQTT Trigger: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n
