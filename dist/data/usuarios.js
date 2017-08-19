"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initDatabase_1 = require("../initDatabase");
var common_1 = require("./common");
var constants_1 = require("../core/constants");
var Usuarios;
(function (Usuarios) {
    Usuarios.getUsuarioByDocumento = function (documento) {
        return initDatabase_1.dataBase.ref(constants_1.FirebaseEntities.usuarios).once("value")
            .then(function (snapshot) {
            if (!snapshot.val()) {
                return null;
            }
            var usuarios = common_1.getListFromFirebaseObject(snapshot.val());
            var usuarioAutenticado = usuarios[usuarios.findIndex(function (usuario) { return usuario.id == documento; })];
            return usuarioAutenticado;
        })
            .catch(function (error) {
            console.log("Usuarios/getUsuarioByDocumento: " + error);
            return null;
        });
    };
})(Usuarios = exports.Usuarios || (exports.Usuarios = {}));
