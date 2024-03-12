import { doc, getDoc } from "firebase/firestore"
import { managerCodes, userCodes } from "shared/configs/codes"
import { db } from "shared/firebase"

// возвращает принадлежность пользователя к роли
export const checkUserCode = (code: string) => {
    type userAffiliation = {role: 'User' | 'Manager', group: string}

    const managerRole = managerCodes.includes(code) ? {role: 'Manager', group: ''} : undefined
    const userRole = userCodes.includes(code) ? {role: 'User', group: code} : undefined

    return managerRole ? managerRole as userAffiliation : userRole as userAffiliation
}