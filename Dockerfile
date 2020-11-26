FROM node:12
COPY package*.json ./
RUN npm install
COPY . . 
ENV PORT 3000
CMD [ "node", "app.js" ]