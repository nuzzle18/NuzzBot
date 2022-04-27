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
	let __timers = (new Date - user.lastwriting)
	let _timers = (300000 - __timers)
	let timers = clockString(_timers)
	if (args.length == 0) throw `Untuk menggunakan fitur ini\nSilahkan ketik: ${usedPrefix+command} [theme] [your teks]\n\n*Contoh:* ${usedPrefix+command} bg2 mellia\n\ntheme yang tersedia:\nbg1\nbg2\nbg3\nbg4\nbg5`
let Pilihan = args[0]
let uuid = {
 bg1: 'e',
 bg2: 'e1',
 bg3: 'e2',
 bg4: 'e3',
 bg5: 'e4'
}[Pilihan]
if (!uuid) throw `Maaf theme tidak tersedia.\ntheme yang tersedia hanya :\nbg1\nbg2\nbg3\nbg4\nbg5`
let [teks1, ...teks2] = text.replace(Pilihan,'').trimStart().split('|')
if(teks1.length > 20) throw`*hmmm?!!, teksnya kepanjangan cuy, maksimal 20 karakter\ncontoh\n\n ${usedPrefix+command} bg2 mellia*`
teks2 = teks2.join('|')
	if (new Date - user.lastwriting > 300000) {
      
				let form = new FormData()
				form.append("base", uuid)
				form.append("text", teks1)
				let post = await fetch("https://m.photofunia.com/categories/all_effects/light-writing", {
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
		global.DATABASE._data.users[m.sender].lastwriting = new Date * 1
	} else {
		m.reply(`silahkan tunggu *🕒${timers}* lagi untuk bisa menggunakan fitur ini lagi`)
	}
}
handler.help = ['lightwriting [type] [text]']
handler.tags = ['photofun']
handler.command = /^lightwriting$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.disabled = false
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