let { Presence } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler  = async (m, { conn, args, usedPrefix, command }) => {
	await conn.updatePresence(m.chat, Presence.composing) 
	let text = args.join` `
	fetch('https://nekos.life/api/v2/img/kiss')
    	.then(res => res.json())
    	.then(json => {
    		conn.updatePresence(m.chat, Presence.composing) 
    		conn.reply(m.chat, `*Tunggu sebentar . . .*`, m)
			conn.sendFile(m.chat, json.url, 'hgc.gif', '', m, false, { asDocument: true } )	
	}) .catch(() => { conn.reply(m.chat, `*Terjadi kesalahan . . .*`, m) })
}
handler.help = ['kiss *Gif*']
handler.tags = ['anime']
handler.command = /^(kiss)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = true
handler.exp = 0
module.exports = handler