import { arrayUnion, collection, doc, getDocs, increment, updateDoc } from "firebase/firestore"
import { db } from "shared/firebase"
import { Building } from "../model/buildings_types"

// добавляет строение комманде
export const addToCommand = async ( building: Building, commandName: string ) => 
{
    updateDoc  
    (
        doc(db, `commands/${commandName}`), 
        {
            buildings: arrayUnion( building.name ),
            raiting: increment( building.rating ),
            raitingHistory: arrayUnion({
                raiting: building.rating,
                message: building.name
            })
        }
    )
}

// получает все строения
export const getAllBuildings = async () => 
{
    let result: Building[] = []
    const buildingsCollection = (await getDocs(collection(db, 'buildings')))
    buildingsCollection.forEach(building => 
    {
        result.push(building.data() as Building)
    });
    return result
}