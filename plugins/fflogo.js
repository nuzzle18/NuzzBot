let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Bentar...')
  let res = `http://lolhuman.herokuapp.com/api/ephoto1/freefire?apikey=31caf10e4a64e86c1a92bcba&text=${response}`
  conn.sendFile(m.chat, res, 'nama.jpg', `Dasar Player 8 Bit`, m, false)
}
handler.help = ['fflogo'].map(v => v + ' <teks>')
handler.tags = ['logo']
handler.command = /^(fflogo)$/i
handler.limit = true

module.exports = handler

//31caf10e4a64e86c1a92bcba
