let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastnguli > 86400000) {
    global.DATABASE._data.users[m.sender].limit += 10
    m.reply('_Selamat kamu mendapatkan +10 limit_')
    global.DATABASE._data.users[m.sender].lastnguli = new Date * 1
  } else m.reply('Anda sudah mengklaim upah nguli hari ini')
}
handler.help = ['nguli']
handler.tags = ['xp']
handler.command = /^(nguli)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = 0

module.exports = handler

