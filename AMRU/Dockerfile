FROM fusuf/whatsasena:latest

RUN git clone https://github.com/wvfx-windro/Naruto /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/wvfx-windro/naruto-media

CMD ["node", "bot.js"]
