FROM node:10.15.0
WORKDIR /Ethereum_final
ADD . /Ethereum_final
RUN npm install
EXPOSE 3000
CMD npm start