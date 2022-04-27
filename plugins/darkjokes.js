let fetch = require("node-fetch")
let handler = async(m, { conn }) => {
try { let p = await (await fetch('https://api.xteam.xyz/asupan/darkjoke?APIKEY=miminetbot')).buffer()
conn.sendFile(m.chat, p, '', 'drag joles',m)} catch (e) {
  m.reply (`apikey invalid atau server down`)} 
}
handler.help = ['darkjokes']
handler.tags = ['internet']
handler.command = /^(dragjoles|darkjokes)$/i

module.exports = handler
