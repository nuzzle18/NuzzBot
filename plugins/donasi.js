let handler = async m => m.reply(`
╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/MauludAl
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^ds|donasi$/i

module.exports = handler
