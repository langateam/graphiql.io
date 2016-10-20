FROM node:6.9-slim

WORKDIR /usr/src/graphiql.io

RUN wget github.com/langateam/graphiql.io/tarball/master -O graphiql.io.tar
RUN tar --strip-components=1 -xvf graphiql.io.tar
RUN npm install

EXPOSE 3000
CMD [ "node", "server.js" ]
