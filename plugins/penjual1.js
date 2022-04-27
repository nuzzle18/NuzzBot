let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  conn.sendContact(m.chat, '6288261980362', 'Ridz Ganz', m)
  m.reply('wa.me/6288261980362')
}

handler.command = /^pj1$/i

module.exports = handler