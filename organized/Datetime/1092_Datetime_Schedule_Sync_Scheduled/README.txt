# Two Way Sync Pipedrive and MySQL

## Archivo
1092_Datetime_Schedule_Sync_Scheduled.json

## Descripción

## Nodos utilizados (14 total)

### n8n-nodes-base.compareDatasets
- Compare Datasets

### n8n-nodes-base.dateTime
- Date & Time

### n8n-nodes-base.if
- IF Data Changed
- IF Updated On

### n8n-nodes-base.mySql
- MySQL
- Create Contact
- Update Contact

### n8n-nodes-base.pipedrive
- Pipedrive
- Create Person
- Update Person

### n8n-nodes-base.scheduleTrigger
- Schedule Trigger

### n8n-nodes-base.set
- Set Input2
- Set Input1
- Set

## Configuración

1. Importa el archivo `1092_Datetime_Schedule_Sync_Scheduled.json` en n8n
2. Revisa las credenciales necesarias:
   - MySQL: Configura las credenciales necesarias
   - Pipedrive: Configura las credenciales necesarias
   - Create Person: Configura las credenciales necesarias
   - Create Contact: Configura las credenciales necesarias
   - Update Contact: Configura las credenciales necesarias
   - Update Person: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n
