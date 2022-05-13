<template>
<div class="overflow-x-hidden overflow-y-auto relative h-screen inner-container home destination">
  <div class="py-5 px-3">
    <div class="flex justify-between items-center">
      <span class="logo h-6 w-6">
        <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20 0C20 0 20 20 0 20C19.648 20.1428 20 40 20 40C20 40 20 20 39.9999 20C20 20 20 0 20 0Z" fill="#0B0D17"/>
        </svg>
      </span>

      <MenuIcon class="h-6 w-6 cursor-pointer" aria-hidden="true" @click="toggleSide" />
    </div>
    <div class="h-screen z-10 w-9/12 absolute right-0 inset-y-0 transition duration-200 ease-in-out backdrop-filter backdrop-blur-xl bg-opacity-60 translate-x-full" id="sidebar">
      <nav class="px-8 py-24 relative" role="navigation">
        <XIcon class="absolute h-6 w-6 right-5 top-6 cursor-pointer" @click="toggleSide" />
        <router-link :to="nav.path" v-for="(nav, index) in navigation" :key="index" class="s-text-con block px-3 py-2 my-3 uppercase text-xl">
          <span class="mr-4 font-bold">{{ nav.tag }}</span>
          <span>{{ nav.name }}</span>
        </router-link>
      </nav>
    </div>
  </div>
  <main>
    <router-view />
  </main>
</div>
</template>

<script setup>
import { MenuIcon, XIcon } from '@heroicons/vue/solid'

const navigation = [
  {
    name: 'Home',
    tag: '00',
    path: '/'
  },
  {
    name: 'Destination',
    tag: '01',
    path: '/destination'
  },
  {
    name: 'Crew',
    tag: '02',
    path: '/'
  },
  {
    name: 'Technology',
    tag: '03',
    path: '/'
  },

]

function toggleSide() {
  const sideEl = document.querySelector("#sidebar");
  sideEl.classList.toggle("translate-x-full")
}
</script>

<style>
.inner-container {
  background: url('../assets/home/background-home-mobile.jpg');
}
</style>