let uploadImage = require('../lib/uploadImage')
let fetch = require('node-fetch')
let util = require('util')

let handler = async(m, { conn, args }) => {
try {
gay = `sayang`

  if (!m.quoted) throw `Reply fotonya ` + gay // org gay

    await m.reply(`Bentar...`)
  let q = m.quoted ? m.quoted : m
  let media = await q.download()
  let img = await uploadImage(media)
  let buffer = await (await fetch('http://api.lolhuman.xyz/api/deepfry?apikey=31caf10e4a64e86c1a92bcba&img=' + img + '&apa=nani')).buffer() // Masukan ApiKeymu disini..
  let res = await fetch('https://raw.githubusercontent.com/herokuapp-com/kuhong-api/main/info/credit.json')
  let json = await res.json()

 await conn.sendFile(m.chat, buffer, 'gambar.jpg', 'Nih Mhank', m)

} catch (e) {

 err = await (await fetch('https://raw.githubusercontent.com/herokuapp-com/kuhong-api/main/info/erorr.json')).json() // jika Erorr
   throw err
  }
}
handler.help = ['deepfry (reply)']
handler.tags = ['nulis']
handler.command = /^deepfry$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler