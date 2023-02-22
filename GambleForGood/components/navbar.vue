<template>
    <nav class="w-full p-6 shadow-lg bg-gray-900 ">
      <div class="flex items-center justify-between">

        <div>
          <button @click="drawer">
            <svg class="h-8 w-8 fill-current text-white" fill="none" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <!-- Dark Background Transition -->
        <transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100"
          leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
          <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
            <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
          </div>
        </transition>
        <!-- Drawer Menu -->
        <aside
          class="p-5 transform top-0 left-0 w-64 fixed bg-gray-900 h-full overflow-auto ease-in-out transition-all duration-300 z-30     "
          :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
          <div class="close">
            <button class="absolute top-0 right-0 mt-4 mr-4" @click="isOpen = false">
              <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                viewBox="0 0 24 24 " stroke="white">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <ul class="divide-y font-sans">
            <li><button @click="navigate('/')" class="my-4 inline-block text-white">Home</button></li>
            <li><button @click="navigate('/casino')" class="my-4 inline-block text-white">Casino</button></li>
            <li><button @click="navigate('/leaderboard')" class="my-4 inline-block text-white">Leaderboard</button></li>
            <li><button @click="navigate('/about')" class="my-4 inline-block text-white">About us</button></li>
            <li><button @click="navigate('/login')" class="my-4 inline-block text-white bg-grey-300">Log In</button></li>
          </ul>
        </aside>
        <!-- Navbar -->
        <div class="hidden md:block text-5xl font-medium text-center text-white flex items-center ">
          Gamble For Good
        </div>


        <div>
          <!-- <div v-if="$auth.loggedIn" class="text-white">
          {{ $auth.user.email }}
          </div> -->
          <!-- <div class="text-white">name</div> -->
        <button @click="navigate('profile')" class="my-4 inline-block text-white">
          
            <svg class="w-8 h-8 dark:text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
            </svg>

          
        </button>
        </div>
      </div>
    </nav>
  </template>
  <script>
  export default {
    data () {
      return {
        isOpen: false
      }
    },
    methods: {
      drawer () {
        this.isOpen = !this.isOpen
      },
      navigate (path) {
        this.$router.push(path)
        this.drawer()
      }
    },
    watch: {
      isOpen: {
        immediate: true,
        handler (isOpen) {
          if (process.client) {
            if (isOpen) document.body.style.setProperty("overflow", "hidden")
            else document.body.style.removeProperty("overflow")
          }
        }
      }
    },
    mounted () {
      document.addEventListener("keydown", e => {
        if (e.keyCode == 27 && this.isOpen) this.isOpen = false
      })
    }
  }
  </script>
  <style>
  .logo {
    height: 50px;

  }
  </style>
  