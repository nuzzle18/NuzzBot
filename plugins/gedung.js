const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')
const FormData = require('form-data')
const { spawn } = require('child_process')
const imgbb = require('imgbb-uploader')
let handler  = async (m, { conn, text }) => {
    let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted }} : m
    if (/image/.test((m.quoted ? m.quoted : m.msg).mimetype || '')) {
      let img = await conn.downloadAndSaveMediaMessage(q)
      let url = await imgbb ('3b8594f4cb11895f4084291bc655e510', img)
      let tek = `${url.display_url}`
   fetch('https://tessyyy-api.herokuapp.com/api/photofun/concrete-jungle?apikey=kawai'+'&url=' + encodeURIComponent(tek))
		.then(res => res.json())
		.then(json => {
		conn.reply(m.chat, 'tunggu sebentar. . .', m)
			 conn.sendFile(m.chat, json.result,'p.jpg','nih',m)
	}) .catch(() => { conn.reply(m.chat, `*Terjadi kesalahan . . .*`, m) })
}}

handler.help = ['gedung <reply img>']
handler.tags = ['nulis']
handler.command = /^gedung$/i
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

