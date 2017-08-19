"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initDatabase_1 = require("../initDatabase");
var common_1 = require("./common");
var constants_1 = require("../core/constants");
var Cursos;
(function (Cursos) {
    Cursos.getCursosDocente = function (chatId, idDocente) {
        return initDatabase_1.dataBase.ref(constants_1.FirebaseEntities.cursos).orderByChild("idDocente").equalTo(idDocente).once('value')
            .then(function (snapshot) {
            return common_1.getListFromFirebaseObject(snapshot.val());
        })
            .catch(function (error) {
            console.log("Cursos/getCursosDocente" + error);
        });
    };
})(Cursos = exports.Cursos || (exports.Cursos = {}));
