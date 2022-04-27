const fetch = require('node-fetch')
let fs = require("fs")
let { MessageType } =require("@adiwajshing/baileys")
let handler = async (m, { conn }) => {
    let res = await fetch('https://api.waifu.pics/sfw/neko')
   let json = await res.json()
   let { url } = json
   const media = await conn.prepareMessage(m.chat, {url:`${url}`}, MessageType.image, { thumbnail: Buffer.alloc(0) })// change for file type
   const buttons = [
  {buttonId: '/neko', buttonText: {displayText: 'get again 🗿'}, type: 1},
  {buttonId: '/donasi', buttonText: {displayText: 'donasi'}, type: 1}
]
const buttonMessage = {
    contentText: "Done\nBantu donasinya pack buat ngaktifin bot :)",
    footerText: 'wm nuzz',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage, {quoted: m})
}
handler.help = ['neko']
handler.tags = ['anime']
handler.command = /^neko/i
module.exports = handler
