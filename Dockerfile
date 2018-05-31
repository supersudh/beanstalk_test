FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
RUN npm i -g yarn

RUN yarn

# Bundle app source
COPY . .

EXPOSE 8080
RUN echo ${NODE_ENV}
CMD [ "npm", "start" ]