const imgbb = require('imgbb-uploader')
const fs = require('fs')
const { exec } = require('child_process')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, args }) => {
    const content = JSON.stringify(m.message)
    const type = Object.keys(m.message)[0]
    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
    const isMedia = (type === 'videoMessage' || type === 'videoMessage')
    if ((isMedia && !m.message.videoMessage || isQuotedVideo) && args.length == 0) {
        const ger = isQuotedVideo ? JSON.parse(JSON.stringify(m).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : m
        const owgi = await conn.downloadAndSaveMediaMessage(ger)
        let text = args.join` `
        let rano = getRandom('.mp4')
        exec(`ffmpeg -i ${owgi} -vf reverse -af areverse ${rano}`, (err) => {
            fs.unlinkSync(owgi)
            if (err) return m.reply('emror..')
            nobg = fs.readFileSync(rano)
         	conn.sendMessage(m.chat, nobg, MessageType.video, { mimetype: "video/mp4", quoted: m})
            fs.unlinkSync(rano)
        })
    } else {
        m.reply('pastikan format video!')
    }
}

handler.help = ['reverse (caption|reply media)']
handler.tags = ['so']
handler.command = /^reverse$/i
module.exports = handler


const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`}
