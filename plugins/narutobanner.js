let fetch = require('node-fetch')
let limit = 78
let handler = async (m, { conn, command, args }) => {  
  m.reply('_Tunggu Sebentar. . ._')
  let text = args.join` `
  let p = await (await  fetch('https://videfikri.com/api/textmaker/narutobanner/?text=' + encodeURIComponent(text))).buffer()
  conn.sendFile(m.chat, p, 'image.png' , 'keren gak? ya keren lah!!!', m)
}
handler.help = ['narutobanner <Teks>']
handler.tags = ['logo']
handler.command = /^narutobanner$/i
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