const { ephoto2 } = require('../lib/ephoto2.js')
let handler = async (m, { conn, args, usedPrefix, command}) => {
    let a = args.join` `  
    	  if (!a) throw 'harap masukan teksnya!!!'
if(a.length > 100) throw `*hmmm?!!, teksnya kepanjangan cuy, maksimal 100 huruf!!!.*`
  ephoto2('https://ephoto360.com/thiep-hoa-chuc-mung-valentine-14-2-online-an-tuong-555.html',`${a}`).then(result => {
    let uh = `https://s1.ephoto360.com${result.image}`
conn.sendFile(m.chat, uh,'p.jpg','Wuis', m, false, { thumbnail: Buffer.alloc(0) })
  }).catch(err => {
    console.log(err)
    conn.reply(m.chat, 'error',m)
  })
}
handler.help = ['bflower [text]']
handler.tags = ['ep']
handler.command = /^bflower$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = true
module.exports = handler