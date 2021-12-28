const TelegramBot = require(`node-telegram-bot-api`);

const token = `5029984312:AAGpWf-8DqxHnxIfdBiOCDtq1RqrNwaxbcM`;

const bot = new TelegramBot(token, {polling: true});

bot.on(`message`, msg => {
    const {id: id, first_name: userName} = msg.chat; 

    if (/Привіт/gi.test(msg.text)) {
        bot.sendMesssage(id, `Привіт ${userName}`);
    }
    

});

