const { ephoto2 } = require('../lib/ephoto2.js')


let handler = async(m, { conn, args, usedPrefix, text, command}) => {
let [a,b] = text.split(/[&|.]/i)
  if (!a || !b) throw 'masukan teksnya contoh\n'+`${usedPrefix+command} bot|ghost19-ui`
  if (a.length > 15) throw 'kepanjangan kak, maksimal 15 huruf'
  let result = await ephoto2('https://ephoto360.com/hieu-ung-chu/viet-thu-phap-tren-dia-da-phong-thuy-161.html', [`${a}`,`${b}`])
    let uh = `https://s1.ephoto360.com${result.image}`
await conn.sendFile(m.chat, uh,'p.jpg', 'wuis', m,false, { thumbnail: Buffer.alloc(0) })/*
await conn.sendFile(m.chat, uh, 'p.jpg', 'wuis',m)*/ 
     }

handler.help = ['piring']
handler.tags = ['ep']
handler.command = /^piring$/i
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
