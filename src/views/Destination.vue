<template>
    <div class="text-center lg:text-left p-5 pb-10 lg:pb-0">
        <div class="uppercase s-text-con text-lg lg:text-xl lg:px-32 lg:mt-5 tracking-widest sm:text-left">
            <span class="mr-3 font-bold text-gray-500">01</span> <span class="font-medium">Pick your destination</span>
        </div>

        <div class="lg:flex lg:justify-between lg:px-32 lg:mt-10">
            <div class="flex items-center justify-center my-10" v-motion
          :initial="{
            scale: 0,
          }"
          :enter="{
            scale: 1,
            transition: {
              delay: 500,
            },
          }">
                <img :src="selected.img" alt="" class="h-48 w-48 sm:h-52 sm:w-52 lg:h-72 lg:w-72">
            </div>

            <div class="lg:w-1/2 lg:pl-14">
                <TabGroup>
                    <TabList class="s-text-con flex lg:-ml-6 lg:items-start lg:justify-start space-x-1 py-1 px-5 sm:px-40 lg:px-0">
                        <Tab
                        v-for="(destination, index) in destinations"
                        as="template"
                        :key="index"
                        v-slot="{ selected }"
                        >
                        <button
                            :class="[
                            'w-full lg:w-20 uppercase py-2.5 px-2 lg:px-0 text-lg sm:text-xl font-medium leading-5 tracking-wider',
                            'focus:border-none focus:outline-none',
                            ]"
                            @click="select(index)"
                        >
                            <span class="py-2" :class="selected ? 'border-b-4 border-white text-white' : 'hover:border-gray-400 hover:border-b-4 hover:text-white text-gray-400'">{{ destination.title }}</span>
                        </button>
                        </Tab>
                    </TabList>

                    <TabPanels class="mt-2 pb-10" v-motion-fade>
                        <TabPanel
                        v-for="(dest, index) in destinations"
                        :key="index"
                        >
                        <h1 class="text-6xl text-white uppercase my-6">{{ dest.title }}</h1>

                        <p class="s-text text-gray-300 leading-relaxed sm:px-16 lg:px-0">
                            {{ dest.desc }}
                        </p>

                        <hr class="my-10 border-gray-700 sm:mx-auto sm:w-4/5 lg:mx-0 lg:w-full">

                        <div class="sm:flex sm:justify-between sm:w-1/2 sm:mx-auto lg:w-full lg:mx-0">
                            <div>
                                <h3 class="s-text-con text-sm uppercase tracking-widest text-gray-300">Avg. Distance</h3>
                                <p class="text-3xl sm:text-2xl my-2 uppercase">{{ dest.avgDistance }}</p>
                            </div>

                            <div class="mt-10 sm:mt-0">
                                <h3 class="s-text-con text-sm uppercase tracking-widest text-gray-300">Est. Travel Time</h3>
                                <p class="text-3xl sm:text-2xl my-2 uppercase">{{ dest.travelTime }}</p>
                            </div>
                        </div>

                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    </div>
</template>

<style>
.destination {
  background: url('../assets/destination/background-destination-mobile.jpg');
  @apply bg-cover;
}

@media (min-width: 640px) {
  .destination {
    background: url('../assets/destination/background-destination-tablet.jpg');
    @apply bg-cover;
  }
}

@media (min-width: 1024px) {
  .destination {
    background: url('../assets/destination/background-destination-desktop.jpg');
    @apply bg-cover;
  }
}
</style>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { onMounted, ref } from "vue"

const selected = ref({})

const destinations = ref([
    {
      id: 1,
      title: 'Moon',
      desc: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      avgDistance: '384,400 KM',
      travelTime: '3 DAYS',
      img: new URL("../assets/destination/image-moon.webp", import.meta.url).href,
    },
    {
      id: 2,
      title: 'Mars',
      desc: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      avgDistance: '225 MIL. KM',
      travelTime: '9 MONTHS',
      img: new URL("../assets/destination/image-mars.webp", import.meta.url).href,
    },
    {
      id: 3,
      title: 'Europa',
      desc: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',      
      avgDistance: '628 MIL. KM',
      travelTime: '3 YEARS',
      img: new URL("../assets/destination/image-europa.webp", import.meta.url).href,
    },
    {
      id: 4,
      title: 'Titan',
      desc: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      avgDistance: '384,400 km',
      travelTime: '3 Days',
      img: new URL("../assets/destination/image-titan.webp", import.meta.url).href,
    },  
])


function select(index) {
    selected.value = destinations.value[index]
}

onMounted(() => {
    selected.value = destinations.value[0]
})
</script>