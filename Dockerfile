FROM node:6.9-slim

RUN adduser -D nodeuser
USER nodeuser

WORKDIR /usr/src/graphiql.io

RUN wget github.com/langateam/graphiql.io/tarball/master -O graphiql.io.tar
RUN tar --strip-components=1 -xvf graphiql.io.tar
RUN npm install

CMD [ "node", "server.js" ]
