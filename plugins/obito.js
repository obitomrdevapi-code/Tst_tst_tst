let handler = async (m, { text, conn, usedPrefix, command }) => {
  
  if (!text || isNaN(text)) {
    return m.reply(`*الرجاء تقديم رقم شخصية لمعرفة المقولة الخاصة بها يا أخي العزيز 🍎🙂*\n\n*شخصيات المتوفرة ⇩⇩*\n\n*│✮ ⃟0️❯ اوبيتو اوتشيها 💀*\n*│✮ ⃟1️❯ ناروتو أوزوماكي 💀*\n*│✮ ⃟2️❯ إيتاتشي أوجيها 💀*\n*│✮ ⃟3️❯ ساكورا هارون 💀*\n*│✮ ⃟4️❯ غوجو ساتورو 💀*`);
  }

  const quotes = [
    {
      "index": 0,
      "autor": "أوبيتو أوتشيها",
      "obito": "ناروتو",
      "fgwork": "إذا كنت تريد أن تغير العالم، يجب أن تكون مستعدًا للتضحية" 
    },
    {
      "index": 1,
      "autor": "ناروتو أوزوماكي",
      "obito": "ناروتو",
      "fgwork": "أنا لن أستسلم أبدا سأصبح هوكاجي وسأجعل الجميع يعترف بي!" 
    },
    {
      "index": 2,
      "autor": "إيتاتشي أوجيها",
      "obito": "ناروتو",
      "fgwork": "الألم هو شيء لا مفر منه، ولكن السعي وراء القوة الحقيقية هو ما يحدد مصيرك" 
    },
    {
      "index": 3,
      "autor": "ساكورا هارونو",
      "obito": "ناروتو",
      "fgwork": "لن أتوقف عن التدريب حتى أصبح قوية بما فيه الكفاية لحماية أصدقائي" 
    },
    {
      "index": 4,
      "autor": "غوجو",
      "obito": "دراغون بول",
      "fgwork": "أنا لا أقاتل من أجل الفوز، بل أقاتل من أجل أن أصبح أقوى" 
    }
  ];

  const index = parseInt(text);

  if (index < 0 || index >= quotes.length) {
    return m.reply(`رقم غير صحيح. يجب أن يكون بين 0 و ${quotes.length - 1}`);
  }

  const quote = quotes[index];

  await m.reply(`‏⏣━ ━─━━𖥻⟬⚡⟭𖥻━━─━ ━⏣\n│✮ ⃟🌟❯ رقم الشخصية التي طلبتها ⇩⇩\n${index} 🌹\n│✮ ⃟🗒️❯ اسم شخصية ⇩⇩\n${quote.autor} 🌙\n│✮ ⃟📚❯ اسم أنمي الشخصية ⇩⇩\n${quote.obito} 👒\n│✮ ⃟💫❯ المقولة الخاصة بالشخصية ⇩⇩\n${quote.fgwork} 🔥\n⏣━ ━─━━𖥻⟬⚡⟭𖥻━━─━ ━⏣`);
};

handler.command = /^م/i; 
handler.help = ['مه <رقم>'];
handler.tags = ['tools'];

export default handler;
