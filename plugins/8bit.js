let uploadImage = require('../lib/uploadImage')
let fetch = require('node-fetch')
let util = require('util')

let handler = async(m, { conn, args }) => {
try {
gay = `sayang`

  if (!m.quoted) throw `Reply fotonya` + gay // org gay

    await m.reply(`Tunggu sebentar...`)
  let q = m.quoted ? m.quoted : m
  let media = await q.download()
  let img = await uploadImage(media)
  let buffer = await (await fetch('http://zekais-api.herokuapp.com/pixelate?url=' + img + '&apikey=OneDayOneCharity')).buffer() // Masukan ApiKeymu disini..
  let res = await fetch('https://raw.githubusercontent.com/herokuapp-com/kuhong-api/main/info/credit.json')
  let json = await res.json()

 await conn.sendFile(m.chat, buffer, 'wasted.jpg', 'Ini sayang', m)

} catch (e) {

 err = await (await fetch('https://raw.githubusercontent.com/herokuapp-com/kuhong-api/main/info/erorr.json')).json() // jika Erorr
   throw err
  }
}
handler.help = ['8bit (reply)']
handler.tags = ['nulis']
handler.command = /^8bit$/i
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