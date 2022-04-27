/*
By : Aine
*/
let handler = m => m

handler.before = function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let sender = global.DATABASE.data.chats[m.sender]
  

  let isSticker = m.mtype
  if (chat.antiSticker && isSticker) {
    if(isSticker === "stickerMessage"){
      if (global.opts) {
        if (isAdmin || !isBotAdmin){		  
        }else{
          m.reply('*Sticker detected*\nKamu akan bot keluar kan!') // ganti text terserah kamu 
          this.groupRemove(m.chat, [m.sender])
        }return true
      }
    }
  }
  return true
}

module.exports = handler