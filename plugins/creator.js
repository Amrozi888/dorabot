const contacts = [
  ['6285828764046', ' *owner-botynyakamu*'],
  ['6288233832771', ' *creatorbot*'],
]
function handler(m) {
  m.reply('Ada perlu apa kak cari owner?, chat *P* tidak akan di balas')
  for (let [nomor, nama] of contacts) this.sendContact(m.chat, nomor + '@s.whatsapp.net', nama || conn.getName(nomor + '@s.whatsapp.net'), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
