import { makeWASocket, useMultiFileAuthState } from '@whiskeysockets/baileys'
import { join } from 'path'
import { readdirSync } from 'fs'

// تحميل plugins
const pluginFolder = join(__dirname, './plugins')
global.plugins = {}

async function loadPlugins() {
  const files = readdirSync(pluginFolder).filter(f => f.endsWith('.js'))
  for (const file of files) {
    try {
      const module = await import(`./plugins/${file}`)
      global.plugins[file] = module.default || module
    } catch (e) {
      console.error(`Error loading plugin ${file}:`, e)
    }
  }
}

// بدء البوت
async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('./sessions')
  
  global.conn = makeWASocket({
    auth: state,
    printQRInTerminal: false // لا يظهر QR
  })

  // تحميل plugins
  await loadPlugins()

  // معالجة الرسائل
  conn.ev.on('messages.upsert', async (m) => {
    const message = m.messages[0]
    if (!message.message || message.key.fromMe) return
    
    try {
      const handler = (await import('./handler.js')).default
      await handler(message, { conn })
    } catch (error) {
      console.error('Handler error:', error)
    }
  })

  // أحداث الاتصال
  conn.ev.on('connection.update', (update) => {
    if (update.connection === 'open') {
      console.log('✅ البوت يعمل الآن!')
    }
  })
}

startBot()

// لـ Vercel
export default async function handler(req, res) {
  res.json({ status: 'Bot is running' })
}