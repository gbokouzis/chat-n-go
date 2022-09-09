import { auth } from '../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'

const error = ref(null)
const isLoading = ref(false)

const login = async (email, password) => {
    isLoading.value = true
    error.value = null

    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        if (!res) {
            throw new Error('Could not complete login')
        }
        error.value = null   
        isLoading.value = false
    } catch (err) {
        // console.log(err.message)
        error.value = err.message
        isLoading.value = false        
    }
}

const useLogin = () => {
    return { error, isLoading, login }
}

export default useLogin