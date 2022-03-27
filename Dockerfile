FROM node:17-alpine
LABEL maintainer="coder8080 (coder8080@mail.ru)"
RUN mkdir /app && mkdir /app/src
WORKDIR /app/src
COPY . .
RUN npm i && npm run build && npm i serve -g && rm -rf node_modules && rm package-lock.json && npm cache clean -force && rm -rf /root/.npm
EXPOSE 3000
CMD serve -s build -p 3000