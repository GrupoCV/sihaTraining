"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TelegramBot = require('node-telegram-bot-api');
var token = '393865087:AAHQJhT3VuzkGV9XUMr3wh8C2CpkIMY61bI';
var url = 'https://siha-capacitacion.herokuapp.com/';
var bot = null;
exports.bot = bot;
if (process.env.NODE_ENV.trim() == 'development') {
    var devOptions = {
        polling: true
    };
    exports.bot = bot = new TelegramBot(token, devOptions);
}
else {
    var prodOptions = {
        webHook: {
            port: process.env.PORT || 5000
        }
    };
    exports.bot = bot = new TelegramBot(token, prodOptions);
    bot.setWebHook(url + "/bot" + token);
}
