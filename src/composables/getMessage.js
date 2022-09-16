import { addDoc, collection, doc, getDoc, onSnapshot, orderBy, query, setDoc } from "firebase/firestore";
import { ref } from "vue";
import { db } from '../config/firebase'

const getMessage = () => {
    const messages = ref(null)
    const error = ref(null)

    const colRef = collection(db, "room")
    const q = query(colRef, orderBy("createdAt"));
    
    onSnapshot(q, snapshot => {
        let resalts = []
        snapshot.docs.forEach(doc => {
            resalts.push({ ...doc.data(), id: doc.id })
        })
        messages.value = resalts
        error.value = null
    })

    return { error, messages }
}

export default getMessage