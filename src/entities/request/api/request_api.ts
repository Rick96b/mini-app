import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc, onSnapshot } from "firebase/firestore"
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

export const approveRequest = async ( request: Request ) => {
    updateDoc( doc( db, `requests/${request.id}` ), {
        isApprovedByBank: true
    })
}

export const approveItemsRequest = async ( request: Request ) => {
    updateDoc( doc( db, `requests/${request.id}` ), {
        ['itemsRequest.isCompleted']: true
    })
}

export const approveBuildingProcess = async ( request: Request ) => {
    updateDoc( doc( db, `requests/${request.id}` ), {
        ['buildingsRequest.isApprovedByConstruction']: true
    })
}

export const approveBuilding = async ( request: Request ) => {
    updateDoc( doc( db, `requests/${request.id}` ), {
        ['buildingsRequest.isCompleted']: true
    })
}

export const deleteRequest = async ( request: Request ) => {
    deleteDoc( doc( db, `requests/${request.id}` ) )
}

export const getAllRequestsSubscribe = (callBack: (requests: Request[]) => void) => 
    onSnapshot(collection(db, "requests"), (requests) => {
    let result: Request[] = []
    requests.forEach(request => {
        result.push(request.data() as Request)
    });
    callBack(result)
});
