let fetch = require('node-fetch')

let timeout = 120000
let poin = 5
let handler  = async (m, { conn, usedPrefix }) => {
    conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
    let id = m.chat
    if (id in conn.tebakgambar) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakgambar[id][0])
        throw false
    }
    let res = await fetch('https://tessyy-api.herokuapp.com/tebakgambar')
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let caption = `Apa maksud dari gambar tersebut?\n
Timeout: *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}hint* untuk *hint*
jika jawaban benar kamu akan mendapatkan *${poin}* Limit\nNOTE: *GABISA JAWAB DONASI YA KAK*
    `.trim()
    conn.tebakgambar[id] = [
      await conn.sendFile(m.chat, json.image,'tebakgambar.jpg', caption, m),
      json, poin,
      setTimeout(() => {
        if (conn.tebakgambar[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakgambar[id][0])
        delete conn.tebakgambar[id]
      }, timeout)
    ]
  }
  handler.help = ['tebakgambar']
  handler.tags = ['game']
  handler.command = /^tebakgambar/i
  
  module.exports = handler
 
function getDuration(s) {
	var date = new Date(null)
	date.setSeconds(s)
	return date.toISOString().substr(11, 8)
}