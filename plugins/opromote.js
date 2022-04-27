let handler = async (m, { conn, participants }) => {
  let members = participants.filter(member => !member.isAdmin).map(member => member.jid)
  let users = m.mentionedJid.filter(user => members.includes(user))
  for (let user of users) await conn.groupMakeAdmin(m.chat, [user]).catch(console.log)
}
handler.help = ['promote @user']
handler.tags = ['group']

handler.command = /^(promote|oadmin|o\^)$/i

handler.owner = false
handler.group = true

handler.admin = true
handler.botAdmin = true

module.exports = handler
