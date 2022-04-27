let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command, isAdmin, isGroup, isBotAdmin}) => {

/*		let enable = global.DATABASE._data.chats[m.chat]
		let status = global.DATABASE._data.users[m.sender]
		let chats = global.DATABASE._data.chats[m.chat]
		// let uS = global.DATABASE._data.users[m.chat].block
	
		
	if(enable.nohentai && !m.fromMe && m.isGroup && isBotAdmin) {
            if (m.text.match(/(https:\/\/nhentai.net\/\/g|nhentai.net\/\/g)/gi)) {
            	conn.updatePresence(m.chat, Presence.composing) 
		var cBad = global.DATABASE.data.users[m.sender].warn += 1
		var warning = global.DATABASE.data.users[m.sender].warn
			if(warning > 6) {
				conn.reply(m.chat, `*Bad request!*`, m).then(() => {
				conn.groupRemove(m.chat, [m.sender])
				global.DATABASE.data.users[m.sender].warn = 0
           	 })
			} else {
				conn.reply(m.chat, `*⺀ HENTAI DETECTOR ⺀*\n\n*Kamu mendapat peringatan : [ ${warning} / 7 ]*\n\n*Jangan Kirim kode hentai sebanyak 10x atau kamu akan dikeluarkan dari grup secara otomatis.*\n\n▌│█║▌║▌║║▌║▌║█│▌▌│█║`, m)
			}
		}
	}
	
	*/
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Format salah! Contoh :*\n\n	*○ ${usedPrefix + command} on*\n	*○ ${usedPrefix + command} off*`, m)
	} else if(args[0] == 'on') {
		let cek = global.DATABASE._data.chats[m.chat].nohentai
	if(cek) return conn.reply(m.chat, `*Anti kode hentai telah aktif pada grup ini.*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].nohentai = true
		conn.reply(m.chat, `*Anti-kodeHentai berhasil diaktifkan.*`, m)
	} else if(args[0] == 'off') {
		let cek = global.DATABASE._data.chats[m.chat].nohentai
	if(!cek) return conn.reply(m.chat, `*Anti-KodeHentai telah di nonaktifkan pada grup ini.*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].nohentai = false
		conn.reply(m.chat, `*Anti-kodeHentai berhasil di nonaktifkan.*`, m)
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Format salah! Contoh :*\n\n	*○ ${usedPrefix + command} on*\n	*○ ${usedPrefix + command} off*`, m)
	} 
}
handler.help = ['nokodehentai *on / off*']
handler.tags = ['group']
handler.command = /^(nokodehentai)$/i
handler.group = true
handler.owner = false
handler.admin = true
handler.botAdmin = true
handler.exp = 0
handler.limit = false
module.exports = handler