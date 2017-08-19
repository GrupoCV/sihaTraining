export namespace Constants {

    export enum Roles {
        RolAdministrador = 1,
        RolProfesor = 2,
        RolDirector = 3,
        RolAcudiente = 4, // ve los cursos donde esta sus hijos
    }

    export namespace Chat {

        export namespace Contextos {

            export namespace Inicio {
                export const index = 'PaginaInicial/index';
            }

            export namespace Docente {
                export const index = "Docente/index";
            }

            export namespace Cursos {
                export const index = "Cursos/index"
            }

        }

        export namespace Comandos {


            export namespace Incio {
                export const getDocumento = 'getDocumento';
                export const getCodigo = 'getCodigo';
            }

            export namespace Docente {
                export const seleccionOpciones = "seleccionOpciones";
                export const registrarAusencia = "✅ Registrar ausencia";
                export const enviarRecordatorio = "Enviar recordatorio";
                export const mensajeAcudiente = "Mensaje a acudiente";
            }

            export namespace Cursos {
                export const listarCursosDocente = 'listarCursosDocente';
            }

        }
    }

    export namespace FirebaseEntities {
        export const chats = 'chats';
        export const usuarios = 'usuarios';
        export const docentes = 'docentes';
        export const cursos = 'cursos';
    }

}

export const Contextos = Constants.Chat.Contextos;
export const Comandos = Constants.Chat.Comandos;
export const FirebaseEntities = Constants.FirebaseEntities;