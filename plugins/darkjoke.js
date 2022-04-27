let handler = async(m, { conn }) => {
conn.sendFile(m.chat, global.API('xteam', '/asupan/darkjoke', {}, 'APIKEY'), '', 'Awokwkwkwkwk',m)
}
handler.help = ['darkjokes']
handler.tags = ['fun']
handler.command = /^(dragjoles|darkjokes)$/i

module.exports = handler
