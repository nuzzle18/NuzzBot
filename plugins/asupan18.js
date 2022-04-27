let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    
    await m.reply('[❗] WAIT, Tunggu Sebentar')
    
    conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Nih Jngn comly  ya', m)
    
    }
    
    
handler.help = ['asupan18']
handler.tags = ['anime']
handler.command = /^(asupan18)$/i
handler.premium = true
handler.private = true
handler.limit = 10
//ftwrr
module.exports = handler