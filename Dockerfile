FROM ubuntu
WORKDIR /smq
#COPY ./package*.json
RUN apt-get update && apt-get upgrade
RUN apt-get install npm
#COPY . .
CMD ["node","index.js"]