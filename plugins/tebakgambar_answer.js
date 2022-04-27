let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*hint/i.test(m.quoted.text)) return
  conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
  if (!(id in conn.tebakgambar)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == conn.tebakgambar[id][0].id) {
    let json = JSON.parse(JSON.stringify(conn.tebakgambar[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
      global.DATABASE._data.users[m.sender].limit += conn.tebakgambar[id][2]
      m.reply(` *Jawaban Benar!*
Kamu mendapatkan *${Number(conn.tebakgambar[id][2]).toLocaleString().replace(/,/g, '.')}* Limit`)
      clearTimeout(conn.tebakgambar[id][3])
      delete conn.tebakgambar[id]
    } else if (m.text.toLowerCase().endsWith(json.jawaban.split` `[1])) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
  }
}
handler.exp = 0

module.exports = handler

function getDuration(s) {
	var date = new Date(null)
	date.setSeconds(s)
	return date.toISOString().substr(11, 8)
}