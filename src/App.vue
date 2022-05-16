<template>
<div class="overflow-x-hidden overflow-y-auto relative h-screen inner-container" :class="selected">
  <div class="py-5 px-3 sm:py-0 sm:px-0">
    <div class="flex justify-between items-center lg:my-5">
      <span class="logo h-6 w-6 lg:h-14 lg:w-14 sm:h-10 sm:w-10 sm:my-5 lg:mx-10 mx-3">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20 0C20 0 20 20 0 20C19.648 20.1428 20 40 20 40C20 40 20 20 39.9999 20C20 20 20 0 20 0Z" fill="#0B0D17"/>
        </svg>
      </span>

      <!-- Desktop Navigation -->
      <div id="nav" class="bg-gray-800 lg:bg-gray-700 h-full px-10 hidden sm:block lg:backdrop-filter lg:backdrop-blur-xl lg:bg-opacity-60 lg:w-3/5">
        <nav class="flex justify-center items-center">
          <router-link :to="nav.path" v-for="(nav, index) in navigation" :key="index" class="px-4 py-6 lg:py-8 tracking-widest lg:hover:border-b-2 lg:hover:border-gray-500" :class="isActive(nav.name) && 'border-b-2 border-gray-200'">
            <span class="s-text-con mr-4 font-bold hidden lg:inline">{{ nav.tag }}</span>
            <span class="s-text-con uppercase tracking-widest">{{ nav.name }}</span>
          </router-link>
        </nav>
      </div>
      <MenuIcon class="h-6 w-6 cursor-pointer sm:hidden" aria-hidden="true" @click="toggleSide" />
    </div>

    <!-- Mobile Navigation -->
    <div class="sm:hidden h-screen z-10 w-9/12 absolute right-0 inset-y-0 transition duration-200 ease-in-out backdrop-filter backdrop-blur-xl bg-opacity-60 translate-x-full" id="sidebar">
      <nav class="px-8 py-24 relative" role="navigation" @click="toggleSide">
        <XIcon class="absolute h-6 w-6 right-5 top-6 cursor-pointer" @click="toggleSide" />
        <router-link :to="nav.path" v-for="(nav, index) in navigation" :key="index" class="s-text-con block px-3 py-2 my-3 uppercase text-xl">
          <span class="mr-4 font-bold">{{ nav.tag }}</span>
          <span>{{ nav.name }}</span>
        </router-link>
      </nav>
    </div>
  </div>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</div>
</template>

<script setup>
import { MenuIcon, XIcon } from '@heroicons/vue/solid'
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const selected = ref('')

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
    path: '/crew'
  },
  {
    name: 'Technology',
    tag: '03',
    path: '/technology'
  },

]

function isActive(name) {
  return router.currentRoute.value.name === name.toLowerCase()
}

function toggleSide() {
  const sideEl = document.querySelector("#sidebar");
  sideEl.classList.toggle("translate-x-full")
}

onMounted(() => {
  selected.value = router.currentRoute.value.name
})

watch(router.currentRoute, () => {
  selected.value = router.currentRoute.value.name
})
</script>

<style>
.inner-container {
  background: url('');
  @apply bg-cover;
}

@media screen and (min-width: 1024px) {
  #nav:after {
      background-color: #fff;
      content: "";
      height: 1px;
      opacity: .25;
      position: absolute;
      right: calc(100% - 48px);
      top: 44px;
      width: calc(100vw - 103px - 100%);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>