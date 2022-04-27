const { ephoto2 } = require('../lib/ephoto2.js')
let handler = async (m, { conn, args, usedPrefix, text, command}) => {
  let [teks, teks2] = text.split(/[&|.]/i)
    	  
 if (!teks || !teks2) throw `gunakan command seperti ini\ncontoh:\n${usedPrefix + command} Untuk Guru|terima kasih Guruku`
 if(teks.length > 22) throw `*hmmm?!!, teksnya kepanjangan kak, maksimal 21 huruf!!!.*`
  if(teks2.length > 153) throw `*hmmm?!!, teks keduanya kepanjangan kak, maksimal 152 huruf!!!.*`
let bang = await ephoto2('https://ephoto360.com/viet-stt-quotes-online-tren-anh-490.html',[`${teks}`,`${teks2}`])

    let uh = `https://s1.ephoto360.com${bang.image}`
await conn.sendFile(m.chat, uh,'p.jpg', 'wuis', m,false, { thumbnail: Buffer.alloc(0) })/*
 conn.sendFile(m.chat, uh, 'p.jpg', 'wuis',m)*/
}

handler.help = ['buatpesan']
handler.tags = ['ep']
handler.command = /^buatpesan$/i
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
