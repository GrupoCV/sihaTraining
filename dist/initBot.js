"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
import {
  TelegramBot as TelegramBotModel
} from './bot/TelegramBot';
*/
var TelegramBot = require('node-telegram-bot-api');
var token = '393865087:AAHQJhT3VuzkGV9XUMr3wh8C2CpkIMY61bI';
var url = 'https://siha-capacitacion.herokuapp.com/';
var prodOptions = {
    webHook: {
        port: process.env.PORT || 5000
    }
};
var devOptions = {
    polling: true
};
var bot = new TelegramBot(token, prodOptions);
exports.bot = bot;
bot.setWebHook(url + "/bot" + token);
