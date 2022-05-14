<template>
    <div class="text-center mt-6 px-5 pb-10 sm:pb-0 h-full sm:overflow-y-hidden">
        <div class="uppercase s-text-con text-lg tracking-widest sm:text-left">
            <span class="mr-3 font-bold text-gray-500">02</span> <span class="font-medium">Meet your Crew</span>
        </div>

        <div class="sm:flex sm:flex-col-reverse">
            <div class="flex items-center justify-center my-10 sm:my-7 border-b border-gray-600 sm:border-none sm:mb-auto">
                <img :src="selected.img" alt="" class="h-full w-2/4 sm:w-2/5">
            </div>

            <TabGroup>
                <TabList class="s-text-con flex justify-center space-x-5 py-1 px-5">
                    <Tab
                    v-for="(member, index) in crew"
                    as="template"
                    :key="index"
                    v-slot="{ selected }"
                    >
                    <button
                        :class="[
                        'w-2 h-2 uppercase text-lg font-medium leading-5',
                        'focus:border-none focus:outline-none rounded-full',
                        selected ? 
                        'bg-white' : 'bg-gray-400'
                        ]"
                        @click="select(index)"
                    >
                    </button>
                    </Tab>
                </TabList>

                <TabPanels class="mt-2 pb-10 sm:pb-5">
                    <TabPanel
                    v-for="(member, index) in crew"
                    :key="index"
                    >
                    <span class="text-lg uppercase mt-6 block text-gray-400">{{ member.position }}</span>
                    <h1 class="text-2xl text-white uppercase mb-5">{{ member.name }}</h1>

                    <p class="s-text text-gray-300 leading-relaxed sm:mx-20">
                        {{ member.bio }}
                    </p>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    </div>
</template>

<style>
.crew {
  background: url('../assets/crew/background-crew-mobile.jpg');
  @apply bg-cover;
}

@media (min-width: 640px) {
    .crew {
        background: url('../assets/crew/background-crew-tablet.jpg');
        @apply bg-cover;
    }
}
</style>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { onMounted, ref } from "vue"

const selected = ref({})

const crew = ref([
    {
      id: 1,
      name: 'Douglas Hurley',
      bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
      position: 'Commander',
      img: new URL("../assets/crew/image-douglas-hurley.webp", import.meta.url).href,
    },
    {
      id: 2,
      name: 'Mark Shuttleworth',
      bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
      position: 'Mission Specialist',
      img: new URL("../assets/crew/image-mark-shuttleworth.webp", import.meta.url).href,
    },
    {
      id: 3,
      name: 'Victor Glover',
      bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',      
      position: 'Pilot',
      img: new URL("../assets/crew/image-victor-glover.webp", import.meta.url).href,
    },
    {
      id: 4,
      name: 'Anousheh Ansari',
      bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
      position: 'Flight Engineer',
      img: new URL("../assets/crew/image-anousheh-ansari.webp", import.meta.url).href,
    },  
])


function select(index) {
    selected.value = crew.value[index]
}

onMounted(() => {
    selected.value = crew.value[0]
})
</script>