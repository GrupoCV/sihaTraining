"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initBot_1 = require("../initBot");
var chats_1 = require("../data/chats");
var core_1 = require("../core");
var docentes_1 = require("./docentes");
var Index;
(function (Index) {
    var eventHandlers;
    (function (eventHandlers) {
        eventHandlers.listen = function () {
            initBot_1.bot.onText(/\/start/, function (msg) {
                chats_1.Chats.guardarContextoChat(msg.from.id, core_1.Constants.Chat.Contextos.Inicio.index).then(function () {
                    docentes_1.Index.Metodos.sendMessageBienvenidaDocente(msg);
                });
            });
        };
    })(eventHandlers = Index.eventHandlers || (Index.eventHandlers = {}));
})(Index = exports.Index || (exports.Index = {}));
Index.eventHandlers.listen();
