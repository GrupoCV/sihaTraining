import { User, Message } from "./ApiModels";

export interface ApiMessage {
    id: number | string;
    from: User;
    message: Message;
    chat_instance: string;
    data: string;
    query: string;
    result_id: number;
}