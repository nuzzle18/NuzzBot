const { ephoto2 } = require('../lib/ephoto2.js')


let handler = async(m, { conn, args, usedPrefix, text, command}) => {
 let ah = './src/grafity.jpg'
    if (args.length == 0) return conn.sendFile(m.chat, ah, 'p.jpg', `Untuk menggunakan fitur ini\nSilahkan ketik: ${usedPrefix+command} [query] [your teks]\n\n*Contoh:* ${usedPrefix+command} type6 not not\n\nquery yang tersedia:\ntype1\ntype2\ntype3\ntype4\ntype5\ntype6\ntype7\ntype8\ntype9`, m)
let Pilihan = args[0]
let uuid = {
type1: "https://ephoto360.com/tao-hieu-ung-chu-graffiti-duong-pho-an-tuong-online-795.html",
type2: "https://ephoto360.com/tao-anh-bia-facebook-theo-phong-cach-graffiti-646.html",
type3: "https://ephoto360.com/hieu-ung-chu/viet-chu-graffiti-sac-mau-199.html",
type4: "https://ephoto360.com/hieu-ung-chu/chu-graffiti-online-mau-8-182.html",
type5: "https://ephoto360.com/hieu-ung-chu/tao-cover-graffiti-online-181.html",
type6: "https://ephoto360.com/viet-chu-graffiti-5-180.html",
type7: "https://ephoto360.com/hieu-ung-chu/viet-chu-graffiti-3-179.html",
type8: "https://ephoto360.com/hieu-ung-chu/viet-chu-graffiti-4-178.html",
type9: "https://ephoto360.com/hieu-ung-chu/tao-chu-graffiti-online-64.html"
}[Pilihan]
if (!uuid) throw `Maaf query tidak tersedia. Silahkan ketik ${usedPrefix+command} untuk melihat list query`
let [teks1, ...teks2] = text.replace(Pilihan,'').trimStart().split('|')
if (!teks1) throw 'masukan teksnya juga misalnya kayak gini\n*contoh*\n'+`${usedPrefix+command} type5 tobangado`
if(teks1.length > 15) throw `*hmmm?!!, teksnya kepanjangan cuy, maksimal 15 karakter\ncontoh\n\n ${usedPrefix+command} type4 Tobangado*`
teks2 = teks2.join('|')
  let result = await ephoto2(uuid, `${teks1}`)
    let uh = `https://s1.ephoto360.com${result.image}`
await conn.sendFile(m.chat, uh,'p.jpg', 'wuis', m,false, { thumbnail: Buffer.alloc(0) })
    
  }

handler.help = ['grafity [type] [text]']
handler.tags = ['ep']
handler.command = /^grafity$/i
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

