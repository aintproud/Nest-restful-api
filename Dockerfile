FROM node:latest

WORKDIR /dir/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

EXPOSE 2000

CMD ["node", "dist/main"]