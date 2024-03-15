import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { db } from "shared/firebase"
import { UserInfo } from "../model/userTypes"
import bridge from "@vkontakte/vk-bridge"

export const getUserById = async (userId: string) => {
    return (await getDoc(doc(db, `users/${userId}`))).data() as UserInfo
}

export const addUserToDb = async (user: UserInfo) => {
    const userId = await getUserId()
    setDoc(doc(db, `users/${userId}`), user)
}

export const getUserId = async () => {
    return (await bridge.send('VKWebAppGetLaunchParams')).vk_user_id
}

export const ApproveUserDocuments = async (userId: string) => {
    updateDoc(doc(db, `users/${userId}`), {
        isDocumentsApproved: true
    })
}