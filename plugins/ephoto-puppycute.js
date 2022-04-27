const fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const { ephoto3 } = require("../lib/ephoto3.js")
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `contoh:\n${usedPrefix + command} Dany gay`
     let res = await ephoto3("https://en.ephoto360.com/create-puppy-cute-animated-online-478.html", `${text}`)
 let uh = `https://s1.ephoto360.com${res.image}`
 stiker = await sticker(false, uh, text, '🗿')
        await conn.sendMessage(m.chat, stiker, MessageType.sticker, { quoted: m })
}
handler.help = ['puppy'].map(v => v + ' [text]')
handler.tags = ['primbon']
handler.command = /^puppy$/i

handler.limit = true

module.exports = handler
