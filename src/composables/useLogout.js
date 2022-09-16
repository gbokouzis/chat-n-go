import { auth } from '../config/firebase'
import { signOut } from "firebase/auth";
import { ref } from 'vue'

const error = ref(null)

const logout = async () => {
    try {
        await signOut(auth)
    } catch (err) {
        console.log(err.message)
        error.value = err.message
        isLoading.value = false        
    }
}

const useLogout = () => {
    return { logout, error }
}

export default useLogout