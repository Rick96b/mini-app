import { arrayUnion, collection, doc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "shared/firebase"
import { Command } from "../model/commandTypes"

export const addUserToCommand = async (userId:string, commandId: string) => {
    updateDoc(doc(db, `commands/${commandId}`), {
        members: arrayUnion(userId)
    })
}

export const getAllCommands = async () => {
    let result: Command[] = []
    const commandsCollection = (await getDocs(collection(db, 'commands')))
    commandsCollection.forEach(command => {
        result.push(command.data() as Command)
    });
    return result
}

export const updateRaiting = async (command: Command, raiting: number, message: string) => {
    updateDoc(doc(db, 'commands', command.name), {
        raiting: command.raiting + raiting,
        raiting_history: arrayUnion({
            raiting: raiting,
            message: message
        })
    })
}