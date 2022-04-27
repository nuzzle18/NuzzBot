let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants, args }) => {
     const rows = [
        {title: 'Iya', description: ";)", rowId:".ym"},
        {title: 'Enggak kamu jeleg', description: ";(", rowId:".yl"},
    ]
    
    const sections = [{title: "Silahkan dipilih", rows: rows}]
    const button = {
        buttonText: 'press this',
        description: "Kamu sayang aku ga?",
        sections: sections,
        listType: 1
    }
    
    await conn.sendMessage(m.chat, button, MessageType.listMessage)
} 
handler.help = ['hai'] 
handler.tags = ['hai']
handler.command = /^ai$/i
handler.owner = false
handler.mods = false
handler.premium = false

handler.private = false
handler.botAdmin = false

handler.fail = null

module.exports = handler