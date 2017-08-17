"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initDatabase_1 = require("../initDatabase");
var Chats;
(function (Chats) {
    Chats.guardarContextoChat = function (chatId, contexto) {
        return initDatabase_1.dataBase.ref('chats/' + chatId + '/contexto').set(contexto);
    };
})(Chats = exports.Chats || (exports.Chats = {}));
