FROM keymetrics/pm2:latest-alpine

ADD . /irita.bianjie.ai
WORKDIR /irita.bianjie.ai
RUN npm i && npm run build
EXPOSE 3000
ENV NODE_ENV="production"
CMD ["pm2-runtime", "server.js"]
