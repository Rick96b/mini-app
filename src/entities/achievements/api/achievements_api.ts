import { arrayUnion, collection, doc, getDocs, increment, updateDoc } from "firebase/firestore"
import { db } from "shared/firebase"
import { Achievements } from "../model/achievements_types"

export const addToCommand = async ( achievement: Achievements, commandName: string ) => 
{
    updateDoc  
    (
        doc(db, `commands/${commandName}`), 
        {
            achievements: arrayUnion( achievement.name ),
            raiting: increment( achievement.rating )
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