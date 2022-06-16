import { IUser } from "@app-types/IUser";
import { INotificationType } from "./INotificationType";

export interface IStorageKey {
    USER: IUser
    MESSAGING_TOKEN_KEY: string
    BACKEND_TOKEN_KEY: string
    BACKGROUND_PRESS_NOTIFICATION_TYPE: INotificationType
}
