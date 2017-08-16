"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initBot_1 = require("../initBot");
var Index;
(function (Index) {
    var Options;
    (function (Options) {
        Options["registrarAusencia"] = "Registrar ausencia";
        Options["enviarRecordatorio"] = "Enviar recordatorio";
        Options["mensajeAcudiente"] = "Mensaje acudiente";
    })(Options = Index.Options || (Index.Options = {}));
    var Metodos;
    (function (Metodos) {
        Metodos.sendMessage = function (msg) {
            var messageOptions = {
                parse_mode: 'HTML',
                reply_markup: {
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
                    ]
                }
            };
            initBot_1.bot.sendMessage(msg.chat.id, "Profesor <b>" + msg.from.first_name + "</b> \u00BFQue desea realizar?", messageOptions);
        };
    })(Metodos = Index.Metodos || (Index.Metodos = {}));
    var EventHandlers;
    (function (EventHandlers) {
        EventHandlers.listen = function () {
            initBot_1.bot.on('message', function (msg) {
                if (!msg.text) {
                    return;
                }
                if (msg.text.indexOf("Registrar ausencia") === 0) {
                    var messageOptions = {
                        parse_mode: 'HTML',
                    };
                    initBot_1.bot.sendMessage(msg.chat.id, "Ausencia registrada", messageOptions);
                }
            });
        };
    })(EventHandlers = Index.EventHandlers || (Index.EventHandlers = {}));
})(Index = exports.Index || (exports.Index = {}));
Index.EventHandlers.listen();
