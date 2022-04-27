const { ephoto } = require('../lib/ephoto.js')
let handler = async (m, { conn, args, usedPrefix,command}) => {
    let teks= args.join` `
    let [a,b] = text.split(/[&|.]/i)
    	  if (!a || !b) throw 'harap masukan teksnya!!!\ncontoh'+`${usedPrefix+command} bot|ghost19`
if(a.length > 15) throw `*hmmm?!!, teksnya kepanjangan cuy, maksimal 14 karakter\ncontoh\n\n ${usedPrefix+command} Tobangado|huhu haha*`
let pe = ["9a0f8a8a-d4b0-42bf-945f-06e75a2ac6a4","bf5c590b-27c0-4f12-986c-f2758674d97b","450adc52-33aa-4519-b921-9c814ae0f275","1ad3c6ed-ba1e-4582-95cf-b5e2d7d1a125","83d9bd14-0ebe-470b-a2c7-bdda4f37ef17","155f67da-bf57-42e4-a3a8-5f1825b65b7e"]
let cewe = pe[Math.floor(Math.random() * pe.length)]
  ephoto('https://ephoto360.com/hieu-ung-chu-lap-lanh-nhieu-mau-sac-776.html', [`${a}`,`${b}`], `${cewe}`).then(result => {
    let uh = `https://s1.ephoto360.com${result.image}`
conn.sendFile(m.chat, uh,'p.jpg', 'wuis', m,false, { thumbnail: Buffer.alloc(0) })
/*conn.sendFile(m.chat, uh, 'p.jpg', 'wuis',m)
    */
  }).catch(err => {
    console.log(err)
    conn.reply(m.chat, 'error',m)
  })
}
handler.help = ['sparkling'].map(v => v + ' [teks1]| [teks2]')
handler.tags = ['ep']
handler.command = /^sparkling$/i
module.exports = handler