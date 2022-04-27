let fetch = require('node-fetch')
let handler = async (m, { text, usedPrefix }) => {
  let res = await fetch(global.API('xteam', '/cuaca', { kota: text }, 'APIKEY'))
  if (!text) throw `Ketik ${usedPrefix}cuaca daerah/kota\n*Contoh*: ${usedPrefix}cuaca bandung`
  let json = await res.json()
  if (!json.status) throw 'Maaf kota yang kamu cari tidak tersedia'
  let { kota, hari, cuaca, deskripsi, suhu, pressure, kelembapan, angin } = json.message
  let teks = `
Cuaca daerah *${kota}:*

*Hari:* ${hari}
*Cuaca:* ${cuaca}(${deskripsi})
*Suhu:* ${suhu}
*Kelembapan:* ${kelembapan}
*Angin:* ${angin}
`
  conn.reply(m.chat, teks.trim(), m)
}
handler.help = ['cuaca *daerah* ']
handler.tags = ['berita']
handler.command = /^cuaca$/i

module.exports = handler