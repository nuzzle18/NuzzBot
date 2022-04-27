/*let handler  = async (m, { conn, text }) => {
  let chats = conn.chats.all().filter(v => !v.read_only && v.message).map(v => v.jid)
  let content = await conn.cMod(m.chat, m, /bc|broadcast/i.test(text) ? text : text + '\n' + readMore + '')
  for (let id of chats) conn.copyNForward(id, content)
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
}*/
let fetch = require('node-fetch')
let handler  = async (m, { conn, text }) => {
  let ituh = 'https://telegra.ph/file/92b9ea9d9a08be254ff07.jpg' //foto muh
  let chats = conn.chats.all().filter(v => !v.read_only && v.message).map(v => v.jid)
  let content = await conn.cMod(m.chat, m, /bc|broadcast/i.test(text) ? text : text )
  for (let id of chats) /*conn.send2ButtonLoc*/conn.sendButtonImg(id, `${text}`.trim(), 'https://telegra.ph/file/92b9ea9d9a08be254ff07.jpg', `all brotkes || Made whit *_@_andy.offc_*`, 'Owner', '.qw', /*'Donasi', '.ds'*/)
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
}
handler.help = ['broadcast3','bc3'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast3|bc3)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

//
// B U A T - B U T T O N - I M A G E
//