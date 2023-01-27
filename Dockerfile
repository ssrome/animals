FROM node:16-alpine

COPY . /usr/src/app

RUN npm install

EXPOSE 3000

CMD npm run dev
