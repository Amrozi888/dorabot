let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
╭─「 Donasi • Pulsa 」
│ • Smatfren [088233832771]
│ • Tri [089612698583]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [088233832771]
│ • Ingin Donasi Hubungi Owner:https://bit.ly/3qdDHsX
╰────
`.trim(), '© Mursid', 'Donasi', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
