let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `

`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*apa itu?*', 'status@broadcast')
}
handler.help = ['groupbot']
handler.tags = ['info']
handler.command = /^(gb|grupbot|groupbot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
