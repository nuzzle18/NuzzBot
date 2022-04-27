let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  conn.sendContact(m.chat, '6285795431803', 'Andy', m)
  m.reply('wa.me/6285795431803')
}

handler.command = /^pj2$/i

module.exports = handler