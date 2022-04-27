let { Presence } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
const { herodetails } = require("../lib/herodetail.js")
let handler  = async (m, { conn, args, usedPrefix, command, text}) => {
if (!text) return conn.reply(m.chat, 'mau liat hero apa?')
let res = await herodetails(text)

await conn.sendFile(m.chat, res.image, 'foto.jpg', `*⺀ KARAKTER - ML ⺀*\n\n	○ *Name* : _${res.hero_name}_\n	○ *Quote from character* : *_${res.entrance_quotes}_*\n	○ *Role* : _${res.role}_\n	○ *Speciality* : _${res.speciality}_\n	○ *Lane recommendation* : _${res.laning_recommendation}_\n	○ *Release Date* : _${res.release_date}_\n\n    *⺀ ATRIBUT - HERO ⺀*\n○ *movement-speed* : _${res.attributes.movement_speed}_\n○ *physical-attack* : _${res.attributes.physical_attack}_\n○ *magic-power* : _${res.attributes.magic_power}_\n○ *attack-speed* : _${res.attributes.attack_speed}_\n○ *physical_defense* : _${res.attributes.physical_defense}_\n○ *magic_defense* : _${res.attributes.magic_defense}_\n○ *crit-rate* : _${res.attributes.basic_atk_crit_rate}_\n○ *nyawanya* : _${res.attributes.hp}_\n○ *Mana* : _${res.attributes.mana}_\n○ *ability-crit-rate* : _${res.attributes.ability_crit_rate}_\n○ *HP-Regen* : _${res.attributes.hp_regen}_\n○ *Mana-Regen* : _${res.attributes.mana_regen}_\n\n`, m,false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['heroml [username]']
handler.tags = ['fun', 'game']
handler.command = /^(heroml)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler