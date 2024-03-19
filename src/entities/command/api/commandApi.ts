import { arrayUnion, collection, doc, getDoc, getDocs, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from "shared/firebase"
import { Command } from "../model/commandTypes"


// получает все коммакды
export const getAllCommands = async () => {
    let result: Command[] = []
    const commandsCollection = (await getDocs(collection(db, 'commands')))
    commandsCollection.forEach(command => {
        result.push(command.data() as Command)
    });
    return result
}

// получить комманду по имени
export const getCommandByName = async (commandName:string) => {
    return (await getDoc(doc(db, `commands/${commandName}`))).data() as Command
}

// обновляет счёт комманды
export const updateRaiting = async (command: Command, raiting: number, message: string) => {
    updateDoc(doc(db, 'commands', command.name), {
        raiting: command.raiting + raiting,
        raiting_history: arrayUnion({
            raiting: raiting,
            message: message
        })
    })
}

// добавляет пользователя в комманду
export const addUserToCommand = async (userId:string, commandId: string) => {
    updateDoc(doc(db, `commands/${commandId}`), {
        members: arrayUnion(userId)
    })
}

export const getAllCommandsSubscribe = (setNewCommands: (commands: Command[]) => void) => 
                                        onSnapshot(collection(db, "commands"), (commands) => {
    let result: Command[] = []
    commands.forEach(command => {
        result.push(command.data() as Command)
    });
    setNewCommands(result)
});
