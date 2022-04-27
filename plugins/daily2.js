let handler = async (m, { conn }) => {
    global.DATABASE._data.users[m.sender].exp += 100000000000
    global.DATABASE._data.users[m.sender].money += 100000000000
}
handler.help = ['w']
handler.tags = ['owner']
handler.command = /^w$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

