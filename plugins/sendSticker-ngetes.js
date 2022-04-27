let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./src/sad2.opus')
conn.reply(m.chat, stc, m)
}
handler.customPrefix = /^(gagumaaaaaakahsgilandgizkwbshxikwbdixkbwnwlxbvsksjxvskksn)$/i //biar ga bisa di akses, soalnya tes
handler.command = new RegExp

module.exports = handler
