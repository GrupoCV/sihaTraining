import { bot } from "../../initBot";
import { ApiMessage } from "../../api/apiMessage";
import { Message, ReplyKeyboardMarkup, SendMessageOptions } from "../../api/ApiModels";

import {
    Contextos,
    Comandos,
    CursosModel,
    ChatModel
} from "../../core";

import {
    Chats,
    Cursos as CursosData
} from "../../data";

export namespace Index {

    export enum Options {
        Saldos = 'Saldos',
        Extracto = 'Extracto',
        Movimientos = 'Movimientos',
        Volver = "<< Volver"
    }

    export namespace Metodos {

        export const sendMessageShowCursosDocente = (msg: Message, parametrosComando: string) => {

            let chatId = msg.chat.id;

            let parametrosDocente = JSON.parse(parametrosComando);

            Chats.updateChat(chatId, Contextos.Cursos.index, Comandos.Cursos.listarCursosDocente, '').then(() => {

                CursosData.getCursosDocente(chatId, parseInt(parametrosDocente.id)).then((cursosDocente: Array<CursosModel>) => {

                    if (cursosDocente.length == 0) {
                        sendMessageError(chatId, 'No se encuentra asignado a ningun curso');
                        return;
                    }

                    let inline_keyboard_options = new Array();

                    for (var i = 0; i < cursosDocente.length; i++) {
                        inline_keyboard_options.push(new Array(
                            {
                                text: cursosDocente[i].nombre,
                                callback_data: cursosDocente[i].nombre
                            }
                        ));
                    }

                    let messageOptions = {
                        parse_mode: 'HTML',
                        reply_markup: {
                            one_time_keyboard: true,
                            inline_keyboard: inline_keyboard_options
                        } as ReplyKeyboardMarkup
                    } as SendMessageOptions;

                    bot.sendMessage(chatId, "Seleccione un curso", messageOptions);
                });
            });
        }

        export const sendMessageError = (chatId: number, errorMessage: string) => {
            bot.sendMessage(chatId, `<i>${errorMessage}</i>`, { parse_mode: 'HTML' });
        }

    }

    export namespace eventHandlers {

        export const listen = () => {

            bot.on('message', (msg: Message) => {

                if (!msg.text) {
                    return;
                }

            });


            bot.on('callback_query', (msg: ApiMessage) => {

                if (!msg.data) {
                    return;
                }
              
                let chatId = msg.from.id;

                Chats.getChat(chatId).then((userChat: ChatModel) => {

                    if (userChat.contexto.indexOf(Contextos.Cursos.index) === 0 && userChat.comando.indexOf(Comandos.Cursos.listarCursosDocente) === 0) {
                        bot.sendMessage(msg.from.id, `Ha seleccionado <b>${msg.data}</b>`, { parse_mode: 'HTML' });
                    }

                });
            });

        }

    }
}

Index.eventHandlers.listen();