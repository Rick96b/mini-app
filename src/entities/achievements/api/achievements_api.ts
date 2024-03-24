import { arrayUnion, collection, doc, getDoc, getDocs, increment, updateDoc } from "firebase/firestore"
import { db } from "shared/firebase"
import { Achievements } from "../model/achievements_types"

// Добавляет коммандам достижения
export const addAchievementToCommand = async ( achievement: Achievements, commandName: string ) => 
{
    updateDoc  
    (
        doc(db, `commands/${commandName}`), 
        {
            achievements: arrayUnion( achievement.name ),
            raiting: increment( achievement.rating ),
            raiting_history: arrayUnion({
                raiting: achievement.rating,
                message: achievement.name
            })
        }
    )
    updateDoc
    (
        doc( db, `achievements/${achievement.name}` ), 
        {
        commandName: commandName
        }
    )
}

export const getAllAchievements = async () => 
{
    let result: Achievements[] = []
    const achievementCollection = ( await getDocs(collection(db, 'achievements' ) ) )
    achievementCollection.forEach( achievement => 
    {
        result.push( achievement.data() as Achievements )
    });
    return result
}

export const getAchievementByName = async (achievementName: string) => {
    return (await getDoc(doc(db, `achievements/${achievementName}`))).data() as Achievements
}