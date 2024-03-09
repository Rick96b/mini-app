import { arrayUnion, collection, doc, getDocs, increment, updateDoc } from "firebase/firestore"
import { db } from "shared/firebase"
import { BuildingsRequest, ItemsRequest, Request } from "../model/request_types"

// методы для предметов //

export const getAllItemRequests = async () => 
{

    let result: ItemsRequest[] = []
    const itemsRequestCollection = ( await getDocs(collection(db, 'items_request' ) ) )
    itemsRequestCollection.forEach( itemsRequest => 
    {
        result.push( itemsRequest.data() as ItemsRequest )
    });
    return result

}

// методы для строений //

export const getAllBuildingRequests = async () => 
{

    let result: BuildingsRequest[] = []
    const buildingsRequestCollection = ( await getDocs(collection(db, 'buildings_request' ) ) )
    buildingsRequestCollection.forEach( buildingsRequest => 
    {
        result.push( buildingsRequest.data() as BuildingsRequest )
    });
    return result

}

// общие методы //

