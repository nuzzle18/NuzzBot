let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn }) => {
  let pp = './src/depresi.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, money, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
\`\`\`Hi ${username}, berikut adalah info atm/dompet anda\`\`\`

Nama: *${username}*
XP: *${exp}*
Money: *${money}*
Limit: *${limit}*

\`\`\`Ayo tingkatkan isi atm mu dengan bermain game, nanti kalo menang di kasih bonus:v\`\`\`
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['atm']
handler.tags = ['rpg']
handler.command = /^atm$/i
module.exports = handler

