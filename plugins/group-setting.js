let { Presence, GroupSettingChange } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, args, usedPrefix, command }) => {
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
			conn.send2Button(m.chat, 'Hayoloh', '© NUZZ - BOT', 'buka grupnya', '.group andybaek', 'tutup grupnya', '.group andyjeleg',m)
	} else if(args[0] == 'andybaek') {
		conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
	} else if(args[0] == 'andyjeleg') {
		conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.send2Button(m.chat, 'Hayoloh', '© NUZZ - BOT', 'buka grupnya', '.group andybaek', 'tutup grupnya', '.group andyjeleg',m)
	} 
}
handler.help = ['group','grup']
handler.tags = ['group']
handler.command = /^(group|grup)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
handler.exp = 0
module.exports = handler