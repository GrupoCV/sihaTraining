import { dataBase } from "../initDatabase";

import {
    Contextos,
    ChatModel,
    Comandos,
    FirebaseEntities
} from "../core";

export namespace Chats {

    export const setContextoChat = (chatId: number, contexto: string): Promise<any> => {
        return dataBase.ref(FirebaseEntities.chats + '/' + chatId + '/contexto').set(contexto);
    }

    export const setComandoChat = (chatId: number, comando: string): Promise<any> => {
        return dataBase.ref(FirebaseEntities.chats + '/' + chatId + '/comando').set(comando);
    }

    export const setParametrosComandoChat = (chatId: number, parametrosComando: string): Promise<any> => {
        return dataBase.ref(FirebaseEntities.chats + '/' + chatId + '/parametrosComando').set(parametrosComando);
    }

    export const getChat = (chatId: number): Promise<ChatModel> => {
        return dataBase.ref(FirebaseEntities.chats + '/' + chatId).once('value')
            .then((snapshot: any) => {
                return snapshot.val();
            })
            .catch((error: any) => {
                console.log("Chats/getChat" + error);
            });
    }

    export const updateChat = (chatId: number, contexto: string, comando: string, parametrosComando?: any) => {
        return dataBase.ref(FirebaseEntities.chats + '/' + chatId).set({
            contexto,
            comando,
            parametrosComando
        });
    }

    export const setConfiguracionInicial = (chatId: number): Promise<any> => {
        return dataBase.ref(FirebaseEntities.chats + '/' + chatId).set({
            contexto: Contextos.Inicio.index,
            comando: Comandos.Incio.getDocumento,
            parametrosComando: ""
        });
    }

}