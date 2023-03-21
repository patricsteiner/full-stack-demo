# FullStackDemo

This is a full stack demo app, that allows you to search for random dogs on the internet and save the ones you like to a local mongodb.

The project setup as an nx monorepo, with the following apps:
- frontend: Angular app
- backend: NestJS app with mongodb connection using TypeOrm

## Getting started

1. install node 16+
2. navigate to the project root folder and run `npm i`
3. set up a local mongodb, for example with docker: `docker run -p 27017:27017 -d -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=secret -e MONGO_INITDB_DATABASE=dogs mongo`
4. run `npm run start`
5. navigate to http://localhost:4200/ to access the frontend. The backend api is available on http://localhost:8080/api


