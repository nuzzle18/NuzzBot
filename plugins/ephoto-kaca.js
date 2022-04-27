const { ephoto } = require('../lib/ephoto.js')


let handler = async(m, { conn, args, usedPrefix, text}) => {

    if (args.length == 0) throw `Untuk menggunakan fitur ini\nSilahkan ketik: ${usedPrefix}kaca [query] [your teks]\n\n*Contoh:* ${usedPrefix}kaca smile don't be sad\n\nquery yang tersedia:\nsmile, cat, sad, bear, flower, heart`
let Pilihan = args[0]
let uuid = {
 sad: '33be5625-d82c-4bd5-97ed-57324fd90a70',
 bear: '2d6f1ad1-39df-4175-9faa-9348b6ba1551',
 cat: '86e55647-2fc7-4b20-ae13-7dfc740af209',
 flower: '22cdd4a3-f144-4f8d-b46f-093b0c1ec0d2',
 heart: 'fb6983d2-3bc1-46b5-bb61-00cff1bffbf7',
 smile: '50eb6949-e5a5-4feb-95ce-8ca749159ee7'
 
}[Pilihan]
if (!uuid) throw `Maaf query tidak tersedia. Silahkan ketik ${usedPrefix}kaca untuk melihat list query`
let [teks1, ...teks2] = text.replace(Pilihan,'').trimStart().split('|')
if (!teks1) throw `masukan teksnya contoh\n ${usedPrefix+command} smile mayaw`
  if(teks1.length > 200) throw `*hmmm?!!, teksnya kepanjangan cuy!!!.*`
teks2 = teks2.join('|')
  let result = await ephoto('https://ephoto360.com/hieu-ung-viet-chu-len-cua-so-mua-truc-tuyen-806.html', `${teks1}`, uuid)
    let uh = `https://s1.ephoto360.com${result.image}`
await conn.sendFile(m.chat, uh,'p.jpg', 'wuis', m,false, { thumbnail: Buffer.alloc(0) })
    
  }

handler.help = ['kaca']
handler.tags = ['ep']
handler.command = /^kaca$/i
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

