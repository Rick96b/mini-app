import { arrayRemove, arrayUnion, collection, doc, getDoc, getDocs, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from "shared/firebase"
import { Command } from "../model/commandTypes"
import bridge from "@vkontakte/vk-bridge"


// получает все коммакды
export const getAllCommands = async () => {
    let result: Command[] = []
    const commandsCollection = (await getDocs(collection(db, 'commands')))
    commandsCollection.forEach(command => {
        result.push(command.data() as Command)
    });
    return result
}


export const getCommandByName = async (commandName:string) => {
    return (await getDoc(doc(db, `commands/${commandName}`))).data() as Command
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

export const addUserToCommand = async (commandId: string) => {
    const userId = (await bridge.send('VKWebAppGetLaunchParams')).vk_user_id
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

export const getAllCommandsNames = async () => {
    let result:string[] = []
    const commandsCollection = (await getDocs(collection(db, 'commands')))
    commandsCollection.forEach(command => {
        result.push(command.data().name)
    });
    return result
}

export const changeUserCommand = async (
    userId: number, 
    commandNamePrev: string, 
    commandNameNext: string
) => 
{   
    const prevCommandMembers = (await getDoc(doc(db, `commands/${commandNamePrev}`))).data() as Command
    const indexOfMember = prevCommandMembers.members.indexOf(userId)
    console.log(indexOfMember)
    updateDoc(doc(db, `commands/${commandNamePrev}`), {
        members: arrayRemove(userId)
    })
    updateDoc(doc(db, `commands/${commandNameNext}`), {
        members: arrayUnion(userId)
    })
}