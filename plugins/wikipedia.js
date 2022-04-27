const {
	wikipedia
 } = require("../lib/fullscrape.js")
let handler = async (m, { args, text }) => {
  if (!text) return m.reply('Mau cari informasi apa?')
let a = conn.getName(m.sender)
wikipedia(`${text}`).then(res=>{console.log(res)
m.reply("*M E N U R U T - W I K I P E D I A*\n"+ res.result.isi)}).catch(() => { conn.reply(m.chat, `maaf kak ${a} data dari ${text} tidak dapat saya temukan`, m) })
}
handler.help = ['wikipedia']
handler.tags = ['internet']
handler.command = /^(wiki(pedia)?)$/i

module.exports = handler
