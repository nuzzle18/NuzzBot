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
	usedPrefix
}) => {
	let user = global.DATABASE._data.users[m.sender]
	let __timers = (new Date - user.lastkalender)
	let _timers = (1800000 - __timers)
	let timers = clockString(_timers)
			if (args.length == 0) return conn.reply(m.chat, `Untuk menggunakan ${usedPrefix}kalender\nSilahkan reply gambar atau kirim gambar dengan caption ${usedPrefix}kalender [query]\nContoh: ${usedPrefix}kalender Year\n\nquery yang tersedia:\nYear, January, February, March, April, May, June, July, August, September, October, November, December`, m)
		if (args[0] == 'Year' || args[0] == 'January' || args[0] == 'February' || args[0] == 'March' || args[0] == 'April' || args[0] == 'May' || args[0] == 'June' || args[0] == 'July' || args[0] == 'August' || args[0] == 'September' || args[0] == 'October' || args[0] == 'November' || args[0] == 'December') {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)|webp/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img).catch(e => uploadFile(img))
	if (new Date - user.lastkalender > 1800000) {

				let form = new FormData()
				form.append("type", args[0])
				form.append("year", "2021")
				form.append("image", url)
				let post = await fetch("https://m.photofunia.com/id/effects/calendar", {
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
		global.DATABASE._data.users[m.sender].lastkalender = new Date * 1
	} else {
		m.reply(`silahkan tunggu *🕒${timers}* lagi untuk bisa menggunakan fitur ini lagi`)
	}
	} else {
			conn.reply(m.chat, `Maaf query tidak tersedia. query yang tersedia Hanya:\nYear, January, February, March, April, May, June, July, August, September, October, November, December`, m)
		}
}
handler.help = ['kalender [type]']
handler.tags = ['photofun']
handler.command = /^kalender$/i
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