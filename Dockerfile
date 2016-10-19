FROM node:6.9

WORKDIR /usr/src/graphiql.io

# install yarn
RUN apt-key adv --keyserver pgp.mit.edu --recv D101F7899D41F3C3
RUN echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq
RUN apt-get install yarn -y

RUN git clone https://github.com/langateam/graphiql.io.git .
RUN yarn

EXPOSE 3000
CMD [ "node", "server.js" ]
