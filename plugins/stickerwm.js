const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let [nama1, nama2] = text.split(/[&|.]/i)
    if (!nama1 || !nama2) throw `balas gambar atau sticker dengan caption\ncontoh:\n${usedPrefix + command} package|author`

    let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|webp|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw `balas gambar atau sticker dengan caption\ncontoh: *${usedPrefix + command} anjay|wibuu*`
      stiker = await sticker(img, false, nama1, nama2)
    } 
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw 'Conversion failed'
  }
}
handler.help = ['stickerwm [package|author]']
handler.tags = ['sticker']
handler.command = /^stickerwm$/i

module.exports = handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
