let handler  = async (m, { conn, usedPrefix: _p }) => {
let prem = `
K E T E R A N G A N

-> Fitur Prem adalah Fitur vip yg dapat di akses
anda! anda dapat mendownload ytmp3-ytmp4-play dll
sepuasnya! Hingga masa berlaku premium habis!`.trim()

conn.send2Button(m.chat, prem.trim(), '© NUZZ - B O T ', 'Harganya', '.piro', 'Oh', '.okelah', { sendEphemeral: true, quoted: m })}

handler.command = /^(hooh)$/i

module.exports = handler