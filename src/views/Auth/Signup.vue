<template>
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
            <div>
                <img class="mx-auto h-12 w-auto" 
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" 
                    alt="Your Company" 
                />
                <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Create your account
                </h2>
                <p class="mt-2 text-center text-sm text-gray-600">
                    <!-- Or {{ ' ' }}
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                        start your 14-day free trial
                    </a> -->
                </p>
            </div>
            <form @submit.prevent="handleSubmit" 
                class="mt-8 space-y-6"
            >
                <input type="hidden" name="remember" value="true" />
                <div class="-space-y-px rounded-md shadow-sm">
                    <div class="">
                        <label for="username" class="sr-only">Username</label>
                        <input v-model="displayName"
                            id="username" name="email" type="username" autocomplete="name" required="" 
                            class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
                            placeholder="Username" 
                        />
                    </div>
                    <div class="pt-4">
                        <label for="email-address" class="sr-only">Email address</label>
                        <input v-model="email"
                            id="email-address" name="email" type="email" autocomplete="email" required="" 
                            class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
                            placeholder="Email address" 
                        />
                    </div>
                    <div class="pt-4">
                        <label for="password" class="sr-only">Password</label>
                        <input v-model="password"
                            id="password" name="password" type="password" autocomplete="current-password" required="" 
                            class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
                            placeholder="Password" 
                        />
                    </div>
                </div>
        
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>
        
                    <div class="text-sm">
                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                            Forgot your password?
                        </a>
                    </div>
                </div>
        
                <div>
                    <button type="submit"
                        :disabled='isLoading'
                        class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" 
                                aria-hidden="true" 
                            />
                        </span>
                        Sign up
                    </button>
                    <p>
                        Have an account? 
                        <router-link :to="{ name: 'Login' }"
                            class="text-indigo-600 underline"
                        >
                            Log in
                        </router-link>
                    </p>
                    <div v-if="error" class="mt-2 text-red-600">
                        {{ error }}
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
  
<script>
import { ref } from "vue"
import { useRouter } from 'vue-router'
import useSignup from "../../composables/useSignup"

export default {
    setup() {
        const { error, isLoading, signup } = useSignup()
        const router = useRouter()

        const displayName = ref('')
        const email = ref('')
        const password = ref('')
        
        const handleSubmit = async () => {
            await signup(displayName.value, email.value, password.value)
            if (!error.value) {
                router.push({ name: 'Chatroom' })
            }
        }
        
        return { error, isLoading, displayName, email, password, handleSubmit }
    }
}

</script>