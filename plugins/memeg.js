const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `uhm.. teksnya mana?\n\n${usedPrefix + command} <teks atas>|<teks bawah>`
  let [t1, t2] = text.split`|`
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Unknown Mimetype`
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak didukung`
  let img = await q.download()
  let link = await uploadImage(img).catch(e => uploadFile(img))
  conn.sendFile(m.chat, global.API('https://api.memegen.link', `/images/custom/${encodeURIComponent(t1 ? t1 : '_')}/${encodeURIComponent(t2 ? t2 : '_')}.png`, {
    background: link
  }), 'meme.png', '© _andy.offc', m)
}
handler.help = ['textmaker'].map(v => v + ' <teks atas>|<teks bawah>')
handler.tags = ['tools']
handler.command = /^(textmaker|memeg)$/i

module.exports = handler
