import { bot } from "../initBot";

import { Chats } from "../data/chats";
import { Constants } from "../core";
import { Index as DocentesIndex } from "./docentes";

export namespace Index {

    export namespace eventHandlers {

        export const listen = () => {

            bot.onText(/\/start/, (msg: any) => {

                Chats.guardarContextoChat(msg.from.id, Constants.Chat.Contextos.Inicio.index).then(() => {
                    DocentesIndex.Metodos.sendMessageBienvenidaDocente(msg);
                });
            });
        }
    }

}

Index.eventHandlers.listen();