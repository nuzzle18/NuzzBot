const { ephoto } = require('../lib/ephoto.js')
let handler = async (m, { conn, args, usedPrefix, command}) => {
    let a = args.join` `
  
    	  if (!a) throw 'harap masukan teksnya!!!'
if(a.length > 22) throw  `*hmmm?!!, teksnya kepanjangan cuy, maksimal 21 huruf!!!.*`
let pe = ["bqpdyld5a","xu1wjqhg2","q1u3adnzw","16uavcv9m","ii6gi7m23","kri40ykbs","tpdisfoup","a9jbr6l6m","l5u2ywncx","kifncerls","lrzw47w3y","4bfo1kjiw","wajd36juk","ubtlql785","xnqftww9i","d33qz4kud","wtfazdq6s","ywdkci8os","onwaov9sk","54hl50r5u","6c87ba0t5","16mfi0k8e","fxa9o2pxw","s85vvlhqk","pz0wbrozp","e48otib8s","i1qnbl9fi","iavufjtg0","pl6qs7p09","kqs6wysvj","1aeen0loi","67luiei84","zq87b6n39","r605m5o0u","627bz0kdk","k1pcv1hjq","atsrtonf2","91u5e3i3v","gopo6e1so","resq4ujoc","u7elodbl5","aknpdzcwg","0vdbywzm8","l7ctg43v1","egigo3u3p","7qiip18av","8k8p3u5bz","jlnhys259"]
let cewe = pe[Math.floor(Math.random() * pe.length)]
  ephoto('https://ephoto360.com/tao-logo-team-online-454.html',`${a}`, `${cewe}`).then(result => {
    let uh = `https://s1.ephoto360.com${result.image}`
conn.sendFile(m.chat, uh,'p.jpg','Wuis', m,false, { thumbnail: Buffer.alloc(0) })
  }).catch(err => {
    console.log(err)
    conn.reply(m.chat, 'error',m)
  })
}
handler.help = ['logo4 [text]']
handler.tags = ['ep']
handler.command = /^logo4$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = true
module.exports = handler

