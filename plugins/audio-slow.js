const fs = require('fs')
const { exec } = require('child_process')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, usedPrefix, command }) => {
    try {
        let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted } } : m
        let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
        if (/audio/.test(mime)) {
            let media = await conn.downloadAndSaveMediaMessage(q)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) throw `_*Error!*_`
                let buff = fs.readFileSync(ran)
                conn.sendMessage(m.chat, buff, MessageType.audio, { mimetype: "audio/mp4", ptt: true, quoted: m})
                fs.unlinkSync(ran)
            })
        } else throw `Balas vn/audio yang ingin diubah dengan caption *${usedPrefix + command}*`
    } catch (e) {
        throw e
    }
}
handler.help = ['slow']
handler.tags = ['audio']
handler.command = /^(slow)$/i
//handler.disabled = true
module.exports = handler

const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}