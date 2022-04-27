const { photofunUse } = require("../lib/fullscrape.js")
let handler = async (m, {
	conn,
	args,
	usedPrefix,
	text,
	command
}) => {
	let user = global.DATABASE._data.users[m.sender]
	let __timers = (new Date - user.lastcookie)
	let _timers = (180000 - __timers)
	let timers = clockString(_timers)
	if(!text) return m.reply("teknya mana kak?")
	if (new Date - user.lastcookie > 180000) {
try {
let huraa = await photofunUse("https://m.photofunia.com/categories/all_effects/fortune-cookie", `${text}`)
let wo = await m.reply('Di tunggu sebentar yah\njika bot ngirim gambarnya berupa dokument berarti error')
conn.sendFile(m.chat, huraa, 'g.jpg', 'nih bang', m,false, { thumbnail: Buffer.alloc(0) })
 } catch (e) {
   m.reply('maaf error kak :/')
//m.reply(`${e}`)
  }
global.DATABASE._data.users[m.sender].lastcookie = new Date * 1
	} else {
		m.reply(`silahkan tunggu *🕒${timers}* lagi untuk bisa menggunakan fitur ini lagi`)
	}
}
handler.help = ['fortune [teksnya]']
handler.tags = ['photofun']
handler.command = /^fortune$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.disabled = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}