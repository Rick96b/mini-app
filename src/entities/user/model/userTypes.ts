import { DatePickerDateFormat } from "@vkontakte/vkui";

export type UserInfo = {
    id?: number;
    name?: string;
    studyPlace?: string;
    birthDate?: DatePickerDateFormat;
    role?: 'User' | 'Manager'
    group?: string
}

export type UserContextType = {
    user: UserInfo | null
    setUser?: (user: UserInfo) => void | undefined
}