const { ephoto3 } = require('../lib/ephoto3.js')


let handler = async(m, { conn, args, usedPrefix, text, command}) => {

    if (args.length == 0) throw `Untuk menggunakan fitur ini\nSilahkan ketik: ${usedPrefix+command} [theme] [your teks]\n\n*Contoh:* ${usedPrefix+command} type1 mellia\n\ntheme yang tersedia:\ntype1\ntype2`
let Pilihan = args[0]
let uuid = {
 type1: 'https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html',
 type2: 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
 
}[Pilihan]
if (!uuid) throw `Maaf query tidak tersedia.\nquery yang tersedia hanya :\ntype1\ntype2`
let [teks1, ...teks2] = text.replace(Pilihan,'').trimStart().split('|')
if(!teks1) throw 'masukan teksnya\ncontoh\n'+`${usedPrefix+command} type2 iya bos`
if(teks1.length > 20) throw `*hmmm?!!, teksnya kepanjangan cuy, maksimal 20 karakter\ncontoh\n\n ${usedPrefix+command} type1 mellia*`
teks2 = teks2.join('|')
  let result = await ephoto3(uuid, `${teks1}`)
    let uh = `https://s1.ephoto360.com${result.image}`
await conn.sendFile(m.chat, uh,'p.jpg', 'wuis', m,false, { thumbnail: Buffer.alloc(0) })
    
  }

handler.help = ['blackpink [theme] [teksnya]']
handler.tags = ['ep']
handler.command = /^blackpink$/i
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

