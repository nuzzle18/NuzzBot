let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.01
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Masukkan jumlah tiket yang akan diberi'
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (isNaN(txt)) throw 'Hanya angka'
  let xp = parseInt(txt)
  let limit = xp
  let name = conn.getName(who)
  let pjk = Math.ceil(xp * pajak)
  limit += pjk
  if (limit < 1) throw 'Minimal 1'
  let users = global.DATABASE._data.users
  if (limit > users[m.sender].limit) throw 'tiket tidak mencukupi untuk mentransfer'
  users[m.sender].limit -= limit
  users[who].limit += xp

  conn.reply(m.chat, `Berhasil mentransfer ${Number(xp).toLocaleString().replace(/,/g, '.')} Tiket ke ${name} Dengan pajak Pengiriman Sebesar ${Number(pjk).toLocaleString().replace(/,/g, '.')} tiket `, who, m)
}
handler.help = ['ttiket @user <amount>']
handler.tags = ['xp']
handler.command = /^ttiket$/

module.exports = handler
function getDuration(s) {
	var date = new Date(null)
	date.setSeconds(s)
	return date.toISOString().substr(11, 8)
}