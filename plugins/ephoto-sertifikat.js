const { ephoto4 } = require('../lib/ephoto4.js')


let handler = async(m, { conn, args, usedPrefix, text, command}) => {

    if (args.length == 0) throw `Untuk menggunakan fitur ini\nSilahkan ketik: ${usedPrefix+command}  [theme] [your teks]\n\n*Contoh:* ${usedPrefix+ command} ytgold ardiyan\n\ntheme yang tersedia:\nytgold\nytsilver\nfbgold\nfbsilver\niggold\nigsilver\ntwgold\ntwsilver`
let Pilihan = args[0]
let uuid = {
 ytgold: 'h093supm4',
 ytsilver: 'jlady2un1',
 fbgold: '1ie53a3yj',
 fbsilver: 'xy3n9c2cr',
 iggold: 'fg66107ov',
 igsilver: 'wv902s1ri',
 twgold: 'cs4ble8b9',
 twsilver: 'gx6w3rh9h'
 
}[Pilihan]
if (!uuid) throw `Maaf query tidak tersedia. Silahkan ketik ${usedPrefix}kaca untuk melihat list query`
let [teks1, ...teks2] = text.replace(Pilihan,'').trimStart().split('|')
if (!teks1) throw `masukan teksnya contoh\n${usedPrefix+command} ytgold mellia`
  if(teks1.length > 30) throw `*hmmm?!!, teksnya kepanjangan cuy!!!.*`
  teks2 = teks2.join('|')
  let result = await ephoto4('https://en.ephoto360.com/create-silver-button-gold-button-social-network-online-450.html', `${teks1}`, uuid)
    let uh = `https://s1.ephoto360.com${result.image}`
await conn.sendFile(m.chat, uh,'p.jpg', 'wuis', m,false, { thumbnail: Buffer.alloc(0) })
    
  }

handler.help = ['sertifikat [theme] [teksnya]']
handler.tags = ['ep']
handler.command = /^sertifikat$/i
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler