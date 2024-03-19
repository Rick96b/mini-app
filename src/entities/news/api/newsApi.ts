import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, updateDoc } from "firebase/firestore";
import { News } from "../model/types";
import { db, storage } from "shared/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const getAllNews = async () => {
    let result: News[] = []
    const itemCollection = ( await getDocs(collection(db, 'news' ) ) )
    itemCollection.forEach( item => 
    {
        result.push( item.data() as News )
    });
    return result
}

export const AddNews = async (title: string, text: string, img: File | null) => {
    if(img) {
        uploadImage(img).then(async (snapshot) => {
            const url = await getDownloadURL(snapshot.ref);
            addDoc(collection(db, `news`), {
                title: title,
                text: text,
                imageLink: url
            }).then(ref => updateDoc(ref, {id: ref.id}))
        })
    } else {
        addDoc(collection(db, `news`), {
            title: title,
            text: text,
            imageLink: ''
        })
    }
}

export const uploadImage = async (file: File) => {
    const fileRef = ref(storage, file.name);

    return uploadBytes(fileRef, file)
}

export const getAllNewsSubscribe = (callback: (news: News[]) => void) => 
    onSnapshot(collection(db, "news"), (news) => {
    let result: News[] = []
    news.forEach(command => {
        result.push(command.data() as News)
    });
    callback(result)
});

export const deleteNews = async (newsId: string) => {
    deleteDoc(doc(db, `news/${newsId}`))
}