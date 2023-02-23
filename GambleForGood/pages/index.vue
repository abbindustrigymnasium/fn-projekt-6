<template>
<div class="flex flex-col bg-gray-800 py-10 m-auto p-auto">
<h1
        class="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-white"
      >
        Popular gamemodes
      </h1>
      <div
        class="flex overflow-x-scroll pb-10 hide-scroll-bar"
      >
        <div
          class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
        >
          <!-- <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
            <div class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
          <img class="w-20 h-20 object-cover object-center rounded-full" src="https://warrington-worldwide.co.uk/wp-content/uploads/2022/06/dice.jpg" alt="cuisine" />
          <h4 class="text-white text-2xl font-bold capitalize text-center">Slots</h4>
          <p class="text-white/50">55 members</p>
          <p class="absolute top-2 text-white/20 inline-flex items-center text-xs">22 Online <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
        </div>
        </div>
          </div> -->
          <gamemode-preview :Bild="'https://warrington-worldwide.co.uk/wp-content/uploads/2022/06/dice.jpg'" :members="55" :membersOnline="22" :gamemode="'Slots'">
          </gamemode-preview>
          <gamemode-preview :Bild="'https://warrington-worldwide.co.uk/wp-content/uploads/2022/06/dice.jpg'" :members="132" :membersOnline="4" :gamemode="'Roulette'">
          </gamemode-preview>
          <gamemode-preview :Bild="'https://warrington-worldwide.co.uk/wp-content/uploads/2022/06/dice.jpg'" :members="202" :membersOnline="0" :gamemode="'Baccarat'">
          </gamemode-preview>
          <gamemode-preview :Bild="'https://warrington-worldwide.co.uk/wp-content/uploads/2022/06/dice.jpg'" :members="105" :membersOnline="12" :gamemode="'Black Jack'">
          </gamemode-preview>
          <gamemode-preview :Bild="'https://warrington-worldwide.co.uk/wp-content/uploads/2022/06/dice.jpg'" :members="63" :membersOnline="7" :gamemode="'Video Poker'">
          </gamemode-preview>
          <gamemode-preview :Bild="'https://warrington-worldwide.co.uk/wp-content/uploads/2022/06/dice.jpg'" :members="83" :membersOnline="43" :gamemode="'Hilo'">
          </gamemode-preview>
          <gamemode-preview :Bild="'https://warrington-worldwide.co.uk/wp-content/uploads/2022/06/dice.jpg'" :members="108" :membersOnline="86" :gamemode="'Dice'">
          </gamemode-preview>
          <gamemode-preview :Bild="'https://warrington-worldwide.co.uk/wp-content/uploads/2022/06/dice.jpg'" :members="108" :membersOnline="34" :gamemode="'Wheel'">
          </gamemode-preview>
          <gamemode-preview :Bild="'https://warrington-worldwide.co.uk/wp-content/uploads/2022/06/dice.jpg'" :members="204" :membersOnline="80" :gamemode="'Keno'">
          </gamemode-preview>
          <gamemode-preview :Bild="'https://warrington-worldwide.co.uk/wp-content/uploads/2022/06/dice.jpg'" :members="106" :membersOnline="7" :gamemode="'Limbo'">
          </gamemode-preview>
          <gamemode-preview :Bild="'https://warrington-worldwide.co.uk/wp-content/uploads/2022/06/dice.jpg'" :members="200" :membersOnline="18" :gamemode="'Crash'">
          </gamemode-preview>
        </div>
      </div>
</div>
</template>

<style>
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>