let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
\`\`\`🦠[JASA SPAM VIRUS BY RIDZ GANZ]🦠

📍「 VIRTEX GANAS + VIGRAM 」📍 

60x : 1K🔥
150× : 2k🔥
300× : 3K🔥

----------------------------------

📍「 SLAYER + PHILIPS GANAS 」📍

10x : 500P🔥
20x : 1K🔥
30× : 2K🔥 
100x : 3K🔥
200× : 4K🔥
----------------------------------

📍「 VIRLOK + SAUCE GANAS 」📍

15x : 1K🔥
35x : 2K🔥
60x : 3K🔥
110x : 4K🔥
----------------------------------

📍「 VIRKON + WATSON GANAS 」📍

20x : 1K🔥
60x : 2K 🔥
100x : 3K🔥
130x : 4K🔥

🔥SEMUA VIRUS DIGABUNG 6K🔥

HARGA MAHAL, KARENA SANGAT GANAS!!🐦

SUDAH DI UJI WA ORI
RIPPER AUTO MAMPUS🐦

MINAT? PC AJA, RAGU SKIP!🐦
💳PAYMENT : GOPAY💳\`\`\`


❗ *Jual Wa Broadcast + kebal Virtex*
*Fitur*
- Bisa mengubah suara chat audio
- Modify chat(modif chat orng lain untuk mefitnah akowkaow tpi, jangan di lakukan yg unfaedah)
- Message scheduler
- Message auto reply(kayak wa bussines)
- Broadcast message to group(Share link grup ga perlu capek cuma 1 kali klik)
- Bisa spam
*Keuntungan :*
- Bisa Meneruskan Pesan Ke 250 Grup
- Bisa Jadi Kang Share
- Bisa jadi kang spam virtex
-anti delay
! BONUS VIRTEX  + SLAYER  + VIRGAM  !


*‼️Open Murid Buat Qris ALL PAYMENT No KTP*
🗣️:WORK GK BG?
🗣️:KALO GK WORK NGAPAIN GW JUAL
Testi?Ada dong

KEUNTUNGAN :
-BISA JADI KANG BUAT QRIS ALL PAYMENT
-TUTORNYA BISA DIJUAL KEMBALI 
-BAWA DANA 5K 

MINAT?PC
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*ketik .penjual jika anda berminat*', 'status@broadcast')
}
handler.help = ['groupbot']
handler.tags = ['hooh']
handler.command = /^(jsv)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
