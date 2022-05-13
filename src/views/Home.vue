<template>
  <div class="text-center py-10 sm:py-20 h-screen px-5 home">
    <h3 class="s-text-con uppercase tracking-wider text-lg text-gray-300">
      So, you want to travel to
    </h3>
    <h1 class="uppercase text-7xl my-5 sm:text-9xl">Space</h1>

    <p class="s-text text-gray-200 text-sm leading-relaxed mt-5 sm:px-28">
      Let’s face it; if you want to go to space, you might as well genuinely go
      to outer space and not hover kind of on the edge of it. Well sit back, and
      relax because we’ll give you a truly out of this world experience!
    </p>

    <router-link to="/destination">
      <button
          class="
            text-gray-800
            bg-white
            mx-auto
            w-32
            h-32
            sm:w-44
            sm:h-44
            sm:text-lg
            flex
            items-center
            justify-center
            mt-20
            rounded-full
            uppercase
            border-none
            hover:outline-gray-400
          "
        >
          Explore
      </button>
    </router-link>
  </div>
</template>

<style scoped>
button:hover {
  outline-width: 50px;
  outline-style: solid;
  @apply transition;
}
</style>

<style>
.home {
  background: url('../assets/home/background-home-mobile.jpg');
  @apply bg-cover;
}
</style>