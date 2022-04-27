const fs = require("fs")
const Axios = require("axios")
const { MessageType, Mimetype } = require("@adiwajshing/baileys")
const cheerio = require("cheerio")
const FormData = require("form-data")

let handler = async (m, { conn, media, usedPrefix, command, isPrems }) => {
    if (!m.quoted) throw `*Mengubah stiker animasi menjadi gif, bukan mengubah gif menjadi stiker!*\n\nbalas stiker dengan caption *${usedPrefix + command}*\n\nkalo mau jadiin stiker itu perintahnya *${usedPrefix}stiker*`
    if (m.quoted.mtype != "stickerMessage") throw `*Mengubah stiker animasi menjadi gif, bukan mengubah gif menjadi stiker!*\n\nbalas stiker dengan caption *${usedPrefix + command}*\n\nkalo mau jadiin stiker itu perintahnya *${usedPrefix}stiker*`
    let users = global.DATABASE.data.users[m.sender]
    if (users.limit < 1) {
        throw global.noLimit
    } else {
        if (!isPrems) users.limit -= 1
    }
    const filename = getRandom()
    const savedFilename = await conn.downloadAndSaveMediaMessage(m.quoted.fakeObj, `./tmp/${filename}`)

    await webp2mp4File(savedFilename)
        .then(async (rest) => {
            await Axios({
                method: "GET",
                url: rest.result,
                responseType: "stream",
            }).then(({ data }) => {
                const saving = data.pipe(fs.createWriteStream(`./tmp/${filename}-done.mp4`))
                saving.on("finish", () => {
                    conn.sendMessage(m.chat, fs.readFileSync(`./tmp/${filename}-done.mp4`), MessageType.video, {
                        mimetype: Mimetype.gif,
                        caption: `*© A N D Y - B O T Z*`,
                        quoted: m,
                    })
                    if (fs.existsSync(savedFilename)) fs.unlinkSync(savedFilename)
                    if (fs.existsSync(`./tmp/${filename}-done.mp4`)) fs.unlinkSync(`./tmp/${filename}-done.mp4`)
                })
            })
        })
        .catch((e) => {
            if (fs.existsSync(savedFilename)) fs.unlinkSync(savedFilename)
            throw `Jika file tidak terkirim: ${rest.result}`
        })
}

handler.help = ["togif"]
handler.tags = ["sticker"]
handler.command = /^togif|tg$/i

module.exports = handler

const getRandom = () => {
    return `${Math.floor(Math.random() * 10000)}`
}

function webp2mp4File(path) {
    return new Promise(async (resolve, reject) => {
        const bodyForm = new FormData()
        bodyForm.append("new-image-url", "")
        bodyForm.append("new-image", fs.createReadStream(path))
        await Axios({
            method: "post",
            url: "https://s6.ezgif.com/webp-to-mp4",
            data: bodyForm,
            headers: {
                "Content-Type": `multipart/form-data boundary=${bodyForm._boundary}`,
            },
        })
            .then(async ({ data }) => {
                const bodyFormThen = new FormData()
                const $ = cheerio.load(data)
                const file = $('input[name="file"]').attr("value")
                const token = $('input[name="token"]').attr("value")
                const convert = $('input[name="file"]').attr("value")
                const gotdata = {
                    file: file,
                    token: token,
                    convert: convert,
                }
                bodyFormThen.append("file", gotdata.file)
                bodyFormThen.append("token", gotdata.token)
                bodyFormThen.append("convert", gotdata.convert)
                await Axios({
                    method: "post",
                    url: "https://ezgif.com/webp-to-mp4/" + gotdata.file,
                    data: bodyFormThen,
                    headers: {
                        "Content-Type": `multipart/form-data boundary=${bodyFormThen._boundary}`,
                    },
                })
                    .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const result = "https:" + $("div#output > p.outfile > video > source").attr("src")
                        resolve({
                            status: true,
                            message: "Created By MRHRTZ",
                            result: result,
                        })
                    })
                    .catch(reject)
            })
            .catch(reject)
    })
}