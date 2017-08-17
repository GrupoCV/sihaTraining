"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants;
(function (Constants) {
    var Chat;
    (function (Chat) {
        var Contextos;
        (function (Contextos) {
            var Inicio;
            (function (Inicio) {
                Inicio.index = "Inicio/index";
            })(Inicio = Contextos.Inicio || (Contextos.Inicio = {}));
        })(Contextos = Chat.Contextos || (Chat.Contextos = {}));
        var Comandos;
        (function (Comandos) {
            var Inicio;
            (function (Inicio) {
                Inicio.index = "ingresarComando";
            })(Inicio = Comandos.Inicio || (Comandos.Inicio = {}));
        })(Comandos = Chat.Comandos || (Chat.Comandos = {}));
    })(Chat = Constants.Chat || (Constants.Chat = {}));
})(Constants = exports.Constants || (exports.Constants = {}));
exports.Contextos = Constants.Chat.Contextos;
exports.Comandos = Constants.Chat.Comandos;
