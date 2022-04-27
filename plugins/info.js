let handler = async m => m.reply(`
╭─「 INFO BOT 」
│
│> Bot Recoded By :
│• https://www.instagram.com/maulud_al
│
│> Bot Dibuat Dengan :
│• JavaScript via NodeJS
│• FFmpeg
│• Imagemagick
│
│> Thanks To :
│• Nurutomo
│• Anti Bot
│• Drawl Nag
│• Andy JS
│
╰────
`.trim()) //Info ngab
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^ingfo$/i

module.exports = handler
