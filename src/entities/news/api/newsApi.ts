import { collection, getDocs } from "firebase/firestore";
import { News } from "../model/types";
import { db } from "shared/firebase";

export const getAllNews = async () => {
    let result: News[] = []
    const itemCollection = ( await getDocs(collection(db, 'news' ) ) )
    itemCollection.forEach( item => 
    {
        result.push( item.data() as News )
    });
    return result
}