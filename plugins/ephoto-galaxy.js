const { ephoto } = require('../lib/ephoto.js')


let handler = async(m, { conn, args, usedPrefix, text,command}) => {
let oi = './src/gl.jpg'
    if (args.length == 0) return conn.sendFile(m.chat, oi, 'p.jpg',`Untuk menggunakan fitur ini\nSilahkan ketik: ${usedPrefix+command} [query] [your teks]\n\n*Contoh:* ${usedPrefix+command} b don't be sad\n\nquery yang tersedia:\na, b, c, d, e, f`, m, false, {thumbnail: Buffer.alloc[0]})
let Pilihan = args[0]
let uuid = {
 a: "0333f7bc-b275-43da-ab34-b6bd550bc9f7",
 b: "adc92b8e-1bc7-46b1-9f24-69054a5b59d3",
 c: "7a951e7b-7881-4abe-ad1d-b1d4a81fc67a",
 d: "577522b2-7047-448c-8306-7f441cb744d4",
 e: "a074b12c-409a-428f-8349-2f02eac01587",
 f: "1a65b9cc-cd6b-4730-b763-0d9196e35725"
 
}[Pilihan]
if (!uuid) throw `Maaf query tidak tersedia. Silahkan ketik ${usedPrefix+command} untuk melihat list query`
let [teks1, ...teks2] = text.replace(Pilihan,'').trimStart().split('|')
if (!teks1) throw `masukan teksnya contoh\n${usedPrefix+command} a bang`
  if(teks1.length > 23) throw `*hmmm?!!, teksnya kepanjangan cuy!!!.*`
teks2 = teks2.join('|')
  let result = await ephoto('https://ephoto360.com/tao-hinh-nen-dien-thoai-galaxy-theo-ten-dep-full-hd-684.html', `${teks1}`, uuid)
    let uh = `https://s1.ephoto360.com${result.image}`
await conn.sendFile(m.chat, uh,'p.jpg', 'wuis', m,false, { thumbnail: Buffer.alloc(0) })
    
  }
handler.help = ['galaxy <Teks>']
handler.tags = ['ep']
handler.command = /^galaxy$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

