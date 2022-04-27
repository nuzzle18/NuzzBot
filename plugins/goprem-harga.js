let handler  = async (m, { conn, usedPrefix: _p }) => {
let prem = `
5k / 1 Minggu
10k / 1 Bulan
20k / Permanen

*gratis klo udh follow instagram ownernya wkwk, klo udh follow gas chat owner*

`.trim()

conn.sendButton(m.chat, prem.trim(), '© NUZZ - B O T Z', 'Gas chat owner', '.owner', { sendEphemeral: true, quoted: m })}

handler.command = /^(piro)$/i

module.exports = handler