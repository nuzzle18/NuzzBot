const { ephoto2 } = require('../lib/ephoto2.js')
let handler = async (m, { conn, args, usedPrefix, text, command}) => {
  let [teks, teks2] = text.split(/[&|.]/i)
    	  
 if (!teks || !teks2) throw `gunakan command seperti ini\ncontoh:\n${usedPrefix + command} Woody|*Rileks sejenak maka pikiran akan mudah menjadi positif hingga jiwa bisa tenang hidup menjadi damai*`
 if(teks.length > 22) throw `*hmmm?!!, teksnya kepanjangan kak, maksimal 21 huruf!!!.*`
     if(teks2.length > 200) throw `*hmmm?!!, teks keduanya kepanjangan kak, maksimal 152 huruf!!!.*`
let bang = await ephoto2('https://ephoto360.com/tao-typography-viet-status-quotes-nghe-thuat-truc-tuyen-dep-487.html',[`${teks}`,`${teks2}`])

    let uh = `https://s1.ephoto360.com${bang.image}`
await conn.sendFile(m.chat, uh,'p.jpg', 'wuis', m,false, { thumbnail: Buffer.alloc(0) })/*
 conn.sendFile(m.chat, uh, 'p.jpg', 'wuis',m)*/
}

handler.help = ['buatkutipan']
handler.tags = ['ep']
handler.command = /^buatkutipan$/i
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
