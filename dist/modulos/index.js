"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initBot_1 = require("../initBot");
var core_1 = require("../core");
var data_1 = require("../data");
var utils_1 = require("../utils");
var docentes_1 = require("./docentes");
var Index;
(function (Index) {
    var Metodos;
    (function (Metodos) {
        Metodos.sendMessageGetUserDocument = function (msg) {
            data_1.Chats.setConfiguracionInicial(msg.chat.id).then(function () {
                var messageOptions = {
                    parse_mode: 'HTML',
                    reply_markup: {
                        remove_keyboard: true
                    }
                };
                initBot_1.bot.sendMessage(msg.chat.id, "Hola <b>" + msg.from.first_name + "</b>, bienvenido al bot de SIHA, por favor ingrese su n\u00FAmero de identificaci\u00F3n", messageOptions);
            });
        };
        Metodos.sendMessageGetUserCode = function (chatId, parametrosComando) {
            data_1.Chats.updateChat(chatId, core_1.Contextos.Inicio.index, core_1.Comandos.Incio.getCodigo, parametrosComando).then(function () {
                var messageOptions = {
                    parse_mode: 'HTML'
                };
                initBot_1.bot.sendMessage(chatId, "por favor ingrese su c\u00F3digo de acceso", messageOptions);
            });
        };
        Metodos.sendMessageDocumentNotFound = function (chatId) {
            initBot_1.bot.sendMessage(chatId, "\u274C El documento que ingresaste no se encuentra registrado.");
        };
        Metodos.sendMessageInvalidDocument = function (chatId) {
            initBot_1.bot.sendMessage(chatId, "\u274C El documento que ingresaste no es valido, vuelve a intentarlo.");
        };
        Metodos.sendMessageInvalidCode = function (chatId) {
            initBot_1.bot.sendMessage(chatId, "\u274C El c\u00F3digo que ingresaste es incorrecto, vuelve a intentarlo.");
        };
    })(Metodos = Index.Metodos || (Index.Metodos = {}));
    var eventHandlers;
    (function (eventHandlers) {
        eventHandlers.listen = function () {
            initBot_1.bot.onText(/^\/start$/, function (msg) {
                Metodos.sendMessageGetUserDocument(msg);
            });
            initBot_1.bot.on('message', function (msg) {
                if (!msg.text || msg.text === '/start') {
                    return;
                }
                var chatId = msg.chat.id;
                var msgText = msg.text;
                data_1.Chats.getChat(chatId).then(function (userChat) {
                    if (userChat.contexto.indexOf(core_1.Contextos.Inicio.index) === 0 && userChat.comando.indexOf(core_1.Comandos.Incio.getDocumento) === 0) {
                        if (!utils_1.Validations.esNumeroRequeridoValido(msgText)) {
                            Metodos.sendMessageInvalidDocument(chatId);
                            return;
                        }
                        data_1.Usuarios.getUsuarioByDocumento(msgText).then(function (usuario) {
                            if (!usuario) {
                                Metodos.sendMessageDocumentNotFound(chatId);
                                return;
                            }
                            Metodos.sendMessageGetUserCode(chatId, JSON.stringify(usuario));
                        });
                    }
                    if (userChat.contexto.indexOf(core_1.Contextos.Inicio.index) === 0 && userChat.comando.indexOf(core_1.Comandos.Incio.getCodigo) === 0) {
                        var parametrosComando = null;
                        parametrosComando = JSON.parse(userChat.parametrosComando);
                        if (parametrosComando && msgText != parametrosComando.codigo) {
                            Metodos.sendMessageInvalidCode(chatId);
                            return;
                        }
                        switch (parametrosComando.rol) {
                            case core_1.Constants.Roles.RolAdministrador:
                                initBot_1.bot.sendMessage(chatId, "modulo en desarrollo");
                                break;
                            case core_1.Constants.Roles.RolProfesor:
                                docentes_1.Index.Metodos.sendMessageBienvenidaDocente(msg, userChat.parametrosComando);
                                break;
                            case core_1.Constants.Roles.RolDirector:
                                initBot_1.bot.sendMessage(chatId, "modulo en desarrollo");
                                break;
                            case core_1.Constants.Roles.RolAcudiente:
                                initBot_1.bot.sendMessage(chatId, "modulo en desarrollo");
                                break;
                        }
                    }
                });
            });
        };
    })(eventHandlers = Index.eventHandlers || (Index.eventHandlers = {}));
})(Index = exports.Index || (exports.Index = {}));
Index.eventHandlers.listen();
