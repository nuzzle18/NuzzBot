const { ephoto2 } = require('../lib/ephoto2.js')


let handler = async(m, { conn, args, usedPrefix, text}) => {
  if (!text) throw 'masukan teksnya'
  if (text.length > 30) throw  'kepanjangan kak, maksimal 30 huruf'
  let result = await ephoto2('https://ephoto360.com/hieu-ung-chu/tao-chu-don-xuan-thiep-tet-2018-hoa-dao-339.html',`${text}`)
    let uh = `https://s1.ephoto360.com${result.image}`
await conn.sendFile(m.chat, uh,'p.jpg', 'wuis', m,false, { thumbnail: Buffer.alloc(0) })
    
  }

handler.help = ['semi']
handler.tags = ['ep']
handler.command = /^semi$/i
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
