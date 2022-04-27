const axios = require('axios')
const fetch = require('node-fetch')
const cheerio = require("cheerio")
const path = require('path')
const {
	spawn
} = require('child_process')
const imgbb = require('imgbb-uploader')
const FormData = require('form-data')
const uploadImage = require('../lib/uploadImage')
const uploadFile = require('../lib/uploadFile')
let handler = async (m, {
	conn,
	args,
	usedPrefix,
	text,
	command
}) => {
	let user = global.DATABASE._data.users[m.sender]
	let __timers = (new Date - user.lastcake)
	let _timers = (180000 - __timers)
	let timers = clockString(_timers)
	let [teks, teks2] = text.split(/[&|.]/i)
     if (teks.length > 15 || teks2.length > 15) throw `*hmmm?!!, teks keduanya kepanjangan kak, maksimal 15 huruf!!!.*`
 if (!teks || !teks2) throw `gunakan command seperti ini\ncontoh:\n${usedPrefix + command} kakak|haloo`
	if (new Date - user.lastcake > 180000) {
				let form = new FormData()
				form.append("text1", teks)
				form.append("text2", teks2)
				let post = await fetch("https://m.photofunia.com/categories/all_effects/birthday-cake", {
					method: "POST",
					headers: {
						"User-Agent": "GoogleBot",
						...form.getHeaders(),
					},
					body: form.getBuffer(),
				})
				let html = await post.text()
				var $ = cheerio.load(html)
				let gambar = $('div.image-container').find('img').attr('src')
				await conn.sendFile(m.chat, gambar, 'p.jpg', 'nih bang', m, false, {
					thumbnail: Buffer.alloc(0)
				})
		

		global.DATABASE._data.users[m.sender].lastcake = new Date * 1
	} else {
		m.reply(`silahkan tunggu *🕒${timers}* lagi untuk bisa menggunakan fitur ini lagi`)
	}
}
handler.help = ['cake2 [text1]|[text2]']
handler.tags = ['photofun']
handler.command = /^cake2$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

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