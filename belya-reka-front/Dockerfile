FROM node:18-alpine
WORKDIR /app
# COPY ["package.json", "package-lock.json", "./src/"]
COPY package.json .
RUN npm install
COPY . .
EXPOSE 1000
CMD ["npm","run", "dev"]

# FROM node:18-alpine
# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .
# EXPOSE 1000
# CMD ["npm", "run", "dev"]