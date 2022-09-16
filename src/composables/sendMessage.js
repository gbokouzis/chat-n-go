import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { ref } from "vue";
import { db } from '../config/firebase'

const sendMessage = () => {
    const error = ref(null)

    const addMessage = async (message) => {
        error.value = null
        // const chatRef = doc(db, 'rooms/room1');  
        const chatRef = collection(db, "room")
        console.log('fgfgf')
        try {
            await addDoc(chatRef, message)
            // await setDoc(chatRef, message);
        } catch (err) {
            error.value = err.message
            console.log(err.message)
        }
    }

    return { error, addMessage }
}

export default sendMessage