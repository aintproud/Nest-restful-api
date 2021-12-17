FROM node:16

WORKDIR /dir/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

CMD ["node", "dist/main"]