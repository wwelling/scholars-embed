FROM node:current-alpine

# copy project to build excluding node_modules and dist
COPY . /var/app/scholars-embed

# set working directory
WORKDIR /var/app/scholars-embed

# install dependencies
RUN yarn install

# build app with server side rendering in production 
RUN yarn build

# install pm2 globally
RUN npm install pm2 -g

# deploy app using pm2 when running container
CMD ["pm2-docker", "/var/app/scholars-embed/dist/server.js", "--name='scholars-embed'"]