const { ephoto3 } = require('../lib/ephoto3.js')


let handler = async(m, { conn, args, usedPrefix, text, command}) => {

    if (args.length == 0) throw `Untuk menggunakan fitur ini\nSilahkan ketik: ${usedPrefix+command} [theme] [your teks]\n\n*Contoh:* ${usedPrefix+command} love mellia\n\nquery yang tersedia:\npubg\nlove\nrose\nheart\nrose2\ncandle\nflower`
let Pilihan = args[0]
let uuid = {
 pubg: 'https://en.ephoto360.com/write-name-on-pubg-birthday-cake-images-522.html',
 love: 'https://en.ephoto360.com/romantic-anniversary-birthday-cake-with-name-edit-473.html',
 rose: 'https://en.ephoto360.com/heart-shaped-rose-birthday-cake-with-name-edit-469.html',
 heart: 'https://en.ephoto360.com/romantic-flower-heart-birthday-cake-by-name-edit-466.html',
 rose2: 'https://en.ephoto360.com/write-name-on-red-rose-birthday-cake-images-462.html',
 candle: 'https://en.ephoto360.com/chocolate-birthday-cake-with-candle-with-name-generator-461.html',
 flower: 'https://en.ephoto360.com/amazing-flower-birthday-cake-with-name-generator-465.html',
 
}[Pilihan]
if (!uuid) throw `Maaf query tidak tersedia.\nquery yang tersedia hanya :\npubg\nlove\nrose\nheart\nrose2\ncandle\nflower`
let [teks1, ...teks2] = text.replace(Pilihan,'').trimStart().split('|')
if (!teks1) throw `masukan teksnya contoh\n${usedPrefix+command} love mellia`
if(teks1.length > 20) throw  `*hmmm?!!, teksnya kepanjangan cuy, maksimal 20 karakter\ncontoh\n\n ${usedPrefix+command} love mellia*`
teks2 = teks2.join('|')
  let result = await ephoto3(uuid, `${teks1}`)
    let uh = `https://s1.ephoto360.com${result.image}`
await conn.sendFile(m.chat, uh,'p.jpg', 'wuis', m,false, { thumbnail: Buffer.alloc(0) })
    
  }

handler.help = ['cake']
handler.tags = ['ep']
handler.command = /^cake$/i
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler



