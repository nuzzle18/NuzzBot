let { MessageType } = require('@adiwajshing/baileys')
const potion = 500
const Spotion = 150 
const Bdiamond = 900
const Sdiamond = 750
const Bcommon = 200
const Scommon = 20
const Suncommon = 100
const Buncommon = 600
const Bmythic = 2000 
const Smythic = 500
const Blegendary = 7500 
const Slegendary = 3000
const Bsampah = 10
const Ssampah = 2
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    const _armor = global.DATABASE._data.users[m.sender].armor
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `
${usedPrefix}shop <Buy|sell> <item> <jumlah>\n
Contoh penggunaan: *${usedPrefix}shop buy potion 1*\n\n
List Barang:\n\n
*Barang   |  Harga beli*\n
💉 Potion:       ${potion}
💎 Diamond:     ${Bdiamond}
🎁 Common:     ${Bcommon}
🎁 Uncommon:  ${Buncommon}
🎁 Mythic:     ${Bmythic}
🎁 Legendary: ${Blegendary}
🗑️ Sampah:     ${Bsampah}
🛡️ Armor:       ${armor}\n\n
*Barang   | Harga Jual*\n
💉 Potion:       ${Spotion}
💎 Diamond:     ${Sdiamond}
🎁 Common:     ${Scommon}
🎁 Uncommon:  ${Suncommon}
🎁 Mythic:     ${Smythic}
🎁 Legendary: ${Slegendary}
🗑️ Sampah:     ${Ssampah}\n\n
`.trim()
    try {
        if (/shop|toko/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.DATABASE._data.users[m.sender].sampah
            switch (jualbeli) {
            case 'buy':
                switch (_type) {
                    case 'potion':
                            if (global.DATABASE._data.users[m.sender].money >= potion * count) {
                                global.DATABASE._data.users[m.sender].money -= potion * count
                                global.DATABASE._data.users[m.sender].potion += count * 1
                                conn.reply(m.chat, `Succes membeli ${count} 💉 Potion dengan harga ${potion * count} 💰 money\n\nGunakan 💉 potion dengan ketik: *${usedPrefix}use potion <jumlah>*`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} 💉 Potion dengan harga ${potion * count} 💰 money`,)
                        break
                    case 'diamond':
                            if (global.DATABASE._data.users[m.sender].money >= Bdiamond * count) {
                                global.DATABASE._data.users[m.sender].diamond += count * 1
                                global.DATABASE._data.users[m.sender].money -= Bdiamond * count
                                conn.reply(m.chat, `Succes membeli ${count} 💎 Diamond dengan harga ${Bdiamond * count} 💰 money`, m)
                            } else conn.reply(m.chat, `💰 Money anda tidak cukup`, m)
                        
                        break
                    case 'common':
                            if (global.DATABASE._data.users[m.sender].money >= Bcommon * count) {
                                global.DATABASE._data.users[m.sender].common += count * 1
                                global.DATABASE._data.users[m.sender].money -= Bcommon * count
                                conn.reply(m.chat, `Succes membeli ${count} 🎁 Common crate dengan harga ${Bcommon * count} 💰 money`, m)
                            } else conn.reply(m.chat, `💰 Uang anda tidak cukup untuk membeli ${count} 🎁 Common crate dengan harga ${Bcommon * count} 💰 money\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)
                        
                        break
                    case 'uncommon':
                            if (global.DATABASE._data.users[m.sender].money >= Buncommon * count) {
                                global.DATABASE._data.users[m.sender].uncommon += count * 1
                                global.DATABASE._data.users[m.sender].money -= Buncommon * count
                                conn.reply(m.chat, `Succes membeli ${count} 🎁 Uncommon crate dengan harga ${Buncommon * count} 💰 money`, m)
                            } else conn.reply(m.chat, `💰 Uang anda tidak cukup untuk membeli ${count} 🎁 Uncommon crate dengan harga ${Buncommon * count} 💰 money\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)
                        
                        break
                    case 'mythic':
                            if (global.DATABASE._data.users[m.sender].money >= Bmythic * count) {
                                    global.DATABASE._data.users[m.sender].mythic += count * 1
                                global.DATABASE._data.users[m.sender].money -= Bmythic * count
                                conn.reply(m.chat, `Succes membeli ${count} 🎁 Mythic crate dengan harga ${Bmythic * count} 💰 money`, m)
                            } else conn.reply(m.chat, `💰Uang anda tidak cukup untuk membeli ${count} 🎁 Mythic crate dengan harga ${Bmythic* count} 💰 money\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)
                        
                        break
                    case 'legendary':
                            if (global.DATABASE._data.users[m.sender].money >= Blegendary * count) {
                                global.DATABASE._data.users[m.sender].legendary += count * 1
                                global.DATABASE._data.users[m.sender].money -= Blegendary * count
                                conn.reply(m.chat, `Succes membeli ${count} 🎁 Legendary crate dengan harga ${Blegendary * count} 💰 money`, m)
                            } else conn.reply(m.chat, `💰 Uang anda tidak cukup untuk membeli ${count} 🎁 Legendary crate dengan harga ${Blegendary * count} 💰 money\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)
                        
                        break
                    case 'sampah':
                            if (global.DATABASE._data.users[m.sender].money >= Bsampah * count) {
                                global.DATABASE._data.users[m.sender].sampah += count * 1
                                global.DATABASE._data.users[m.sender].money -= Bsampah * count
                                conn.reply(m.chat, `Succes membeli ${count} 🗑️ Sampah dengan harga ${Bsampah * count} 💰 money`, m)
                            } else conn.reply(m.chat, `💰 Uang anda tidak cukup untuk membeli ${count} 🗑️ Sampah dengan harga ${Bsampah * count} 💰 money`.trim(), m)
                        
                        break
                    case 'armor':
                            if (global.DATABASE._data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                            if (global.DATABASE._data.users[m.sender].money > armor) {
                                global.DATABASE._data.users[m.sender].armor += 1
                                global.DATABASE._data.users[m.sender].money -= armor * 1
                                conn.reply(m.chat, `Succes membeli 🛡️ armor seharga ${armor} 💰 money` ,m)
                            } else conn.reply(m.chat, `💰 uang mu tidak cukup untuk membeli 🛡️ armor seharga ${armor} 💰 money`, m)
                        
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            case 'sell': 
                switch (_type) {
                    case 'potion':
                        if (global.DATABASE._data.users[m.sender].potion >= count * 1) {
                            global.DATABASE._data.users[m.sender].money += Spotion * count
                            global.DATABASE._data.users[m.sender].potion -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} 💉 Potion dengan harga ${Spotion * count} 💰 money`.trim(), m)
                        } else conn.reply(m.chat, `💉 Potion kamu tidak cukup`.trim(), m)
                        break
                    case 'common':
                        if (global.DATABASE._data.users[m.sender].common >= count * 1) {
                            global.DATABASE._data.users[m.sender].money += Scommon * count
                            global.DATABASE._data.users[m.sender].common -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} 🎁 Common Crate dengan harga ${Scommon * count} 💰 money`.trim(), m)
                        } else conn.reply(m.chat, `🎁 Common Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'uncommon':
                        if (global.DATABASE._data.users[m.sender].uncommon >= count * 1) {
                            global.DATABASE._data.users[m.sender].money += Suncommon * count
                            global.DATABASE._data.users[m.sender].uncommon -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} 🎁 Uncommon Crate dengan harga ${Suncommon * count} 💰 money`.trim(), m)
                        } else conn.reply(m.chat, `🎁 Uncommon Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'mythic':
                        if (global.DATABASE._data.users[m.sender].mythic >= count * 1) {
                            global.DATABASE._data.users[m.sender].money += Smythic * count
                            global.DATABASE._data.users[m.sender].mythic -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} 🎁 Mythic Crate dengan harga ${Smythic * count} 💰 money`.trim(), m)
                        } else conn.reply(m.chat, `🎁 Mythic Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'legendary':
                        if (global.DATABASE._data.users[m.sender].legendary >= count * 1) {
                            global.DATABASE._data.users[m.sender].money += Slegendary * count
                            global.DATABASE._data.users[m.sender].legendary -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} 🎁 Legendary Crate dengan harga ${Slegendary * count} 💰 money`.trim(), m)
                        } else conn.reply(m.chat, `🎁 Legendary Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'sampah':
                        if (global.DATABASE._data.users[m.sender].sampah >= count * 1) {
                            global.DATABASE._data.users[m.sender].sampah -= count * 1
                            global.DATABASE._data.users[m.sender].money += Ssampah * count
                            conn.reply(m.chat, `Succes menjual ${count} 🗑️ sampah, dan anda mendapatkan ${Ssampah * count} 💰 money`, m)
                        } else conn.reply(m.chat, `🗑️ Sampah anda tidak cukup`, m)
                        break
                    case 'diamond':
                        if (global.DATABASE._data.users[m.sender].diamond >= count * 1) {
                            global.DATABASE._data.users[m.sender].diamond -= count * 1
                            global.DATABASE._data.users[m.sender].money += Sdiamond * count
                            conn.reply(m.chat, `Succes menjual ${count} 💎 Diamond, dan anda mendapatkan ${Sdiamond * count} 💰 money`, m)
                        } else conn.reply(m.chat, `💎 Diamond anda tidak cukup`, m)
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            default:
                return conn.reply(m.chat, Kchat, m)
            }
        } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                        if (global.DATABASE._data.users[m.sender].money >= potion * count) {
                            global.DATABASE._data.users[m.sender].money -= potion * count
                            global.DATABASE._data.users[m.sender].potion += count * 1
                            conn.reply(m.chat, `Succes membeli ${count} 💉 Potion dengan harga ${potion * count} 💰 money\n\nGunakan potion dengan ketik: *${usedPrefix}use potion <jumlah>*`, m)
                        } else conn.reply(m.chat, `💰 Uang anda tidak cukup untuk membeli ${count} 💉 Potion dengan harga ${potion * count} 💰 money`,m)
                    
                    break
                case 'diamond':
                        if (global.DATABASE._data.users[m.sender].money >= Bdiamond * count) {
                            global.DATABASE._data.users[m.sender].diamond += count * 1
                            global.DATABASE._data.users[m.sender].money -= Bdiamond * count
                            conn.reply(m.chat, `Succes membeli ${count} 💎 Diamond dengan harga ${Bdiamond * count} 💰 money`, m)
                        } else conn.reply(m.chat, `💰 Money anda tidak cukup`, m)
                    
                    break
                case 'common':
                        if (global.DATABASE._data.users[m.sender].money >= Bcommon * count) {
                            global.DATABASE._data.users[m.sender].common += count * 1
                            global.DATABASE._data.users[m.sender].money -= Bcommon * count
                            conn.reply(m.chat, `Succes membeli ${count} 🎁 Common crate dengan harga ${Bcommon * count} 💰 money`, m)
                        } else conn.reply(m.chat, `💰 Uang anda tidak cukup untuk membeli ${count} 🎁 Common crate dengan harga ${Bcommon * count} 💰 money\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)
                    
                    break
                case 'uncommon':
                        if (global.DATABASE._data.users[m.sender].money >= Buncommon * count) {
                            global.DATABASE._data.users[m.sender].uncommon += count * 1
                            global.DATABASE._data.users[m.sender].money -= Buncommon * count
                            conn.reply(m.chat, `Succes membeli ${count} 🎁 Uncommon crate dengan harga ${Buncommon * count} 💰 money`, m)
                        } else conn.reply(m.chat, `💰 Uang anda tidak cukup untuk membeli ${count} 🎁 Uncommon crate dengan harga ${Buncommon * count} 💰 money\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)
                   
                    break
                case 'mythic':
                        if (global.DATABASE._data.users[m.sender].money >= Bmythic * count) {
                            global.DATABASE._data.users[m.sender].mythic += count * 1
                            global.DATABASE._data.users[m.sender].money -= Bmythic * count
                            conn.reply(m.chat, `Succes membeli ${count} 🎁 Mythic crate dengan harga ${Bmythic * count} 💰 money`, m)
                        } else conn.reply(m.chat, `💰 Uang anda tidak cukup untuk membeli ${count} 🎁 Mythic crate dengan harga ${Bmythic* count} 💰 money\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)
                    
                    break
                case 'legendary':
                        if (global.DATABASE._data.users[m.sender].money >= Blegendary * count) {
                            global.DATABASE._data.users[m.sender].legendary += count * 1
                            global.DATABASE._data.users[m.sender].money -= Blegendary * count
                            conn.reply(m.chat, `Succes membeli ${count} 🎁 Legendary crate dengan harga ${Blegendary * count} 💰 money`, m)
                        } else conn.reply(m.chat, `💰 Uang anda tidak cukup untuk membeli ${count} 🎁 Legendary crate dengan harga ${Blegendary * count} 💰 money\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)
                    
                    break
                case 'sampah':
                        if (global.DATABASE._data.users[m.sender].money >= Bsampah * count) {
                            global.DATABASE._data.users[m.sender].sampah += count * 1
                            global.DATABASE._data.users[m.sender].money -= Bsampah * count
                            conn.reply(m.chat, `Succes membeli ${count} 🗑️ Sampah dengan harga ${Bsampah * count} 💰 money`, m)
                        } else conn.reply(m.chat, `💰 Uang anda tidak cukup untuk membeli ${count} 🗑️ Sampah dengan harga ${Bsampah * count} 💰 money`.trim(), m)
                    
                    break
                case 'armor':
                        if (global.DATABASE._data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                        if (global.DATABASE._data.users[m.sender].money > armor * 1) {
                            global.DATABASE._data.users[m.sender].armor += 1
                            global.DATABASE._data.users[m.sender].money -= armor * 1
                            conn.reply(m.chat, `Succes membeli 🛡️ armor seharga ${armor} 💰 money` ,m)
                          
                        } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli 🛡️ armor seharga ${armor} 💰 money`, m)
                    
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                    if (global.DATABASE._data.users[m.sender].potion >= count * 1) {
                        global.DATABASE._data.users[m.sender].money += Spotion * count
                        global.DATABASE._data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} 💉 Potion dengan harga ${Spotion * count} 💰 money`.trim(), m)
                    } else conn.reply(m.chat, `💉 Potion kamu tidak cukup`.trim(), m)
                    break
                case 'common':
                    if (global.DATABASE._data.users[m.sender].common >= count * 1) {
                        global.DATABASE._data.users[m.sender].money += Scommon * count
                        global.DATABASE._data.users[m.sender].common -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} 🎁 Common Crate dengan harga ${Scommon * count} 💰 money`.trim(), m)
                    } else conn.reply(m.chat, `🎁 Common Crate kamu tidak cukup`.trim(), m)
                    break
                case 'uncommon':
                    if (global.DATABASE._data.users[m.sender].uncommon >= count * 1) {
                        global.DATABASE._data.users[m.sender].money += Suncommon * count
                        global.DATABASE._data.users[m.sender].uncommon -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} 🎁 Uncommon Crate dengan harga ${Suncommon * count} 💰 money`.trim(), m)
                    } else conn.reply(m.chat, `🎁 Uncommon Crate kamu tidak cukup`.trim(), m)
                    break
                case 'mythic':
                    if (global.DATABASE._data.users[m.sender].mythic >= count * 1) {
                        global.DATABASE._data.users[m.sender].money += Smythic * count
                        global.DATABASE._data.users[m.sender].mythic -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} 🎁 Mythic Crate dengan harga ${Smythic * count} 💰 money`.trim(), m)
                    } else conn.reply(m.chat, `🎁 Mythic Crate kamu tidak cukup`.trim(), m)
                    break
                case 'legendary':
                    if (global.DATABASE._data.users[m.sender].legendary >= count * 1) {
                        global.DATABASE._data.users[m.sender].money += Slegendary * count
                        global.DATABASE._data.users[m.sender].legendary -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} 🎁 Legendary Crate dengan harga ${Slegendary * count} 💰 money`.trim(), m)
                    } else conn.reply(m.chat, `🎁 Legendary Crate kamu tidak cukup`.trim(), m)
                    break
                case 'sampah':
                    if (global.DATABASE._data.users[m.sender].sampah >= count * 1) {
                        global.DATABASE._data.users[m.sender].sampah -= count * 1
                        global.DATABASE._data.users[m.sender].money += Ssampah * count
                        conn.reply(m.chat, `Succes menjual ${count} 🗑️ sampah, dan anda mendapatkan ${Ssampah * count} 💰 money`.trim(), m)
                    } else conn.reply(m.chat, `🗑️ Sampah anda tidak cukup`.trim(), m)
                    break
                case 'diamond':
                    if (global.DATABASE._data.users[m.sender].diamond >= count * 1) {
                        global.DATABASE._data.users[m.sender].diamond -= count * 1
                        global.DATABASE._data.users[m.sender].money += Sdiamond * count
                        conn.reply(m.chat, `Succes menjual ${count} 💎 Diamond, dan anda mendapatkan ${Sdiamond * count} 💰 money`, m)
                    } else conn.reply(m.chat, `💎 Diamond anda tidak cukup`, m)
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kchat, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['shop <sell|buy> <args>', 'toko <sell|buy> <args>']
handler.tags = ['rpg']
    
handler.command = /^(shop|toko|buy|beli|sell|jual)$/i
module.exports = handler