import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ref } from 'vue'

const error = ref(null)
const isLoading = ref(false)

const signup = async (displayName, email, password) => {
    isLoading.value = true
    error.value = null

    try {
        const newUser = await createUserWithEmailAndPassword(auth, email, password)
        if (!newUser) {
           throw new Error('Could not complete signup')
        }
        
        await updateProfile(auth.currentUser, {
            displayName: displayName
        })
        
        // console.log()

        error.value = null
        isLoading.value = false    
        
        return newUser
    } 
    catch (err) {
        console.log(err.message)
        error.value = err.message
        isLoading.value = false        
    }
}

const useSignup = () => {
    return { error, isLoading, signup }
}

export default useSignup