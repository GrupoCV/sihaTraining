/*
import {
  TelegramBot as TelegramBotModel
} from './bot/TelegramBot';
*/
const TelegramBot = require('node-telegram-bot-api');
const token = '393865087:AAHQJhT3VuzkGV9XUMr3wh8C2CpkIMY61bI';

declare const process: any;

const prodOptions = {
  webHook: {
    port: process.env.PORT || 5000
  }
}

const devOptions = {
  polling: true
};

const bot = new TelegramBot(token, prodOptions);

export {
  bot
}

