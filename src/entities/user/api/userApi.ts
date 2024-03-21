import { collection, doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore"
import { db } from "shared/firebase"
import { UserInfo } from "../model/userTypes"
import bridge from "@vkontakte/vk-bridge"

export const getUserById = async (userId: string) => {
    return (await getDoc(doc(db, `users/${userId}`))).data() as UserInfo
}

export const addUserToDb = async (user: UserInfo) => {
    const userInfo = (await bridge.send('VKWebAppGetUserInfo'))
    const userAvatar = userInfo.photo_100
    const userId = userInfo.id
    setDoc(doc(db, `users/${userId}`), {...user, id: userId, imageLink: userAvatar})
}

export const ApproveUserDocuments = async (userId: string) => {
    updateDoc(doc(db, `users/${userId}`), {
        isDocumentsApproved: true
    })
}

export const getAllUsersSubscribe = (callback: (users: UserInfo[]) => void) => 
    onSnapshot(collection(db, "users"), (users) => {
    let result: UserInfo[] = []
    users.forEach(user => {
        result.push(user.data() as UserInfo)
    });
    callback(result)
});

export const changeUserRole = async (userId: number, role: string) => {
    updateDoc(doc(db, `users/${userId}`), {
        role: role
    })
}
