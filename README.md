# ha-dashboard-backend

## Setup steps

- [Node.js with TypeScript, Nodemon and ESLint Setup](https://khalilstemmler.com/blogs/typescript/node-starter-project/)

## How to run locally

1. `npm install`
2. `npm run dev`

## How to run in production

1. `npm run start`

## API Contract

_/v1/sensing-unit/{:id}/data_

- For the sensing unit hardware to send data to server.
- Method: POST
- Request Body:

```json
{
  "temperature": 25.5,
  "humidity": 50.5,
  "light": 1000
}
```

- Response Body:

```json
{
  "message": "Data received successfully"
}
```
