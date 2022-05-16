<template>
    <div class="text-center lg:text-left mt-6 pb-10 sm:pb-0 h-full sm:overflow-y-hidden">
        <div class="uppercase s-text-con text-lg lg:text-xl lg:px-32 lg:mt-5 tracking-widest sm:text-left">
            <span class="mr-3 font-bold text-gray-500">03</span> <span class="font-medium">Space Launch 101</span>
        </div>

        <div class="lg:flex lg:flex-row-reverse">

            <div class="my-10 lg:my-0 lg:min-w-max">
                <picture>
                    <source :srcset="selected.imgPortrait" media="(min-width: 1024px)">
                    <img :src="selected.img" alt="" aria-hidden="true" class="h-auto w-full object-cover lg:h-96">
                </picture>            
            </div>
            
            <div class="lg:flex lg:pl-20 lg:pt-32">
                <TabGroup>
                    <TabList class="flex justify-center lg:justify-start lg:flex-col lg:items-center space-x-5 lg:space-x-0 py-1 px-5">
                        <Tab
                        v-for="(tech, index) in technologies"
                        as="template"
                        :key="index"
                        v-slot="{ selected }"
                        >
                        <button
                            :class="[
                            'w-10 h-10 lg:w-14 lg:h-14 uppercase text-lg font-medium leading-5',
                            'focus:border-none focus:outline-none rounded-full lg:mb-5',
                            selected ? 
                            'bg-white text-gray-800' : 'bg-none border border-gray-700'
                            ]"
                            @click="select(index)"
                        >
                        {{ index + 1 }}
                        </button>
                        </Tab>
                    </TabList>

                    <TabPanels class="mt-2 pb-10 lg:pl-10">
                        <TabPanel
                        v-for="(tech, index) in technologies"
                        :key="index"
                        >
                        <span class="text-lg sm:text-base uppercase mt-6 lg:mt-0 block text-gray-400">The Terminology...</span>
                        <h1 class="text-2xl text-white uppercase mb-5 lg:text-4xl">{{ tech.name }}</h1>

                        <p class="s-text text-gray-300 leading-relaxed lg:leading-6 px-5 sm:px-20 lg:px-0 sm:text-sm lg:pr-10">
                            {{ tech.desc }}
                        </p>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    </div>
</template>

<style>
.technology {
  background: url('../assets/technology/background-technology-mobile.jpg');
  @apply bg-cover;
}
</style>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { onMounted, ref } from "vue"

const selected = ref({})

const technologies = ref([
    {
      id: 1,
      name: 'Launch Vehicle',
      desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      img: new URL("../assets/technology/image-launch-vehicle-landscape.jpg", import.meta.url).href,
      imgPortrait: new URL("../assets/technology/image-launch-vehicle-portrait.jpg", import.meta.url).href,
    },
    {
      id: 2,
      name: 'Spaceport',
      desc: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
      img: new URL("../assets/technology/image-spaceport-landscape.jpg", import.meta.url).href,
      imgPortrait: new URL("../assets/technology/image-spaceport-portrait.jpg", import.meta.url).href,
    },
    {
      id: 3,
      name: 'Space Capsule',
      desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",      
      img: new URL("../assets/technology/image-space-capsule-landscape.jpg", import.meta.url).href,
      imgPortrait: new URL("../assets/technology/image-space-capsule-portrait.jpg", import.meta.url).href,
    },
])


function select(index) {
    selected.value = technologies.value[index]
}

onMounted(() => {
    selected.value = technologies.value[0]
})
</script>