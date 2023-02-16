FROM node:16-alpine3.16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001

ENTRYPOINT ["npm", "run"]

CMD ["server"]