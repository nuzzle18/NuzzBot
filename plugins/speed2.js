let os = require('os')
let util = require('util')
let { performance } = require('perf_hooks')
let fs = require("fs")
let path = require('path')
let { sizeFormatter } = require('human-readable')
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn }) => {
let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.DATABASE._data.users).length

  const chats = conn.chats.all()
  const groups = chats.filter(v => v.jid.endsWith('g.us'))
  const groupsIn = groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let old = Math.round(performance.now())
  await m.reply("wait")
  let neww = Math.round(performance.now())
  let speed = neww - old
  let txt = `
  
💬 Status :
- *${speed}* ms
- *${groups.length}* Group Chats
- *${groupsIn.length}* Groups Joined
- *${groups.length - groupsIn.length}* Groups Left
- *${chats.length - groups.length}* Personal Chats
- *${chats.length}* Total Chats

🛤️ *donasi & Request* :

 TELKOMSEL [082331033919]
 DANA [082331033919]
 Saweria [https://saweria.co/nightsleep1]

 Request? ${package.bugs.url}
 officiall Group *${conn.getName(conn.user.jid)}* :
 *Group* : https://tinyurl.com/masukbang

📱 *Phone Info* :
${'```' + `
🔋 Battery : ${conn.battery ? `${conn.battery.value}% ${conn.battery.live ? '🔌 Charging...' : '⚡ Discharging'}` : 'Unknown'}
${util.format(conn.user.phone)}
`.trim() + '```'}

💻 *Server Info* :
RAM: ${format(os.totalmem() - os.freemem())} / ${format(os.totalmem())}

_NodeJS Memory Usage_
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${format(used[key])}`).join('\n') + '```'}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
  m.reply(txt)
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(wip)$/i
module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}