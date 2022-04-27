let { MessageType, mentionedJid } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let path = require('path')
let fs = require ('fs')
let moment = require ('moment-timezone')
let handler = async (m, { conn, usedPrefix }) => {
let name = m.fromMe ? conn.user : conn.contacts[m.sender]
let { limit, exp, money, lastclaim, registered, regTime, role, age, level } = global.DATABASE.data.users[m.sender]
const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
//let oy = `@${tag.replace(/@.+/, '')}`
//let own = `@${owner[0]}`
const freply = {
  key: {
  participant: '0@s.whatsapp.net',
  remoteJid: 'status@broadcast'
 },
 message: {
  imageMessage: {
   caption: `${pickRandom(['*Wis*','aku sayang kamu','*xixi*','*cans cuk*','*kawaii*','*hemhe*'])}`,
      jpegThumbnail: fs.readFileSync(`./cewe/${pickRandom(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q'])}.jpg`)
  }
 }
}
/*let text = `
\`\`\`Hi, ${ucapan()} ${ucapin()} @${tag.replace(/@.+/, '')} ✨\`\`\`

\`\`\`NOTE - BOT TIDAK AKAN MERESPON DI DALAM GRUP JIKA PESAN SEMENTARA TIDAK DIMATIKAN.\`\`\`
`.trim()*/

let content = fs.readFileSync('./src/nuzzle.jpg') // change for file type
const media = await conn.prepareMessage(m.chat, content, MessageType.image, { thumbnail: Buffer.alloc(0) })// change for file type

const buttons = [
  
  {buttonId: `${usedPrefix}` + 'getmsg tagihantari1122', buttonText: {displayText: '» TARI'}, type: 1},
  {buttonId: `${usedPrefix}` + 'getmsg tagihanazkiya1122', buttonText: {displayText: '» AZKIYA'}, type: 1},
  {buttonId: `${usedPrefix}` + 'getmsg tagihanulfia1122', buttonText: {displayText: '» ULFIA'}, type: 1},
  {buttonId: `${usedPrefix}` + 'getmsg tagihanegis1122', buttonText: {displayText: '» EGIS'}, type: 1},
  {buttonId: `${usedPrefix}` + 'getmsg tagihanbakso1122', buttonText: {displayText: '» BAKSO'}, type: 1},
  {buttonId: `${usedPrefix}` + 'getmsg tagihanzurastore1122', buttonText: {displayText: '» ZURA_STORE'}, type: 1},
  {buttonId: `${usedPrefix}` + 'info1122', buttonText: {displayText: '❖ MENU UTAMA'}, type: 1}/*,
   {buttonId: '/wip', buttonText: {displayText: 'info'}, type: 1}*/
]
const buttonMessage = {
    contentText: ` `,
    footerText: `*PILIH SALAH SATU TOMBOL DIBAWAH INI*`,
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}

const andy = await conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage, { sendEphemeral: true, quoted: freply, contextInfo: { forwardingScore: 899,
                isForwarded: true ,"": {
                    "": `${pickRandom([''])}`,
                    "": `${pickRandom([''])}`,
                    "": "1",
                    "": `${pickRandom(['https://telegra.ph/file/6e33a92a7917a6da614c8.png','https://telegra.ph/file/4d55bd6548fe15f3929e8.png','https://telegra.ph/file/358bd1243061f415225e2.png','https://telegra.ph/file/8208c148ab682cf7bd12a.png'])}`,
                    "": `${pickRandom([''])}`,
               //     "thumbnail": "https://i.ibb.co/ysTv8wY/Screenshot-20210808-112316.png",
                   "": `${pickRandom([''])}`,
                     }}})
        setTimeout(() => {
        conn.deleteMessage(m.chat, andy.key)
      }, 240000)
}
handler.command = /^(tagihan1122)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dini hari"
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang"
    }
    if (time >= 15) {
        res = "Selamat sore"
    }
    if (time >= 18) {
        res = "Selamat malam"
    }
    return res
}
function ucapin() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "🌃"
    if (time >= 4) {
        res = "🌄"
    }
    if (time > 10) {
        res = "☀️"
    }
    if (time >= 15) {
        res = "🌆"
    }
    if (time >= 18) {
        res = "🌉"
    }
    return res
}
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}