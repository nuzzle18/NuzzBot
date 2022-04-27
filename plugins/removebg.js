let { MessageType } = require('@adiwajshing/baileys')
let request = require('request');
let fs = require('fs');
let uploadImage = require('../lib/uploadImage')
let uploadFile = require('../lib/uploadFile')
let { sticker } = require('../lib/sticker')

let handler = async (m, { conn, text, participants }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)|webp/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img).catch(e => uploadFile(img))
request.post({
  url: 'https://api.remove.bg/v1.0/removebg',
  formData: {
    image_url: 'https://www.remove.bg/example.jpg',
    size: 'auto',
  },
  headers: {
    'X-Api-Key': 'K5whNC7rNphZSnheNj6pxkLQ'
  },
  encoding: null
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  conn.sendFile(m.chat, body, "ini"," Nih mak",m,false, {thumbnail: Buffer.alloc[0]})
});
}

handler.help = ['removebg']
handler.tags = ['creator']
handler.command = /^removebg$/i
handler.limit = false
handler.group = false
module.exports = handler
