const { ephoto } = require('../lib/ephoto.js')


let handler = async(m, { conn, args, usedPrefix, text}) => {

    if (args.length == 0) throw `Untuk menggunakan fitur ini\nSilahkan ketik: ${usedPrefix}kaca [query] [your teks]\n\n*Contoh:* ${usedPrefix}kaca smile don't be sad\n\nquery yang tersedia:\nbg1\nbg2\nbg3`
let Pilihan = args[0]
let uuid = {
 bg1: "hp4feedzl",
 bg2: "tixyvt3g9",
 bg3: "x1x18qh0d"
}[Pilihan]
if (!uuid) throw `Maaf query tidak tersedia. Silahkan ketik ${usedPrefix}kaca untuk melihat list query`
let [teks1, ...teks2] = text.replace(Pilihan,'').trimStart().split('|')
if (!teks1) throw `masukan teksnya contoh\n${usedPrefix+command} bg3 mellia`
  if(teks1.length > 20) throw `*hmmm?!!, teksnya kepanjangan cuy!!!.*`
teks2 = teks2.join('|')
  let result = await ephoto('https://ephoto360.com/hieu-ung-viet-chu-3d-len-bai-bien-814.html', ["spider-man",`${teks1}`], uuid)
    let uh = `https://s1.ephoto360.com${result.image}`
await conn.sendFile(m.chat, uh,'p.jpg', 'wuis', m,false, { thumbnail: Buffer.alloc(0) })
/*await conn.sendFile(m.chat, uh, 'p.jpg', 'wuis',m)*/
    
  }
handler.help = ['spiderlogo']
handler.tags = ['ep']
handler.command = /^spiderlogo$/i
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
