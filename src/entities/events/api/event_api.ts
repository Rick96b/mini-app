import { arrayUnion, collection, doc, getDocs, increment, updateDoc } from "firebase/firestore"
import { db } from "shared/firebase"
import { Events } from "../model/event_types"

export const addToCommand = async ( event: Events, commandName: string ) => 
{
    updateDoc  
    (
        doc(db, `commands/${commandName}`), 
        {
            events: arrayUnion( event.name ),
            raiting: increment( event.rating )
        }
    )
    updateDoc
    (
        doc( db, `events/${event.name}` ), 
        {
        commandName: commandName
        }
    )
}

export const getAllEvents = async () => 
{
    let result: Events[] = []
    const eventCollection = ( await getDocs( collection( db, 'events' ) ) )
    eventCollection.forEach( event => 
    {
        result.push( event.data() as Events )
    });
    return result
}