let { Presence } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let limit = 80
let handler  = async (m, { conn, args, usedPrefix, command }) => {
	await conn.updatePresence(m.chat, Presence.composing) 
	if (!args || !args[0]) return conn.reply(m.chat, `*Format salah! Contoh :*\n\n*${usedPrefix + command} Anu|keren*`, m)
	let text = args.join` `
	let [ kata, wm ] = text.split`|`
    if (!kata) return conn.reply(m.chat, 'Masukan Teks pertama', m)
    if (!wm) return conn.reply(m.chat, 'Teks Keduanya mana?', m)
	conn.reply(m.chat, `_tunggu sebentar. . ._`, m)
    let nsw = await (await fetch('https://api.zeks.xyz/api/phlogo?apikey=faisaljrr' + '&text1=' + encodeURIComponent(kata) + '&text2=' + encodeURIComponent(wm))).buffer()
   conn.sendFile(m.chat, nsw, 'imge.png' , 'Widih keren!!!', m)
}
handler.help = ['phlogo <teks|teks>']
handler.tags = ['logo']
handler.command = /^(phlogo)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
