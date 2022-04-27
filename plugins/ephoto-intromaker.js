const { ephoto } = require('../lib/ephoto.js')


let handler = async(m, { conn, args, usedPrefix, text, command}) => {

    if (args.length == 0) throw `Untuk menggunakan fitur ini\nSilahkan ketik: ${usedPrefix+command} [query] [your teks]\n\n*Contoh:* ${usedPrefix+command} eagle tobangado\n\nquery yang tersedia:\nbull, lion, dragon, eagle, tiger, skull`
let Pilihan = args[0]
let uuid = {
bull: "a4f1f582-9cf1-4826-8d6f-f82682935696",
dragon: "70bf3a9e-45b4-40e5-8551-8d968cec0f9f",
eagle: "e2d9795e-f612-4eb8-b6eb-9efa73f4ede1",
lion: "dc745ea0-e01d-4c69-97c0-6b066d5741d5",
tiger: "f9df0a41-32cd-4665-a105-24dc012d0eab",
skull: "2747f827-2ff8-42af-8d56-e40aac303c9e"
 
}[Pilihan]
if (!uuid) throw `Maaf query tidak tersedia. Silahkan ketik ${usedPrefix+command} untuk melihat list query`
let [teks1, ...teks2] = text.replace(Pilihan,'').trimStart().split('|')
if (!teks1) throw `masukan teksnya contoh\n ${usedPrefix+command} bull mayaw`
if(teks1.length > 15) throw `*hmmm?!!, teksnya kepanjangan cuy, maksimal 14 karakter\ncontoh\n\n ${usedPrefix+command} eagle Tobangado*`
teks2 = teks2.join('|')
  let result = await ephoto('https://ephoto360.com/tao-avatar-video-theo-cac-bieu-tuong-online-629.html', `${teks1}`, uuid)
    let uh = `https://s1.ephoto360.com${result.image}`
await conn.sendFile(m.chat, uh,`${Pilihan}` +'.mp4', '', m, false, { asDocument: true })
    
  }

handler.help = ['intromaker']
handler.tags = ['ep']
handler.command = /^intromaker$/i
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler