let handler = function (m) {
  conn.sendContact(m.chat, '6289638410621' , 'Pacar multifungsi', m)
  conn.reply(m.chat, `Imtu enjel temen aku, sev aja`, m) 
}
handler.help = ['pacarowner']
handler.tags = ['info']

handler.command = /^(pacarowner)$/i

module.exports = handler
