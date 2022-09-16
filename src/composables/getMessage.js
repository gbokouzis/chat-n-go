import { addDoc, collection, doc, getDoc, onSnapshot, orderBy, query, setDoc } from "firebase/firestore";
import { ref, watchEffect } from "vue";
import { db } from '../config/firebase'

const getMessage = () => {
    const messages = ref(null)
    const error = ref(null)

    const colRef = collection(db, "room")
    const q = query(colRef, orderBy("createdAt"));
    
    const unsub = onSnapshot(q, snapshot => {
        console.log('test snapshot')
        let resalts = []
        snapshot.docs.forEach(doc => {
            resalts.push({ ...doc.data(), id: doc.id })
        })
        messages.value = resalts
        error.value = null
    })

    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub())
    })

    return { error, messages }
}

export default getMessage