let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
Base : https://github.com/Nurutomo/wabot-aq
Game - adventure : https://github.com/botstylee/botstylee/
Button cmd : https://github.com/ariffb25/stikerinbot
Keseluruhan fitur bot : https://github.com/andyjavadams/botwa
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*ini bang*', 'status@broadcast')
}
handler.help = ['scbot']
handler.tags = ['info']
handler.command = /^(sccccccccccccccccc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
