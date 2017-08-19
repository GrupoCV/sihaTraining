import { bot } from "../initBot";
import { Message, SendMessageOptions } from "../api/ApiModels";
import { ChatModel, UsuarioModel, Contextos, Comandos, Constants } from "../core";
import { Chats, Usuarios } from "../data";
import { Validations } from "../utils";

import { Index as IndexDocentes } from "./docentes";

export namespace Index {

    export namespace Metodos {

        export const sendMessageGetUserDocument = (msg: Message) => {

            Chats.setConfiguracionInicial(msg.chat.id).then(() => {
                const messageOptions = {
                    parse_mode: 'HTML',
                    reply_markup: {
                        remove_keyboard: true
                    }
                } as SendMessageOptions;

                bot.sendMessage(
                    msg.chat.id,
                    `Hola <b>${msg.from.first_name}</b>, bienvenido al bot de SIHA, por favor ingrese su número de identificación`,
                    messageOptions
                );
            });
        };

        export const sendMessageGetUserCode = (chatId: number, parametrosComando: string | number) => {

            Chats.updateChat(chatId, Contextos.Inicio.index, Comandos.Incio.getCodigo, parametrosComando).then(() => {
                const messageOptions = {
                    parse_mode: 'HTML'
                } as SendMessageOptions;

                bot.sendMessage(
                    chatId,
                    `por favor ingrese su código de acceso`,
                    messageOptions
                );
            });
        };

        export const sendMessageDocumentNotFound = (chatId: number) => {
            bot.sendMessage(chatId, `❌ El documento que ingresaste no se encuentra registrado.`);
        };

        export const sendMessageInvalidDocument = (chatId: number) => {
            bot.sendMessage(chatId, `❌ El documento que ingresaste no es valido, vuelve a intentarlo.`);
        };

        export const sendMessageInvalidCode = (chatId: number) => {
            bot.sendMessage(chatId, `❌ El código que ingresaste es incorrecto, vuelve a intentarlo.`);
        };

    }

    export namespace eventHandlers {

        export const listen = () => {

            bot.onText(/^\/start$/, (msg: Message) => {
                Metodos.sendMessageGetUserDocument(msg);
            });

            bot.on('message', (msg: Message) => {

                if (!msg.text || msg.text === '/start') {
                    return;
                }

                let chatId = msg.chat.id;
                let msgText = msg.text;

                Chats.getChat(chatId).then((userChat: ChatModel) => {

                    if (userChat.contexto.indexOf(Contextos.Inicio.index) === 0 && userChat.comando.indexOf(Comandos.Incio.getDocumento) === 0) {

                        if (!Validations.esNumeroRequeridoValido(msgText)) {
                            Metodos.sendMessageInvalidDocument(chatId);
                            return;
                        }

                        Usuarios.getUsuarioByDocumento(msgText).then((usuario: UsuarioModel) => {

                            if (!usuario) {
                                Metodos.sendMessageDocumentNotFound(chatId);
                                return;
                            }

                            Metodos.sendMessageGetUserCode(chatId, JSON.stringify(usuario));
                        });

                    }

                    if (userChat.contexto.indexOf(Contextos.Inicio.index) === 0 && userChat.comando.indexOf(Comandos.Incio.getCodigo) === 0) {

                        let parametrosComando = null;
                        parametrosComando = JSON.parse(userChat.parametrosComando);

                        if (parametrosComando && msgText != parametrosComando.codigo) {
                            Metodos.sendMessageInvalidCode(chatId);
                            return;
                        }

                        switch (parametrosComando.rol) {
                            case Constants.Roles.RolAdministrador:
                                bot.sendMessage(chatId, "modulo en desarrollo");
                                break;
                            case Constants.Roles.RolProfesor:
                                IndexDocentes.Metodos.sendMessageBienvenidaDocente(msg, userChat.parametrosComando);
                                break;
                            case Constants.Roles.RolDirector:
                                bot.sendMessage(chatId, "modulo en desarrollo");
                                break;
                            case Constants.Roles.RolAcudiente:
                                bot.sendMessage(chatId, "modulo en desarrollo");
                                break;
                        }
                    }

                });

            });
        }
    }
}

Index.eventHandlers.listen();