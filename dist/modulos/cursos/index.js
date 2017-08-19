"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initBot_1 = require("../../initBot");
var core_1 = require("../../core");
var data_1 = require("../../data");
var Index;
(function (Index) {
    var Options;
    (function (Options) {
        Options["Saldos"] = "Saldos";
        Options["Extracto"] = "Extracto";
        Options["Movimientos"] = "Movimientos";
        Options["Volver"] = "<< Volver";
    })(Options = Index.Options || (Index.Options = {}));
    var Metodos;
    (function (Metodos) {
        Metodos.sendMessageShowCursosDocente = function (msg, parametrosComando) {
            var chatId = msg.chat.id;
            var parametrosDocente = JSON.parse(parametrosComando);
            data_1.Chats.updateChat(chatId, core_1.Contextos.Cursos.index, core_1.Comandos.Cursos.listarCursosDocente, '').then(function () {
                data_1.Cursos.getCursosDocente(chatId, parseInt(parametrosDocente.id)).then(function (cursosDocente) {
                    if (cursosDocente.length == 0) {
                        Metodos.sendMessageError(chatId, 'No se encuentra asignado a ningun curso');
                        return;
                    }
                    var inline_keyboard_options = new Array();
                    for (var i = 0; i < cursosDocente.length; i++) {
                        inline_keyboard_options.push(new Array({
                            text: cursosDocente[i].nombre,
                            callback_data: cursosDocente[i].nombre
                        }));
                    }
                    var messageOptions = {
                        parse_mode: 'HTML',
                        reply_markup: {
                            one_time_keyboard: true,
                            inline_keyboard: inline_keyboard_options
                        }
                    };
                    initBot_1.bot.sendMessage(chatId, "Seleccione un curso", messageOptions);
                });
            });
        };
        Metodos.sendMessageError = function (chatId, errorMessage) {
            initBot_1.bot.sendMessage(chatId, "<i>" + errorMessage + "</i>", { parse_mode: 'HTML' });
        };
    })(Metodos = Index.Metodos || (Index.Metodos = {}));
    var eventHandlers;
    (function (eventHandlers) {
        eventHandlers.listen = function () {
            initBot_1.bot.on('message', function (msg) {
                if (!msg.text) {
                    return;
                }
            });
            initBot_1.bot.on('callback_query', function (msg) {
                if (!msg.data) {
                    return;
                }
                var chatId = msg.from.id;
                data_1.Chats.getChat(chatId).then(function (userChat) {
                    if (userChat.contexto.indexOf(core_1.Contextos.Cursos.index) === 0 && userChat.comando.indexOf(core_1.Comandos.Cursos.listarCursosDocente) === 0) {
                        initBot_1.bot.sendMessage(msg.from.id, "Ha seleccionado <b>" + msg.data + "</b>", { parse_mode: 'HTML' });
                    }
                });
            });
        };
    })(eventHandlers = Index.eventHandlers || (Index.eventHandlers = {}));
})(Index = exports.Index || (exports.Index = {}));
Index.eventHandlers.listen();
