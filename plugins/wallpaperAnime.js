const fetch = require('node-fetch')
let fs = require("fs")
let { MessageType } =require("@adiwajshing/baileys")
let handler = async (m, { conn }) => {
    let res = await fetch('https://nekos.life/api/v2/img/wallpaper')
   let json = await res.json()
   let { url } = json
   const media = await conn.prepareMessage(m.chat, {url:`${url}`}, MessageType.image, { thumbnail: Buffer.alloc(0) })// change for file type
   const buttons = [
  {buttonId: '/wallpaperanime', buttonText: {displayText: 'get again 🗿'}, type: 1},
  {buttonId: '/donasi', buttonText: {displayText: 'donasi'}, type: 1}
]
const buttonMessage = {
    contentText: "Done\nBantu donasinya pack buat ngaktifin bot :)",
    footerText: 'wm andy',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage, {quoted: m})
}
handler.help = ['wallpaperanime']
handler.tags = ['anime']
handler.command = /^wallpaperanime/i
handler.private = true
module.exports = handler

/*
const fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')

let confirm = {}

let handler = async (m, { conn }) => {
    //if (!isROwner) throw 'Dalam perbaikan'
    
        if (!(m.sender in confirm)) 
        if (!(m.sender in confirm)) return 
        if (m.isBaileys) return  
       
   let res = await fetch('https://nekos.life/api/v2/img/wallpaper')
   let json = await res.json()
   let { url } = json
   const media = await conn.prepareMessage(m.chat, {url:`${url}`}, MessageType.image, { thumbnail: Buffer.alloc(0) })// change for file type
    const buttons = [
  {buttonId: '/wallpaperanime', buttonText: {displayText: 'get again 🗿'}, type: 1},
  {buttonId: '/donasi', buttonText: {displayText: 'donasi'}, type: 1}
]
const buttonMessage = {
    contentText: "Done\nBantu donasinya pack buat ngaktifin bot :)",
    footerText: 'hai',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
        
    }

handler.help = ['wallpaperanime']
handler.tags = ['expression']
handler.command = /^wallpaperanime/i
handler.private = true
module.exports = handler */