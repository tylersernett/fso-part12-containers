FROM node:16.17.0-bullseye-slim

WORKDIR /usr/src/app

COPY --chown=node:node . .
RUN npm install

ENV DEBUG=playground:*

USER node
# CMD npm start
# npm run dev is the command to start the application in development mode
CMD ["npm", "run", "dev"]