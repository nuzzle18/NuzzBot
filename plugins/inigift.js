//let handler = async m => m.reply(`
//Gada keuntungan nya bang, mending premium aja:v
//`.trim()) // Tambah sendiri kalo mau
const { MessageType } = require("@adiwajshing/baileys")
let handler = async (m, { conn, usedPrefix }) => {
let beli = `Gada keuntungan nya bang, mending premium aja:v`.trim()

await conn.send2Button(m.chat, beli.trim(), '© A N D Y - B O T Z', 'Goprem', '.goprem', 'Okelah', '.ndak', { sendEphemeral: true, quoted: m })}

handler.help = ['belikode']
handler.tags = ['hadiah']
handler.command = /^(belikode)$/i

module.exports = handler
