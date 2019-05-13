FROM node

ADD . /app
WORKDIR /app

RUN node -v
RUN npm -v

RUN npm install -g gulp-cli \
  && rm -rf node_modules && rm -rf dist \
  && npm install

EXPOSE 3000
CMD ["node", "server.js"]
