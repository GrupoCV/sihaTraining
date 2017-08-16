"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initBot_1 = require("../initBot");
var docentes_1 = require("../docentes");
var SihaApp;
(function (SihaApp) {
    var Mensajes;
    (function (Mensajes) {
        initBot_1.bot.onText(/\/start/, function (msg) {
            docentes_1.Index.Metodos.sendMessage(msg);
        });
    })(Mensajes = SihaApp.Mensajes || (SihaApp.Mensajes = {}));
})(SihaApp = exports.SihaApp || (exports.SihaApp = {}));
