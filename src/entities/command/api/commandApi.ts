import { arrayUnion, collection, doc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "shared/firebase"
import { Command } from "../model/commandTypes"

export const addUserToCommand = async (userId:string, commandId: string) => {
    updateDoc(doc(db, `commands/${commandId}`), {
        members: arrayUnion(userId)
    })
}

export const getAllCommands = async (command: Command) => {
    let result: Command[] = []
    const commandsCollection = (await getDocs(collection(db, 'commands')))
    commandsCollection.forEach(command => {
        result.push(command.data() as Command)
    });
    return result
}