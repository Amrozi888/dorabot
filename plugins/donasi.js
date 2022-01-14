let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • support 〕
├ Dana [088233832771]
├ Smartfren [088233832771
├ Tri [089612698583]
├ 
├
├ saya harap kamu menyukai bot 
├ saya dan jangan lupa untuk berdonasi
└────
`.trim(), '© Mursid', 'Donasi', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
