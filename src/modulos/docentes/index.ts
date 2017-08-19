import { bot } from "../../initBot";
import { Message, ReplyKeyboardMarkup, SendMessageOptions } from "../../api/ApiModels";
import {
    Constants,
    Contextos,
    ChatModel,
    Comandos,
    CursosModel
} from "../../core";
import { Chats } from "../../data/chats";
import { Index as CursosIndex } from "../cursos/index";

export namespace Index {

    export enum Options {
        registrarAusencia = "✅ Registrar ausencia",
        enviarRecordatorio = "Enviar recordatorio",
        mensajeAcudiente = "Mensaje acudiente",
    }

    export namespace Metodos {

        export const sendMessageBienvenidaDocente = (msg: Message, parametrosComando?: string) => {

            let chatId = msg.chat.id;

            Chats.updateChat(chatId, Contextos.Docente.index, Comandos.Docente.seleccionOpciones, parametrosComando).then(() => {
                let messageOptions = {
                    parse_mode: 'HTML',
                    reply_markup: {
                        one_time_keyboard: true,
                        keyboard: [
                            [
                                {
                                    text: Options.registrarAusencia
                                }
                            ],
                            [
                                {
                                    text: Options.enviarRecordatorio
                                }
                            ],
                            [
                                {
                                    text: Options.mensajeAcudiente
                                }
                            ]
                        ],
                    } as ReplyKeyboardMarkup
                } as SendMessageOptions;

                bot.sendMessage(
                    chatId,
                    `Bienvenido profesor <b>${msg.from.first_name}</b> ¿Que desea realizar?`,
                    messageOptions
                );
            });
        }
    }

    export namespace eventHandlers {

        export const listen = () => {

            bot.on('message', (msg: Message) => {

                if (!msg.text) {
                    return;
                }

                let chatId = msg.chat.id;

                Chats.getChat(chatId).then((userChat: ChatModel) => {

                    if (userChat.contexto.indexOf(Contextos.Docente.index) === 0 && userChat.comando.indexOf(Comandos.Docente.seleccionOpciones) === 0 &&
                        msg.text.indexOf(Options.registrarAusencia) === 0) {

                        let messageOptions = {
                            parse_mode: 'HTML',
                        }

                        CursosIndex.Metodos.sendMessageShowCursosDocente(msg, userChat.parametrosComando);
                    }
                });
            });

        }
    }

}

Index.eventHandlers.listen();