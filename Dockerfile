FROM node:16-alpine as development

# WORKDIR /frontend

COPY package*.json ./

RUN npm install

COPY . /usr/src/app

EXPOSE 3000

CMD npm run dev


# docker build . -t animals:dev
# docker run -p 4000:3000 animals:dev