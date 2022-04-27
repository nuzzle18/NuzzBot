let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command, isAdmin, isGroup, isBotAdmin }) => {

/*    
		let enable = global.DATABASE._data.chats[m.chat]
		let status = global.DATABASE._data.users[m.sender]
		let chats = global.DATABASE._data.chats[m.chat]
		// let uS = global.DATABASE._data.users[m.chat].block
	if(enable.nobadword && !m.fromMe && m.isGroup && !isAdmin && !isOwner && isBotAdmin) {
	if (!m.fromMe && m.text.match(/(asadebangsat|Dakjal|anak setan|ngntd|ngentot|jancuk|kuntul|babi|kampang|kenthu|tempik|kimak|patek|kondom|bugil|seks|sex|sexy|tai|Tai|jancok|jembut|bokep|xnxx|xxx|xvideos|xvid|jilboob|seksi|Anjing|Babi|Kunyuk|Bajingan|Bangsat|Kampret|Kontol|Memek|Ngentot|Pentil|Perek|Pepek|Pecun|Bencong|Banci|Maho|Sinting|Lonte|Hencet|Taptei|Kampang|Keparat|Bejad|Gembel|Brengsek|Taek|Anjrit|Fuck|Tetek|Ngulum|Jembut|Totong|Kolop|Pukimak|bacot|Bacot|Juancok|asw|Bodat|Heang|Jancuk|Burit|Titit|Nenen|Bejat|Silit|Sempak|Fucking|Asshole|Bitch|Penis|Vagina|Klitoris|Kelentit|Borjong|Dancuk|anjg|Anjg|Bcd|bct|Bgsd|Bgst|bgsd|bgst|ajg|tolol|Tolol|Pantek|kondom|Teho|Bejat|Pantat|Bagudung|Babami|Kanciang|Bungul|Idiot|Kimak|Henceut|Kacuk|pukimak|goblok|bodo|Pussy|ngewe|Dick|Damn|Assu|tempek|celeng|shit|jingan|ngentot anjing ngewe|Dont use unlisted command|kontol|ngentod|colmek|alat vital|bangkinang|tits|tetek|coli|ngocok peli|ANJING!!!|kntl|ngtd|anying|amjin|sikontol|bang bros|ngocok|toket|A n j i n g|Tahi|anjass|biadap|bbii|biadab|Tomlol|dongo|dungu|anjk|bcot|BURUNG KECIL JAN SOK KERAS:V|nude|p3n1s|p3nis)/gi)) {
		conn.updatePresence(m.chat, Presence.composing) 
		var cBad = global.DATABASE.data.users[m.sender].warn += 1
		var warning = global.DATABASE.data.users[m.sender].warn
			if(warning > 9) {
				conn.reply(m.chat, `*Over badword!*`, m).then(() => {
				conn.groupRemove(m.chat, [m.sender])
				global.DATABASE.data.users[m.sender].warn = 0
           	 })
			} else {
				conn.reply(m.chat, `*⺀ BADWORD DETECTOR ⺀*\n\n*Kamu mendapat peringatan : [ ${warning} / 10 ]*\n\n*Jangan berkata kasar atau menggunakan kalimat sampah sebanyak 10x atau kamu akan dikeluarkan dari grup secara otomatis.*\n\n▌│█║▌║▌║║▌║▌║█│▌▌│█║`, m)
			}
		}
	}	
	
	*/
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Format salah! Contoh :*\n\n	*○ ${usedPrefix + command} on*\n	*○ ${usedPrefix + command} off*`, m)
	} else if(args[0] == 'on') {
		let cek = global.DATABASE._data.chats[m.chat].nobadword
	if(cek) return conn.reply(m.chat, `*Filter telah aktif pada grup ini.*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].nobadword = true
		conn.reply(m.chat, `*Filter berhasil diaktifkan. jangan gunakan kata kasar atau kamu mendapat peringatan dari bangbot*`, m)
	} else if(args[0] == 'off') {
		let cek = global.DATABASE._data.chats[m.chat].nobadword
	if(!cek) return conn.reply(m.chat, `*Filter telah di nonaktifkan pada grup ini.*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].nobadword = false
		conn.reply(m.chat, `*Filter berhasil di nonaktifkan.*`, m)
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Format salah! Contoh :*\n\n	*○ ${usedPrefix + command} on*\n	*○ ${usedPrefix + command} off*`, m)
	} 
}
handler.help = ['filter *on / off*']
handler.tags = ['group']
handler.command = /^(filter)$/i
handler.owner = false
handler.admin = true
handler.group = true
handler.premium = false
handler.botAdmin = true
handler.exp = 0
handler.limit = false
module.exports = handler