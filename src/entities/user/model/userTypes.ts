import { DatePickerDateFormat } from "@vkontakte/vkui";

export type UserInfo = {
    id?: number;
    name?: string;
    studyPlace?: string;
    birthDate?: DatePickerDateFormat;
    role?: 'User' | 'Manager' | 'Bank' | 'Stock' 
    group?: string
    isDocumentsApproved?: boolean
    imageLink?: string
}

export type UserContextType = {
    user: UserInfo | null
    setUser?: (user: UserInfo) => void | undefined
}