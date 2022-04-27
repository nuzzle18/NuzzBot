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
  
  {buttonId: `${usedPrefix}` + 'getimg server1122', buttonText: {displayText: '❖ Info Server dan Cek Server'}, type: 1},
  {buttonId: `${usedPrefix}` + 'tagihan1122', buttonText: {displayText: '❖ Info Tagihan'}, type: 1},
  {buttonId: `${usedPrefix}` + 'error1122', buttonText: {displayText: '☒ INFO ERROR'}, type: 1}/*,
   {buttonId: '/wip', buttonText: {displayText: 'info'}, type: 1}*/
]
const buttonMessage = {
    contentText: `\`\`\`Hi ${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}, ${ucapan()} ${ucapin()}\`\`\`

*NUZZLE.ID WiFi Sharing yang Dijamin Murah dan Unlimited*\n*(Tanpa Batasan Kuota)*`,
    footerText: `*KLIK SALAH SATU TOMBOL DIBAWAH INI YA ^_^*\n\nsekarang jam\n${wib} WIB\n\n© NUZZ - B O T  | BY *_@maulud_al_*`,
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}

const andy = await conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage, { sendEphemeral: true, quoted: freply, contextInfo: { forwardingScore: 899,
                isForwarded: true ,"externalAdReply": {
                    "title": `${pickRandom(['Klik untuk chat admin'])}`,
                    "body": `${pickRandom(['Kontak admin'])}`,
                    "mediaType": "1",
                    "thumbnailUrl": `${pickRandom(['https://telegra.ph/file/6e33a92a7917a6da614c8.png','https://telegra.ph/file/4d55bd6548fe15f3929e8.png','https://telegra.ph/file/358bd1243061f415225e2.png','https://telegra.ph/file/8208c148ab682cf7bd12a.png'])}`,
                    "mediaUrl": `${pickRandom(['https://wa.me/6282137872989?text=assalamualaikum'])}`,
               //     "thumbnail": "https://i.ibb.co/ysTv8wY/Screenshot-20210808-112316.png",
                   "sourceUrl": `${pickRandom(['https://wa.me/6282137872989?text=assalamualaikum'])}`,
                     }}})
        setTimeout(() => {
        conn.deleteMessage(m.chat, andy.key)
      }, 240000)
}
handler.command = /^(info1122)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

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