let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan masukan mimpimu', m)

  await m.reply('Searching...')
	axios.get(`https://api.caliph71.xyz/api/artimimpi/?mimpi=${text}&apikey=caliphganz`).then ((res) => {
	 	let hasil = `Arti Mimpimu\n\n${res.data.result}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['artimimpi'].map(v => v + ' <nama>')
handler.tags = ['primbon']
handler.command = /^(artimimpi)$/i
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