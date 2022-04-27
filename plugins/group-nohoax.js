let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command, isAdmin, isGroup, isBotAdmin}) => {
      
/*		let enable = global.DATABASE._data.chats[m.chat]
		let status = global.DATABASE._data.users[m.sender]
		let chats = global.DATABASE._data.chats[m.chat]
		// let uS = global.DATABASE._data.users[m.chat].block
     if(enable.nohoax && !m.fromMe && m.isGroup && !isAdmin && !isOwner && isBotAdmin) {
         if(m.text.match(/(kirim ke 4 grup|kirim ke 5 grup|maka namamu akan muncul|njir nama gw muncul|jika sudah kirim ke grupmu|lalu kirim ke grupmu|maka otomatis akan muncul|jika sudah cari gambar|namamu akan muncul)/gi)) {
         conn.updatePresence(m.chat, Presence.composing)
         conn.reply(m.chat, `Sorry karna kamu telah ngirim pesan gak guna gitu kamu otomatis di kick!!!`, m).then(() => {
         conn.groupRemove(m.chat, [m.sender])
         })
       }
     }
     
*/     
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Format salah! Contoh :*\n\n	*○ ${usedPrefix + command} on*\n	*○ ${usedPrefix + command} off*`, m)
	} else if(args[0] == 'on') {
		let cek = global.DATABASE._data.chats[m.chat].nohoax
	if(cek) return conn.reply(m.chat, `*Anti-Hoax telah aktif pada grup ini.*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].nohoax = true
		conn.reply(m.chat, `*Anti-Hoax berhasil diaktifkan.*`, m)
	} else if(args[0] == 'off') {
		let cek = global.DATABASE._data.chats[m.chat].nohoax
	if(!cek) return conn.reply(m.chat, `*Anti-Hoax telah di nonaktifkan pada grup ini.*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].nohoax = false
		conn.reply(m.chat, `*Anti-Hoax berhasil di nonaktifkan.*`, m)
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Format salah! Contoh :*\n\n	*○ ${usedPrefix + command} on*\n	*○ ${usedPrefix + command} off*`, m)
	} 
}
handler.help = ['nohoax *on / off*']
handler.tags = ['group']
handler.command = /^(nohoax)$/i
handler.owner = false
handler.admin = true
handler.botAdmin = true
handler.exp = 0
handler.limit = false
module.exports = handler