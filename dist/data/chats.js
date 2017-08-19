"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initDatabase_1 = require("../initDatabase");
var core_1 = require("../core");
var Chats;
(function (Chats) {
    Chats.setContextoChat = function (chatId, contexto) {
        return initDatabase_1.dataBase.ref(core_1.FirebaseEntities.chats + '/' + chatId + '/contexto').set(contexto);
    };
    Chats.setComandoChat = function (chatId, comando) {
        return initDatabase_1.dataBase.ref(core_1.FirebaseEntities.chats + '/' + chatId + '/comando').set(comando);
    };
    Chats.setParametrosComandoChat = function (chatId, parametrosComando) {
        return initDatabase_1.dataBase.ref(core_1.FirebaseEntities.chats + '/' + chatId + '/parametrosComando').set(parametrosComando);
    };
    Chats.getChat = function (chatId) {
        return initDatabase_1.dataBase.ref(core_1.FirebaseEntities.chats + '/' + chatId).once('value')
            .then(function (snapshot) {
            return snapshot.val();
        })
            .catch(function (error) {
            console.log("Chats/getChat" + error);
        });
    };
    Chats.updateChat = function (chatId, contexto, comando, parametrosComando) {
        return initDatabase_1.dataBase.ref(core_1.FirebaseEntities.chats + '/' + chatId).set({
            contexto: contexto,
            comando: comando,
            parametrosComando: parametrosComando
        });
    };
    Chats.setConfiguracionInicial = function (chatId) {
        return initDatabase_1.dataBase.ref(core_1.FirebaseEntities.chats + '/' + chatId).set({
            contexto: core_1.Contextos.Inicio.index,
            comando: core_1.Comandos.Incio.getDocumento,
            parametrosComando: ""
        });
    };
})(Chats = exports.Chats || (exports.Chats = {}));
