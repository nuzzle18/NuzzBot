const { MessageType } = require("@adiwajshing/baileys")
let handler = async (m, { conn, usedPrefix }) => {
let prem = `Mau premium bang?`.trim()

await conn.send2Button(m.chat, prem.trim(), '© NUZZ - B O T ', 'Iya', '.hooh', 'Engga', '.ndak', { sendEphemeral: true, quoted: m })}


handler.help = ['goprem']
handler.tags = ['premium']
handler.command = /^goprem|premium$/i

module.exports = handler