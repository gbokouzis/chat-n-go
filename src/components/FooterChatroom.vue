<template>
    <div class="chat-footer flex-none">
        <div class="flex flex-row items-center p-4">
            <button type="button" class="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6">
                <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                    <path d="M10,1.6c-4.639,0-8.4,3.761-8.4,8.4s3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4S14.639,1.6,10,1.6z M15,11h-4v4H9  v-4H5V9h4V5h2v4h4V11z"/>
                </svg>
            </button>
            <button type="button" class="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6">
                <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                    <path d="M11,13 L8,10 L2,16 L11,16 L18,16 L13,11 L11,13 Z M0,3.99406028 C0,2.8927712 0.898212381,2 1.99079514,2 L18.0092049,2 C19.1086907,2 20,2.89451376 20,3.99406028 L20,16.0059397 C20,17.1072288 19.1017876,18 18.0092049,18 L1.99079514,18 C0.891309342,18 0,17.1054862 0,16.0059397 L0,3.99406028 Z M15,9 C16.1045695,9 17,8.1045695 17,7 C17,5.8954305 16.1045695,5 15,5 C13.8954305,5 13,5.8954305 13,7 C13,8.1045695 13.8954305,9 15,9 Z" />
                </svg>
            </button>
            <div class="relative flex-grow">
                <label>
                    <input v-model="message" @keypress.enter.prevent="handleSubmit"
                            class="rounded-full py-2 pl-3 pr-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                            type="text" placeholder="Aa"/>
                    <button type="button" class="absolute top-0 right-0 mt-2 mr-3 flex flex-shrink-0 focus:outline-none block text-blue-600 hover:text-blue-700 w-6 h-6">
                        <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                            <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.16 3a6 6 0 0 1-11.32 0h11.32z" />
                        </svg>
                    </button>
                </label>
            </div>
            <button v-if="message===''" type="button" class="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6">
                <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                    <path d="M11.0010436,0 C9.89589787,0 9.00000024,0.886706352 9.0000002,1.99810135 L9,8 L1.9973917,8 C0.894262725,8 0,8.88772964 0,10 L0,12 L2.29663334,18.1243554 C2.68509206,19.1602453 3.90195042,20 5.00853025,20 L12.9914698,20 C14.1007504,20 15,19.1125667 15,18.000385 L15,10 L12,3 L12,0 L11.0010436,0 L11.0010436,0 Z M17,10 L20,10 L20,20 L17,20 L17,10 L17,10 Z"/>
                </svg>
            </button>
            <button v-else @click="handleSubmit" type="button" class="fill-blue-600 hover:fill-blue-700 flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 13h6v-2H3V1.846a.5.5 0 0 1 .741-.438l18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V13z" /></svg>
            </button>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composables/getUser'
import sendMessage from '../composables/sendMessage'
import { serverTimestamp } from "firebase/firestore"

export default {
    setup() {
        const { user } = getUser()
        const { error, addMessage } = sendMessage()
        const message = ref('')

        const handleSubmit = async () => {
            if (message.value.length > 0) {
                const chat = {
                    email: user.value.email,
                    message: message.value,
                    createdAt: serverTimestamp()
                }
                
                await addMessage(chat)
                
                console.log(chat)
                message.value = ''
            }
        }

        return { message, handleSubmit }
    }
}
</script>

<style>

</style>