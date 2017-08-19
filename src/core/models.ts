import { Constants } from "./constants";

export interface IModel {
    id: string | number;
}

export interface UsuarioModel extends IModel {
    id: number | string;
    codigo: number | string;
    rol: Constants.Roles
}

export interface ChatModel extends IModel {
    id: number | string;
    contexto: string;
    comando: string;
    parametrosComando: string;
}

export interface CursosModel extends IModel {
    id: number | string;
    idDocente: number,
    idInstitucion: string,
    nombre: string;
}