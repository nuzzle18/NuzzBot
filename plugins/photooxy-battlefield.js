let { Presence } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let limit = 80
let handler  = async (m, { conn, args, usedPrefix, command, text}) => {
	await conn.updatePresence(m.chat, Presence.composing) 
	if (!args || !args[0]) return conn.reply(m.chat, `*Format salah! Contoh :*\n\n*${usedPrefix + command} naes|Dandi*`, m)
	
	let [ kanan, kiri ] = text.split(/[&|.]/i)
	  if (!kanan) return conn.reply(m.chat, 'Masukan Teks pertama', m)
	  if (!kiri) return conn.reply(m.chat, 'Teks Keduanya mana?', m)
	fetch('https://tessyyy-api.herokuapp.com/api/textmaker/game?theme=battlefield' + '&text=' + encodeURIComponent(kanan) + '&text2=' + encodeURIComponent(kiri))
    	.then(res => res.json())
    	.then(json => {
    		conn.updatePresence(m.chat, Presence.composing) 
    		conn.reply(m.chat, `*Tunggu sebentar . . .*`, m)
			conn.sendFile(m.chat, json.result.url, 'gambar.jpg', 'wuis', m,false, { thumbnail: Buffer.alloc(0) })	
	}) .catch(() => { conn.reply(m.chat, `*Terjadi kesalahan . . .*`, m) })
}
handler.help = ['battle'].map(v => v + '[text1]|[text2]')
handler.tags = ['ph']
handler.command = /^(battle)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler