let handler = async m => m.reply(`
╭─「 BUY PREMIUM 」
│ 
│ > Keuntungan :
│• Limit Tidak Terbatas!
│• Fitur Premium Dapat Digunakan!
│
│
│
│ > Harga ?
│• *GRATIS DEH* Tapi Follow Instagram Owner 
│  Follow Instagram Owner Dulu ya hehe
│
│
│ *gratis buat yg kenal sm owner nya ^^*
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['premium']
handler.tags = ['premium']
handler.command = /^premium$/i

module.exports = handler
