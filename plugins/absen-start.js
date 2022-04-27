let handler = async (m, { usedPrefix, text }) => {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) 
        throw conn.sendButton(m.chat, `Masih ada absen di chat ini!\nuntuk mengecek absen\n*${usedPrefix}cekabsen*`, '© NUZZ - BOT', 'Hapus Absen', `${usedPrefix}hapusabsen`, m)
    
    conn.absen[id] = [
        await conn.sendButton(m.chat, `Absen dimulai`, '© NUZZ - BOT', 'Absen', `${usedPrefix}absen`, m),
        [],
        text
    ]
}
handler.help = ['mulaiabsen [teks]']
handler.tags = ['absen']
handler.command = /^(start|mulai)absen$/i
handler.group = true
handler.admin = true
module.exports = handler