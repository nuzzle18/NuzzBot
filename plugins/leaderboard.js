let handler = async (m, { conn, args }) => {
  let name = m.fromMe ? conn.user : conn.contacts[m.sender] 
  let sortedExp = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].exp - a[1].exp)
  let sortedLim = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].limit - a[1].limit)
  let sortedmoney = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].money - a[1].money)
  let sortedlevel = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].level - a[1].level)
  let usersExp = sortedExp.map(v => v[0])
  let usersLim = sortedLim.map(v => v[0])
  let usersmoney = sortedmoney.map(v => v[0])
  let userslevel = sortedlevel.map(v => v[0])
/*  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(20, sortedExp.length)
    let text = `
• *Level Leaderboard Top ${len}* •
Kamu: *${userslevel.indexOf(m.sender) + 1}* dari *${userslevel.length}*

${sortedlevel.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + data.level + ' Lvl*').join`\n`}

• *Money Leaderboard Top ${len}* •
Kamu: *${usersmoney.indexOf(m.sender) + 1}* dari *${usersmoney.length}*

${sortedmoney.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + data.money + ' Money*').join`\n`}
`.trim()
  conn.reply(m.chat, text, m, {
    contextInfo: {
      mentionedJid: [...userslevel.slice(0, len), ...usersmoney.slice(0, len)]
    }
  })*/
    let tot = args.join` `
  if (!tot) return conn.reply(m.chat, 'masukan jumlah yang akan di tampilkan', m)
  if (isNaN(tot)) throw 'Harus menggunakan angka'
 
  if ( tot > 21) throw 'Maksimal 20'
  let len = args[0] && args[0].length > 0 ? Math.min(1000, Math.max(parseInt(args[0]), 0)) : Math.min(`${tot}`, sortedExp.length)
  let text = `
• *Top ${len} Global EXP* •
Kamu: *${usersExp.indexOf(m.sender) + 1}* dari *${usersExp.length}*

${sortedExp.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + Number(data.exp).toLocaleString().replace(/,/g, '.') + ' Exp*').join`\n`}

• *Top ${len} Global Tiket* •
Kamu: *${usersLim.indexOf(m.sender) + 1}* dari *${usersLim.length}*

${sortedLim.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + Number(data.limit).toLocaleString().replace(/,/g, '.') + ' Tiket*').join`\n`}


• *Top ${len} Global Money* •
Kamu: *${usersmoney.indexOf(m.sender) + 1}* dari *${usersmoney.length}*

${sortedmoney.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + Number(data.money).toLocaleString().replace(/,/g, '.')  + ' Money*').join`\n`}
`.trim()
  conn.reply(m.chat, text, m)
}
handler.help = ['leaderboard [jumlah user]', 'lb [jumlah user]']
handler.tags = ['rpg']
handler.command = /^(leaderboard|lb|rank)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

