const { ephoto } = require('../lib/ephoto.js')
let handler = async (m, { conn, args, usedPrefix, command}) => {
    let a = args.join` `
  
    	  if (!a) throw 'harap masukan teksnya!!!'
if(a.length > 22) throw `*hmmm?!!, teksnya kepanjangan cuy, maksimal 21 huruf!!!.*`
let pe = ["pljd5dm1t","0h93w1vmj","3c1zjl5zp","xnbezteiu","p15lvgpfi","sjic5bwdk","jbek6i5qp","5uy4gpj05","8o3m8gg6g","xlteyf8i2","hflc89i0x","64u19r696","9pfq31h3g","1zml3ag43","h7x6smcuq","ym020sv4g","1vn56sru1","82moeaznq","ti46wcz65","fcusl1erk","a5u4zk7yl","ldhz4z99w","peo2yxto2","1upzimn3j","re0tlrz32","7iqqurgna","wvxmwnwju","779ao3m86","c0ctnkm5m","6fp2a8ij7"]
let cewe = pe[Math.floor(Math.random() * pe.length)]
  ephoto('https://ephoto360.com/hieu-ung-game/tao-avatar-dot-kich-282.html',`${a}`, `${cewe}`).then(result => {
    let uh = `https://s1.ephoto360.com${result.image}`
conn.sendFile(m.chat, uh,'p.jpg','Wuis', m, false, { thumbnail: Buffer.alloc(0) })/*
conn.sendFile(m.chat, uh, 'p.jpg', 'wuis',m)*/
  }).catch(err => {
    console.log(err)
    conn.reply(m.chat, 'error',m)
  })
}
handler.help = ['avatarcs [text]']
handler.tags = ['ep']
handler.command = /^avatarcs$/i
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