import { collection, getDocs, addDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "shared/firebase"
import { Request } from "../model/request_types"

export const getAllRequests = async () => 
{
    let result: Request[] = []
    const requestsCollection = ( await getDocs(collection(db, 'requests' ) ) )
    requestsCollection.forEach( request => 
    {
        result.push( request.data() as Request )
    });
    return result
}

export const createRequest = async ( request: Request ) =>
{
    addDoc( collection( db, "requests" ), request )
    .then(response => updateDoc(doc(db, `requests/${response.id}`), {
        id: response.id
    }))
}