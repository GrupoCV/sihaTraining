const TelegramBot = require('node-telegram-bot-api');
const token = '393865087:AAHQJhT3VuzkGV9XUMr3wh8C2CpkIMY61bI';
const url = 'https://siha-capacitacion.herokuapp.com/';
let bot = null;

declare const process: any;

if (process.env.NODE_ENV.trim() == 'development') {

  const devOptions = {
    polling: true
  };

  bot = new TelegramBot(token, devOptions);

} else {

  const prodOptions = {
    webHook: {
      port: process.env.PORT || 5000
    }
  }
  bot = new TelegramBot(token, prodOptions);

  bot.setWebHook(`${url}/bot${token}`);
}

export {
  bot
}