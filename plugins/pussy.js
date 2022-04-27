let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
	await m.reply('[❗] WAIT, Tunggu Sebentar')
    
    conn.sendFile(m.chat, 'https://hardianto.xyz/api/anime/random?nsfw=pussy&apikey=hardianto', 'animek.png', 'sange kok sm memeg animek :v', m)
    
    }
handler.help = ['pussy']
handler.tags = ['anime']
handler.command = /^pussy$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler