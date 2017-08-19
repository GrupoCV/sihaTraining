"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants;
(function (Constants) {
    var Roles;
    (function (Roles) {
        Roles[Roles["RolAdministrador"] = 1] = "RolAdministrador";
        Roles[Roles["RolProfesor"] = 2] = "RolProfesor";
        Roles[Roles["RolDirector"] = 3] = "RolDirector";
        Roles[Roles["RolAcudiente"] = 4] = "RolAcudiente";
    })(Roles = Constants.Roles || (Constants.Roles = {}));
    var Chat;
    (function (Chat) {
        var Contextos;
        (function (Contextos) {
            var Inicio;
            (function (Inicio) {
                Inicio.index = 'PaginaInicial/index';
            })(Inicio = Contextos.Inicio || (Contextos.Inicio = {}));
            var Docente;
            (function (Docente) {
                Docente.index = "Docente/index";
            })(Docente = Contextos.Docente || (Contextos.Docente = {}));
            var Cursos;
            (function (Cursos) {
                Cursos.index = "Cursos/index";
            })(Cursos = Contextos.Cursos || (Contextos.Cursos = {}));
        })(Contextos = Chat.Contextos || (Chat.Contextos = {}));
        var Comandos;
        (function (Comandos) {
            var Incio;
            (function (Incio) {
                Incio.getDocumento = 'getDocumento';
                Incio.getCodigo = 'getCodigo';
            })(Incio = Comandos.Incio || (Comandos.Incio = {}));
            var Docente;
            (function (Docente) {
                Docente.seleccionOpciones = "seleccionOpciones";
                Docente.registrarAusencia = "✅ Registrar ausencia";
                Docente.enviarRecordatorio = "Enviar recordatorio";
                Docente.mensajeAcudiente = "Mensaje a acudiente";
            })(Docente = Comandos.Docente || (Comandos.Docente = {}));
            var Cursos;
            (function (Cursos) {
                Cursos.listarCursosDocente = 'listarCursosDocente';
            })(Cursos = Comandos.Cursos || (Comandos.Cursos = {}));
        })(Comandos = Chat.Comandos || (Chat.Comandos = {}));
    })(Chat = Constants.Chat || (Constants.Chat = {}));
    var FirebaseEntities;
    (function (FirebaseEntities) {
        FirebaseEntities.chats = 'chats';
        FirebaseEntities.usuarios = 'usuarios';
        FirebaseEntities.docentes = 'docentes';
        FirebaseEntities.cursos = 'cursos';
    })(FirebaseEntities = Constants.FirebaseEntities || (Constants.FirebaseEntities = {}));
})(Constants = exports.Constants || (exports.Constants = {}));
exports.Contextos = Constants.Chat.Contextos;
exports.Comandos = Constants.Chat.Comandos;
exports.FirebaseEntities = Constants.FirebaseEntities;
