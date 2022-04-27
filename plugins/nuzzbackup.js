function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '62815158600891', 'Nurutomo', m)
  this.sendContact(m.chat, '6282139109327', 'NUZZ-BOT [Backup]', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(nuzzbackup)$/i

module.exports = handler
