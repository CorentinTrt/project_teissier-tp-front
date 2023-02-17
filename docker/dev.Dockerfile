FROM node:18-alpine

RUN echo '|----- NEXT APP -----|'

# Create app directory
WORKDIR /app

# Installing dependencies
COPY package.json yarn.lock ./
RUN yarn install

COPY next.config.js ./next.config.js

COPY tsconfig.json ./tsconfig.json

COPY .env .env

# Expose PORTS
EXPOSE 3000

# Running the app
CMD ["yarn", "dev"]

RUN echo '|----- NEXT APP - END -----|'
