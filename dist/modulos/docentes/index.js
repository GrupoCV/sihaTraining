"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initBot_1 = require("../../initBot");
var core_1 = require("../../core");
var chats_1 = require("../../data/chats");
var index_1 = require("../cursos/index");
var Index;
(function (Index) {
    var Options;
    (function (Options) {
        Options["registrarAusencia"] = "\u2705 Registrar ausencia";
        Options["enviarRecordatorio"] = "Enviar recordatorio";
        Options["mensajeAcudiente"] = "Mensaje acudiente";
    })(Options = Index.Options || (Index.Options = {}));
    var Metodos;
    (function (Metodos) {
        Metodos.sendMessageBienvenidaDocente = function (msg, parametrosComando) {
            var chatId = msg.chat.id;
            chats_1.Chats.updateChat(chatId, core_1.Contextos.Docente.index, core_1.Comandos.Docente.seleccionOpciones, parametrosComando).then(function () {
                var messageOptions = {
                    parse_mode: 'HTML',
                    reply_markup: {
                        one_time_keyboard: true,
                        keyboard: [
                            [
                                {
                                    text: Options.registrarAusencia
                                }
                            ],
                            [
                                {
                                    text: Options.enviarRecordatorio
                                }
                            ],
                            [
                                {
                                    text: Options.mensajeAcudiente
                                }
                            ]
                        ],
                    }
                };
                initBot_1.bot.sendMessage(chatId, "Bienvenido profesor <b>" + msg.from.first_name + "</b> \u00BFQue desea realizar?", messageOptions);
            });
        };
    })(Metodos = Index.Metodos || (Index.Metodos = {}));
    var eventHandlers;
    (function (eventHandlers) {
        eventHandlers.listen = function () {
            initBot_1.bot.on('message', function (msg) {
                if (!msg.text) {
                    return;
                }
                var chatId = msg.chat.id;
                chats_1.Chats.getChat(chatId).then(function (userChat) {
                    if (userChat.contexto.indexOf(core_1.Contextos.Docente.index) === 0 && userChat.comando.indexOf(core_1.Comandos.Docente.seleccionOpciones) === 0 &&
                        msg.text.indexOf(Options.registrarAusencia) === 0) {
                        var messageOptions = {
                            parse_mode: 'HTML',
                        };
                        index_1.Index.Metodos.sendMessageShowCursosDocente(msg, userChat.parametrosComando);
                    }
                });
            });
        };
    })(eventHandlers = Index.eventHandlers || (Index.eventHandlers = {}));
})(Index = exports.Index || (exports.Index = {}));
Index.eventHandlers.listen();
