let { spawn }  = require('child_process');
let handler  = async (m, { conn }) => {
  if (!process.send) throw 'Akses Ditolak!\nJalankan Bot dengan teks\n\n*$ node RendyGans.js*'
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('Sedang Mereset Bot...\nMohon tunggu sekitar 1 menit')
    await global.DATABASE.save()
    process.send('reset')
    await m.reply('Done!')
  } else throw '_eeeeeiiittsssss..._'
}
handler.help = ['restart']
handler.tags = ['host']
handler.command = /^restart$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

