<template>
    <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
            <div class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
          <img class="w-20 h-20 object-cover object-center rounded-full" :src="Bild" alt="cuisine" />
          <h4 class="text-white text-2xl font-bold capitalize text-center">{{ gamemode }}</h4>
          <p class="text-white/50">{{ members }} members</p>
          <p class="absolute top-2 text-white/20 inline-flex items-center text-xs">{{ membersOnline }} Online <span class="ml-2 w-2 h-2 block {{ OnlineColor }} rounded-full group-hover:animate-pulse"></span></p>
        </div>
        </div>
          </div>
</template>

<script setup>

    import { reactive } from 'vue'
    const props = defineProps(['Bild', 'members', 'membersOnline', 'gamemode'])
    const state = reactive({OnlineColor: 'bg-green-500'});

    if(props.membersOnline == 0){
        state.OnlineColor = "bg-red-500"
    }
</script>