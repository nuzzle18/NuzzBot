const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')
const FormData = require('form-data')
const { spawn } = require('child_process')
const imgbb = require('imgbb-uploader')
let handler  = async (m, { conn, text }) => {
    conn.reply(m.chat, 'tunggu sebentar. . .', m)
    let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted }} : m
    if (/image/.test((m.quoted ? m.quoted : m.msg).mimetype || '')) {
      let img = await conn.downloadAndSaveMediaMessage(q)
      let url = await imgbb ('3b8594f4cb11895f4084291bc655e510', img)
      let tek = `${url.display_url}`
      let p = await (await fetch('https://some-random-api.ml/canvas/glass?avatar='+encodeURIComponent(tek))).buffer()
  conn.sendFile(m.chat, p, 'gta.png' , 'awokawok', m, false, { thumbnail: Buffer.alloc(0) })
}}
handler.help = ['glas <reply img>']
handler.tags = ['maker']
handler.command = /^glas$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

