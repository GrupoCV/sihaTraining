export interface User {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
}

export interface Chat {
    id: number;
    type: string;
    title?: string;
    username?: string;
    first_name?: string;
    last_name?: string;
}

//https://core.telegram.org/bots/api#inlinekeyboardbutton
export interface InlineKeyboardButton {
    text: string;
    url?: string;
    callback_data?: string;
    switch_inline_query?: string;
    switch_inline_query_current_chat?: string;
}

export interface InlineKeyboardMarkup {
    inline_keyboard: Array<Array<InlineKeyboardButton>>;
}

export interface KeyboardButton {
    text: string;
    request_contact?: boolean;
    request_location?: boolean;
}

export interface Contact {
    phone_number: string,
    first_name: string,
    last_name: string,
    user_id: number,
}

export interface Location {
    longitude: number;
    latitude: number;
}

export interface Message {
    message_id: number;
    from: User;
    date: number;
    chat: Chat;
    text: string;
    location: Location;
}

export interface ReplyKeyboardMarkup {
    keyboard: Array<Array<KeyboardButton>>;
    inline_keyboard?: Array<Array<InlineKeyboardButton>>;
    resize_keyboard?: boolean;
    one_time_keyboard?: boolean;
}

export interface ReplyKeyboardRemove {
    remove_keyboard: boolean;
}

export interface SendMessageOptions {
    parse_mode: string;
    reply_markup: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove;
}

export interface CallbackQuery {
    id: number,
    from: User,
    message: Message,
    inline_message_id: string,
    data: string
}

export interface EditMessageReplyMarkupOptions {
    message_id: number | string;
    chat_id: number;    
}

export interface EditMessageTextOptions {
    message_id: number | string;
    chat_id: number;
    reply_markup:InlineKeyboardMarkup;
    parse_mode:string;
}

// Inline mode 
//https://core.telegram.org/bots/api#inline-mode
export interface InlineQuery {
    id: string,
    from: User,
    location: Location,
    query: string
}

//https://core.telegram.org/bots/api#answerinlinequery
export interface AnswerInlineQuery {
    inline_query_id: string,
    results: Array<any>,
    cache_time: number,
}

export interface InputTextMessageContent {
    message_text: string,
    parse_mode: string
}

export interface InputContactMessageContent {
    phone_number: string,
    first_name: string,
    last_name: string
}

export interface InlineQueryResultContact {
    type: string,
    id: string,
    phone_number: string,
    first_name: string,
    last_name: string,
    reply_markup: InlineKeyboardMarkup,
    input_message_content: InputTextMessageContent | InputContactMessageContent,
    thumb_url: string,
    thumb_width: number,
    thumb_height: number
}

export interface ChosenInlineResult {
    result_id: string,
    from: User,
    location: Location,
    inline_message_id: string,
    query: string
}