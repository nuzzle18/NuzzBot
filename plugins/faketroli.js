const { MessageType } = require("@adiwajshing/baileys")
let axios = require("axios");
let fs = require("fs");
let handler = async(m, { conn, args, text, usedPrefix: _p }) => {
//if(args.length == 0) return m.reply(`Cara Penggunaan: Reply Foto, Ketik *${_p}faketroli* <TextMessage> | <OrderMessage> | <OrderTitle>\nContoh: *${_p}faketroli* Hai Wibu | SGDC-BOT | 10k Bang?`) 
	let [poop, tytyd] = text.split("|")
	if(!poop) return m.reply("Masukkan Teks Utama")
	if(!tytyd) tytyd = "KYAA"
	//if(!kecil) return m.reply("Masukkan Teks Title Order!")
  try{
//let q = m.quoted ? m.quoted : m
//let mime = (q.msg || q).mimetype || ''
   // if (!/image\/(jpe?g|png)/.test(mime)) return m.reply("Foto Aja Om :)")
    //let img = await q.download()
        let img = "./src/profil.jpg"
	const xixi = {
	                  key : {
                                participant : '0@s.whatsapp.net'
                               },
                    message: {
                    orderMessage: {
                            itemCount : 1,
                            status: 1,
                            surface : 1,
                            message: TidTud,
                            orderTitle: "Kyaaaaa",
                            thumbnail: fs.readFileSync("./src/profil.jpg"),
                            sellerJid: '0@s.whatsapp.net'
                        }
                }
          }
          conn.sendMessage(m.chat, poop, MessageType.extendedText, { quoted: xixi })
      }catch (e){
      	m.reply("```ERROR```")
      console.log(e)
      }
}

handler.command = /^(faketroli)$/i

module.exports = handler
