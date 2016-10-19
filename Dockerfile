FROM node:6.8.1

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# install yarn
RUN apt-key adv --keyserver pgp.mit.edu --recv D101F7899D41F3C3
RUN echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq
RUN apt-get install yarn -y

RUN wget -O graphiql.io.tar https://github.com/langateam/graphiql.io/tarball/master
RUN tar --strip-components=1 -xf graphiql.io.tar
RUN yarn

EXPOSE 3000
CMD [ "node", "server.js" ]
