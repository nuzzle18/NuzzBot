let { Presence } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
const { Pinterest } = require('../lib/pinterest.js')
let handler  = async (m, { conn, args, usedPrefix, command, text}) => {
let txt = args.join` `
let [query,aha]= text.split(/[&|.]/i)
    	  if (!query) return conn.reply(m.chat, 'mau nyari apa?\ngunakan command seperti ini\n*contoh*\n'+`${usedPrefix+command} keqing|1`, m)
	  if (!aha) return conn.reply(m.chat, 'Mau nyari berapa gambar?\ngunakan command seperti ini\n*contoh*\n'+`${usedPrefix+command} keqing|1`, m)
          if (isNaN(aha)) return conn.reply(m.chat,  'Harus menggunakan angka',m)
 if (aha < 1 || aha > 4) {
      throw `*[permintaan error]*\n untuk menggunakan fitur ini minimal request 1 dan maksimal request 4`
    }
let res = await Pinterest(query)
for (let i = 0; i < `${aha}`; i++) {
conn.sendFile(m.chat, res[Math.floor(Math.random() * res.length)],`${query}`+'.jpg', 'ini bwang',0, false, { thumbnail: Buffer.alloc(0) })
await delay(2500)
}
}
 
handler.help = ['pinterest'].map(v => v + ' [teks]|[jumlah]')
handler.tags = ['internet']
handler.command = /^(pinterest)$/i

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))