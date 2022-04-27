let handler  = async (m, { conn, usedPrefix: _p }) => {

let info = `
JUAL NOMOR OTP CANADA

5K / 1
10K Dapet 3 nomor, kapan lagi bisa memiliki nomor +1 dengan harga yang murah 

PEMBAYARAN ONLY PULSA
Indosat - 6285795431803
Telkomsel - 6282164659362
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*ketik .penjual jika anda berminat*', 'status@broadcast')
}
handler.help = ['groupbot']
handler.tags = ['hooh']
handler.command = /^(jjn)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
