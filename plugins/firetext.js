let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Bentar...')
  let res = `https://api.zeks.xyz/api/lithgtext?text=${response}&apikey=MIMINGANZ`
  conn.sendFile(m.chat, res, 'nama.jpg', `Nih Mhank`, m, false)
}
handler.help = ['firetext'].map(v => v + ' <teks>')
handler.tags = ['logo']
handler.command = /^(firetext)$/i
handler.limit = true

module.exports = handler

//31caf10e4a64e86c1a92bcba
