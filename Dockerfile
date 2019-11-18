FROM node:8.11.4

WORKDIR /app

EXPOSE 3000 35729
COPY ./docs /app/docs
COPY . /app
RUN yarn install

CMD ["yarn", "start"]
