import { arrayUnion, collection, doc, getDocs, increment, updateDoc } from "firebase/firestore"
import { db } from "shared/firebase"
import { Item } from "../model/item_types"

export const getAllItems = async() => 
{
    let result: Item[] = []
    const itemCollection = ( await getDocs(collection(db, 'items' ) ) )
    itemCollection.forEach( item => 
    {
        result.push( item.data() as Item )
    });
    return result
}

export const addToCommand = async( item: Item, commandName: string ) =>
{
    updateDoc  
    (
        doc(db, `commands/${commandName}`), 
        {
            items: arrayUnion( item.name ),
            raiting: increment( item.rating )
        }
    )
}