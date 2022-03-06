const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/CtaexU3.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bᴏᴛ Nᴀᴍᴇ 🇦 🇲 🇷 🇺   🇸 🇪 🇷  🇧 🇴 🇹 *

 *Cʀᴇᴀᴛᴇʀ number : wa.me/918606413490?text=Hi%20Windro%20bro.%20*
     
 *Iɴsᴛᴀɢʀᴀᴍ ɪᴅ: https://instagram.com/ff.wvfx*

 *ɴᴀʀᴜᴛᴏ sᴇʀ Bᴏᴛ Gʀᴏᴜᴘ: https://chat.whatsapp.com/FPCaXl55jkYK3PgTDtdvAV*

 *Gɪᴛ Lɪɴᴋ : https://github.com/wvfx-windro/Naruto*

 *Nᴀʀᴜᴛᴏꫂ⁩..♡︎*
`}) 

}));
