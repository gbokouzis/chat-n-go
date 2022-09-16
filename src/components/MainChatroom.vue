<template>
    <div v-if="error">{{ error }}</div>  
    <div v-if="messages" ref="refMessages"
        class="chat-body p-4 flex-1 overflow-y-scroll"
    >
        <p class="p-4 text-center text-sm text-gray-500">FRI 3:04 PM</p>
        
        <div v-for="message in formattedMessages" :key="message.id"
            class="pt-2"    
        >
            <div v-if="message.email === user.email">
                <span class="flex justify-end px-1 pt-2 text-sm text-gray-500">
                    {{ message.createdAt }}
                </span>
                <div class="flex flex-row justify-end">
                    <div class="text-sm text-white grid grid-flow-row gap-2">
                        <div class="flex items-center flex-row-reverse group">
                            <p class="px-6 py-3 rounded-t-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">
                                {{ message.message }}
                            </p>
                            <button type="button" 
                                class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                            >
                                <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                    <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
                                    M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
                                    C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else>
                <span class="flex justify-start px-1 pt-2 text-sm text-gray-500">
                    {{ message.createdAt }}
                </span>
                <div  
                    class="flex flex-row justify-start items-center"
                >
                    <div class="w-8 h-8 relative flex flex-shrink-0 mr-4">
                        <img class="shadow-md rounded-full w-full h-full object-cover"
                                src="https://randomuser.me/api/portraits/women/33.jpg"
                                alt=""
                        />
                    </div>
                    <div class="messages text-sm text-gray-700 grid grid-flow-row gap-2">
                        <div class="flex items-center group">
                            <p class="px-6 py-3 rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">
                                {{ message.message }}
                            </p>
                            <button type="button" 
                                class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                            >
                                <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                    <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
                                    M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
                                    C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- <p class="p-4 text-center text-sm text-gray-500">SAT 2:10 PM</p>
<div class="flex flex-row justify-start">
    <div class="w-8 h-8 relative flex flex-shrink-0 mr-4">
        <img class="shadow-md rounded-full w-full h-full object-cover"
                src="https://randomuser.me/api/portraits/women/33.jpg"
                alt=""
        />
    </div>
    <div class="messages text-sm text-gray-700 grid grid-flow-row gap-2">
        <div class="flex items-center group">
            <p class="px-6 py-3 rounded-t-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">Hey! How are you?</p>
            <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                    <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                </svg>
            </button>
        </div>
        <div class="flex items-center group">
            <p class="px-6 py-3 rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">Shall we go for Hiking this weekend?</p>
            <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                    <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                </svg>
            </button>
        </div>
        <div class="flex items-center group">
            <p class="px-6 py-3 rounded-b-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">Lorem ipsum
                dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.</p>
            <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                    <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                </svg>
            </button>
        </div>
    </div>
</div> -->


                <!-- <div class="flex items-center flex-row-reverse group">
                    <a class="block w-64 h-64 relative flex flex-shrink-0 max-w-xs lg:max-w-md" href="#">
                        <img class="absolute shadow-md w-full h-full rounded-l-lg object-cover" src="https://unsplash.com/photos/8--kuxbxuKU/download?force=true&w=640" alt="hiking"/>
                    </a>
                    <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                        <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                            <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                        </svg>
                    </button>
                </div> -->
</template>

<script>
import getMessage from '../composables/getMessage';
import getUser from '../composables/getUser';
import { formatDistanceToNow } from 'date-fns'
import { computed, onUpdated, ref } from 'vue';

export default {
    setup() {
        const { error, messages } = getMessage()
        const { user } = getUser()

        const formattedMessages = computed(() => {
            if (messages.value) {
                return messages.value.map(doc => {
                    let timeFromNow = formatDistanceToNow(doc.createdAt.toDate())
                    return { ...doc, createdAt: timeFromNow }
                })
            }
        })

        const refMessages = ref(null)
        onUpdated(() => {
            refMessages.value.scrollTop = refMessages.value.scrollHeight
        })

        return { error, messages, user, formattedMessages, refMessages }
    }
}
</script>

<style>

</style>