let fetch = require('node-fetch')
let limit = 78
let handler  = async (m, { conn, args, usedPrefix, command }) => {
	await conn.updatePresence(m.chat, Presence.composing) 
  let text = args.join` `
	fetch('https://tessyyy-api.herokuapp.com/api/textmaker?text=halo&theme=' + encodeURIComponent(text))).buffer()
    	.then(res => res.json())
    	.then(json => {
    		conn.updatePresence(m.chat, Presence.composing) 
    		conn.reply(m.chat, `*Tunggu sebentar . . .*`, m)
			conn.sendFile(m.chat, json.result.url, 'image.png', '', m, false, { asDocument: false }  )	
	}) .catch(() => { conn.reply(m.chat, `*Terjadi kesalahan . . .*`, m) })
}
handler.help = ['pokemon <Teks>']
handler.tags = ['nulis']
handler.command = /^pokemon$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler