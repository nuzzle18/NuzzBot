let handler = async(m, { conn, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Harap masukan Kode Randommu!`, m)
    if (args[0] == 'ANDYyYY' || args[0] == '4ndY' || args[0] == 'A4557knJQ1' || args[0] == 'ANDYGANS') {

     await conn.send2Button(m.chat, "*SELAMAT!*\n\nKamu telah mendapatkan\nXP 99999999999\nMONEY 99999999999\nDan LIMIT 99999999999", '© A N D Y - B O T Z', 'Get again', '.random ANDYGANS', 'Goprem', '.goprem', { sendEphemeral: true, quoted: m })
     //   conn.reply(m.chat, '*SELAMAT!*\n\nKamu telah mendapatkan\nXP 99999999999\nMONEY 99999999999\nDan LIMIT 99999999999', m)
    global.DATABASE._data.users[m.sender].exp += 99999999999 //tambah aja sendiri
    global.DATABASE._data.users[m.sender].money += 99999999999 //tambah aja bang
    global.DATABASE._data.users[m.sender].limit += 99999999999 //tambah aja kalo mau
    } else {
   await conn.sendButton(m.chat, "*KODE RANDOM TIDAK VALID!*\n\nSilahkan hubungi Owner untuk beli kode random yang valid dengan cara ketik !belikode atau dapatkan kode random secara gratis dengan cara menghubungi owner!", '© A N D Y - B O T Z', 'Belikode', '.belikode', { sendEphemeral: true, quoted: m })}
   //   conn.reply(m.chat, `*KODE RANDOM TIDAK VALID!*\n\nSilahkan hubungi Owner untuk beli kode random yang valid dengan cara ketik !belikode atau dapatkan kode random secara gratis dengan cara menghubungi owner!`, m)
    }
    
handler.help = ['random <kode>']
handler.tags = ['hadiah']
handler.command = /^(random)$/i
handler.premium = true
handler.private = true

handler.limit = false

module.exports = handler
