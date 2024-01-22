FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/MR-KALINDU/BLACK-HUNTER-MD /root/MR-KALINDU
WORKDIR /root/MR-KALINDU/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
