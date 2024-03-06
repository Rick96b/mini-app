import { doc, getDoc } from "firebase/firestore"
import { managerCodes, userCodes } from "shared/configs/codes"
import { db } from "shared/firebase"

export const checkUserCode = (code: string) => {
    type userAffiliation = {role: 'User' | 'Manager', group: string}

    const managerRole = code in managerCodes ? {role: 'Manager', group: ''} : undefined
    const userRole = code in userCodes ? {role: 'User', group: code} : undefined

    return managerRole ? managerRole as userAffiliation : userRole as userAffiliation
}