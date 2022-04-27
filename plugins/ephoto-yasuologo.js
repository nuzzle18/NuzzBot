const { ephoto3 } = require('../lib/ephoto3.js')


let handler = async(m, { conn, args, usedPrefix, text}) => {

  if (!text) throw 'masukan teksnya'
  if (text.length > 15) throw 'kepanjangan kak, maksimal 15 huruf'
  let result = await ephoto3('https://en.ephoto360.com/create-project-yasuo-logo-384.html', `${text}`)
    let uh = `https://s1.ephoto360.com${result.image}`
await conn.sendFile(m.chat, uh,'p.jpg', 'wuis', m,false, { thumbnail: Buffer.alloc(0) })
    
  }

handler.help = ['yasuologo [text]']
handler.tags = ['ep']
handler.command = /^yasuologo$/i
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
