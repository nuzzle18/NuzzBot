let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
Makasih:))
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*xixi*', 'status@broadcast')
}
handler.help = ['groupbot']
handler.tags = ['hooh']
handler.command = /^(ym)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
