const fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')
const imageToBase64 = require('image-to-base64')
const fs = require('fs')
let handler = async(m, { conn, text, usedPrefix, command }) => {
let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted }} : m
    if (/image/.test((m.quoted ? m.quoted : m.msg).mimetype || '')) {
      let img = await conn.downloadAndSaveMediaMessage(q)
        let [l, r,a,b] = text.split `|`

    if (!l) return conn.reply(m.chat, 'Silahkan masukan parameter text1', m)
    if (!r) return conn.reply(m.chat, 'Silahkan masukan parameter text2', m)
if (!a) return conn.reply(m.chat, 'Silahkan masukan parameter text3', m)
    if (!b) return conn.reply(m.chat, 'Silahkan masukan parameter text4', m)
let link = `${b}`
conn.sendMessage(m.chat, {
 text: link,
 canonicalUrl: `${a}`,
 matchedText: link,
 title: `${l}`,
 description: `${r}`,
 jpegThumbnail: await imageToBase64(img)
}, 'extendedTextMessage', { detectLinks: false })
	}

}
handler.help = ['hackweb *title|desk|wm|url*']
handler.tags = ['tools']
handler.command = /^(hackweb)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.register = true

module.exports = handler