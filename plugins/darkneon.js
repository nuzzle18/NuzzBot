let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {

   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Bentar...')
  let res = `https://videfikri.com/api/textmaker/darkneon/?text=${response}`
  conn.sendFile(m.chat, res, 'nama.jpg', `Nih Mhank`, m, false)
}
handler.help = ['darkneon'].map(v => v + ' <teks>')
handler.tags = ['logo']
handler.command = /^(darkneon)$/i
handler.limit = true

module.exports = handler

