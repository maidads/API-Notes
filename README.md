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

### Felhantering

Alla API-resurser returnerar JSON och/eller en HTTP statuskod:

**200 (OK)** - Om servern lyckats med att göra det som resursen motsvarar.

**400 (Bad request)** - Om requestet är felaktigt gjort, så att servern inte kan fortsätta. Exempel: Att frontend skickar med 
felaktig data i body till servern.

**401 (Unauthorized)** - Om giltig inloggning inte finns.

**404 (Not found)** - Om resursen eller objektet som efterfrågas inte finns.

**500 (internal server error)** - Om ett fel inträffar på servern. Använd catch för att fånga det.
