<template>
  <div class="text-center pt-10 sm:pt-15 px-5 h-full lg:flex lg:text-left lg:mt-20 lg:px-20">
    <div v-motion-fade>
      <h3 class="s-text-con uppercase tracking-wider text-lg lg:text-xl text-gray-300 sm:mt-10">
        So, you want to travel to
      </h3>
      <h1 class="uppercase text-7xl my-5 sm:text-9xl">Space</h1>

      <p class="s-text text-gray-200 text-sm leading-relaxed tracking-wide mt-5 sm:px-28 lg:px-0 lg:w-1/2">
        Let’s face it; if you want to go to space, you might as well genuinely go
        to outer space and not hover kind of on the edge of it. Well sit back, and
        relax because we’ll give you a truly out of this world experience!
      </p>
    </div>

    <router-link to="/destination">
      <button
          v-motion
          :initial="{
            scale: 0,
          }"
          :enter="{
            scale: 1,
            transition: {
              delay: 500,
            },
          }"
          class="
            text-gray-800
            bg-white
            mx-auto
            w-32
            h-32
            sm:w-44
            sm:h-44
            lg:w-52
            lg:h-52
            sm:text-lg
            flex
            items-center
            justify-center
            mt-20
            rounded-full
            uppercase
            border-none
            hover:outline-gray-600
          "
        >
          Explore
      </button>
    </router-link>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";

useHead({
  title: "Space Tourism | Home"
})
</script>

<style scoped>
button:hover {
  outline-width: 50px;
  outline-style: solid;
  @apply transition;
}
</style>

<style>
.home {
  background: url('../assets/home/background-home-mobile.jpg') no-repeat;
  @apply bg-cover;
}

@media (min-width: 640px) {
  .home {
    background: url('../assets/home/background-home-tablet.jpg') no-repeat;
    @apply bg-cover;
  }
}

@media (min-width: 1024px) {
  .home {
    background: url('../assets/home/background-home-desktop.jpg') no-repeat;
    @apply bg-cover;
  }
}
</style>