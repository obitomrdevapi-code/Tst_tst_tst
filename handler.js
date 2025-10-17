const handler = async (m, { conn, usedPrefix, command, text }) => {
  // معالجة الأوامر من plugins
  const cmd = command.toLowerCase()
  
  // البحث في plugins
  const plugin = Object.values(global.plugins).find(p => 
    p.command && Array.isArray(p.command) && p.command.includes(cmd)
  )
  
  if (plugin) {
    await plugin(m, { conn, usedPrefix, command: cmd, text })
    return
  }
}

// معالجة الأحداث
handler.participantsUpdate = async (m) => {
  const plugin = Object.values(global.plugins).find(p => p.participantsUpdate)
  if (plugin) await plugin.participantsUpdate(m)
}

export default handler