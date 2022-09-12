# DrivenPass API

### API Documentation for a password management application

## Routes:

- ### /users:
- POST /users/sign-up:
  Create your account using your email and a password:

```json
{
    "email": string,
    "password": string
}
```

- POST /users/login:
  Login using the email and password chosen before:

```json
{
    "email": string,
    "password": string
}
```

- ### /credentials:
- POST /credentials:
  Save your credentials to another websites:

```json
{
    "title": string,
    "url": string,
    "username": string,
    "password": string
}
```

- GET /credentials:
  Using authentication Bearer token, get the credentials you posted before.

- GET /credentials/:id:
  Using authentication Bearer token, get a specific credential registered in the database.

- DELETE /credentials/:id:
  Using authentication Bearer token, delete credentials from the database.

- ### /notes:
- POST /notes:
  Save important notes on the database:

```json
{
    "title": string,
    "description": string
}
```

- GET /notes:
  Using authentication Bearer token, get the notes you posted before.

- GET /notes/:id:
  Using authentication Bearer token, get a specific note.

- DELETE /notes/:id:
  Using authentication Bearer token, delete a note from the database.

- ### /cards:
- POST /cards:
  Save cards information on the database (expirationDate shold be on format "MM/YY" and type is restricted to "credit" | "debit" | "both"):

```json
{
  "title": string,
  "number": string,
  "cvv": string,
  "expirationDate": string,
  "password": string,
  "isVirtual": boolean,
  "type": string
}
```

- GET /cards:
  Using authentication Bearer token, get the cards you posted before.

- GET /cards/:id:
  Using authentication Bearer token, get a specific card.

- DELETE /notes/:id:
  Using authentication Bearer token, delete a card from the database.

- ### /networks:
- POST /networks:
  Save network information:

```json
{
  "title": string,
  "name": string,
  "password": string
}
```

- GET /networks:
  Using authentication Bearer token, get the networks you posted before.

- GET /networks/:id:
  Using authentication Bearer token, get a specific network.

- DELETE /networks/:id:
  Using authentication Bearer token, delete a network from the database.
