let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants, args }) => {
     const rows = [
        {title: 'menu', description: "saya pengen lihat", rowId:".menu"},
        {title: 'owner', description: "Owner nya siapa?", rowId:"/owner"},
        {title: 'toko', description: "cek toko", rowId:"/tkk"},
        {title: 'donasi', description: "saya mau donasi", rowId:"/ds"},
        {title: 'info', description: "hehe:v", rowId:"/in"},
        {title: 'scbot', description: "mau bang", rowId:"/sc"},
        {title: 'ping', description: "tes", rowId:"/pg"},
        {title: 'groupbot', description: "hm", rowId:"/gb"},
    ]
    
    const sections = [{title: "Pilih salah satu", rows: rows}]
    const button = {
        buttonText: 'Pencet ini',
        description: "Silahkan pilih kak",
        sections: sections,
        listType: 1
    }
    
    await conn.sendMessage(m.chat, button, MessageType.listMessage)
} 
handler.help = ['menu'] 
handler.tags = ['help']
handler.command = /^waduhhhhhhhhhh$/i
handler.owner = false
handler.mods = false
handler.premium = false

handler.private = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

