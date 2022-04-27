let fs = require ('fs')
let handler  = async (m, { conn, usedPrefix: _p }) => {
    const fvideo = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "6285795431803-1625305606@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`,
                 'seconds': `${pickRandom(['17818','6651','9123','1246','2241','613'])}`, 
                 'caption': `${pickRandom(['Wis','aku sayang kamu','xixi','cans cuk','kawaiii','hmhe','halo'])}`,
                 'jpegThumbnail': fs.readFileSync(`./cewe/${pickRandom(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q'])}.jpg`)
                        }
                       }
	                  }
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    
conn.send2Button(m.chat, `NUZZ-BOT berjalan selama ${uptime}`, '© maulud_al', 'Menu', '.huh', 'Donasi', '.ds', { quoted: fvideo })
}    
handler.command = /^(uptime)$/i
handler.help = ['uptime']
handler.tags = ['info']

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}