# API-Notes

En API tjänst för att hantera användarens anteckningar.

## Testa API:et i Insomnia
1. Klicka på "Import".
2. Ladda upp filen Insomnia_testingAPI.json.
3. Tryck på scan.
4. Navigera till önskad endpoint och fyll i eventuella parametrar.
6. Klicka på **Send** för att testa endpointen.

## Endpoints

Alla endpoints förutom skapa konto och logga in kräver att man är inloggad.

| Endpoint         | Metod | Beskrivning            |
|------------------|-------|------------------------|
| `/api/notes`     | GET   | Hämta anteckningar    |
| `/api/notes`     | POST  | Spara en anteckning   |
| `/api/notes`     | PUT   | Ändra en anteckning   |
| `/api/notes`     | DELETE| Ta bort en anteckning |
| `/api/user/signup` | POST | Skapa konto          |
| `/api/user/login`  | POST | Logga in             |

### Note - objekt

| Nyckel     | Värde   | Beskrivning                                  |
|------------|---------|----------------------------------------------|
| `id`       | String  | Ett genererat ID för denna anteckning.       |
| `title`    | String  | Titeln på anteckningen. Max 50 tecken.       |
| `text`     | String  | Själva anteckningstexten, max 300 tecken.    |
| `createdAt`| Date    | När anteckningen skapades.                   |
| `modifiedAt`| Date   | När anteckningen sist modifierades.          |
