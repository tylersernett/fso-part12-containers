FROM node:16

WORKDIR /usr/src/app

COPY . .

# Change npm ci to npm install since we are going to be in development mode
RUN npm install

# npm start is the command to start the application in development mode
CMD ["npm", "start"]
# docker build -f ./dev.Dockerfile -t todo-frontend-dev .
# docker run -p 3000:3000 -v "$(pwd):/usr/src/app/" todo-frontend-dev