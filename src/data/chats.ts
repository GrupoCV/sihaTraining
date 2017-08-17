import { dataBase } from "../initDatabase";

export namespace Chats {

    export const guardarContextoChat = (chatId: any, contexto: string): Promise<any> => {
        return dataBase.ref('chats/' + chatId + '/contexto').set(contexto);
    }

}