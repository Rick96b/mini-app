import { DatePickerDateFormat } from "@vkontakte/vkui";

export type UserInfo = {
    id?: number;
    name?: string;
    studyPlace?: string;
    birthDate?: DatePickerDateFormat;
    role?: 'User' | 'Manager' | 'Bank'
    group?: string
    isDocumentsApproved?: boolean
}

export type UserContextType = {
    user: UserInfo | null
    setUser?: (user: UserInfo) => void | undefined
}