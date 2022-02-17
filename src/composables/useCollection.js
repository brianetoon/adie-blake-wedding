import { ref } from '@vue/runtime-core'
import { db } from '../firebase/config'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'


const useCollection = (collectionName) => {

    const error = ref(null)
    const colRef = collection(db, collectionName)

    const addDocument = async (newDoc) => {
        await addDoc(colRef, {
            ...newDoc,
            createdAt: serverTimestamp()
        }).then(() => {
            error.value = null
        })
        .catch(err => {
            console.log(err.message)
            error.value = err.message
        })
    }

    return { error, addDocument }
}

export default useCollection