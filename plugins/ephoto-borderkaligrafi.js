const { ephoto2 } = require('../lib/ephoto2.js')


let handler = async(m, { conn, args, usedPrefix, text}) => {
  if (!text) throw 'masukan teksnya'
  if (text.length > 15) throw 'kepanjangan kak, maksimal 15 huruf'
  let result = await ephoto2('https://ephoto360.com/hieu-ung-chu/tao-tranh-theu-chu-thu-phap-159.html',`${text}`)
    let uh = `https://s1.ephoto360.com${result.image}`
await conn.sendFile(m.chat, uh,'p.jpg', 'wuis', m,false, { thumbnail: Buffer.alloc(0), asDocument: true})
    
  }

handler.help = ['kaligrafi']
handler.tags = ['ep']
handler.command = /^kaligrafi$/i
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler