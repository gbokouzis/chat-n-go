<template>
<!-- Messenger Clone -->
<div class="w-full h-full flex antialiased text-gray-200 bg-gray-900 overflow-hidden">
    <div class="flex-1 flex flex-col">
        <main class="flex-grow flex flex-row min-h-0">
            <section class="flex flex-col flex-auto border-l border-gray-800">
                <MainChatroom />

                <FooterChatroom />
            </section>
        </main>
    </div>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composables/getUser'
import sendMessage from '../composables/sendMessage'
import { serverTimestamp } from "firebase/firestore"
import MainChatroom from '../components/MainChatroom.vue'
import FooterChatroom from '../components/FooterChatroom.vue'

export default {
    components: { 
        MainChatroom,
        FooterChatroom
    },

}
</script>

<style>
  ::-webkit-scrollbar {
    width: 8px;
    height: 2px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgb(31, 41, 55);
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #2b6cb0;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #000000;
  }
  ::-webkit-scrollbar-track {
    background: #1a202c;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #666666;
  }
  ::-webkit-scrollbar-track:active {
    background: #333333;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
  
</style>