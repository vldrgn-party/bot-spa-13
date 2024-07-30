const TelegramBot = require('node-telegram-bot-api');

const token = '7283424164:AAGCdu75_FAbPvk8ylcUEoRpqJzfKDYEhXM';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    async function startBot() {
        const menu_game = {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "▶️ Играть сейчас",
                            web_app: {url: "https://pro-gaming.site/wKJcks"},
                        },
                    ],
                    [
                        {
                            text: "🌐 Web - версия",
                            url: "https://pro-gaming.site/wKJcks",
                        },
                    ],
                    [
                        {
                            text: "🐉 Официальный канал",
                            url: "https://t.me/dragonmoney",
                        },
                    ],
                    [
                        {
                            text: "💰 Бонусы",
                            url: "https://t.me/dragonmoney",
                        },
                    ],
                ],
            },
            parse_mode: 'HTML'
        }

        if (text === '/start') {
            await bot.sendPhoto(chatId, './img/home.jpg');
            await bot.sendMessage(chatId, "💰 Добро пожаловать в Dragon money! 🐉 \n\n Теперь вы можете играть прямо в \n телеграм!", menu_game)
        }
    }
    startBot()
})