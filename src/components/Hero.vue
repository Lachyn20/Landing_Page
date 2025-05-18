<script setup>

import { ref } from 'vue';
import cnn from '../assets/images/facebook.png'
const activeIndex = ref(0);

const items = [
    {
        brand: "https://www.branchfurniture.ca/cdn/shop/files/CNN_200x.png?v=1677523441",
        sentence: "WFH in comfort with Branch's high-quality ergonomic chairs and standing desks.",
        alt: "CNN"
    },
    {
        brand: "https://www.branchfurniture.ca/cdn/shop/files/New_york_mag_200x.png?v=1688696426",
        sentence: "New and growing startups use Branch to furnish their ideal workspace.",
        alt: "New York"
    },
    {
        brand: "https://www.branchfurniture.ca/cdn/shop/files/Logo_1_cafa1d43-f3e0-490c-a9a8-5f4de8c095c8_200x.png?v=1688696419",
        sentence: "For improving your posture and decreasing pain throughout the day.",
        alt: "forbes"
    },
    {
        brand: "https://www.branchfurniture.ca/cdn/shop/files/Wired_553f336d-d1ca-4daa-94c5-54cae9c29a29_200x.png?v=1711381510",
        sentence: "Upgrade your WFH setup and work in style.",
        alt: "Wired"
    },
    {
        brand: "https://www.branchfurniture.ca/cdn/shop/files/GQ_2b74f2b3-2021-4200-b26b-9879b750e001_200x.png?v=1688696426",
        sentence: "Branch's affordable, well-made chairs are a major upgrade on their sad swivel counterparts",
        alt: "Go"
    },
    {
        brand: "https://www.branchfurniture.ca/cdn/shop/files/Gear_Patrol_50b962ca-d1f9-486c-b9ba-69c5466996d5_200x.png?v=1711381510",
        sentence: "Branch makes several of the best office chairs on the market.",
        alt: "Gear Patrol"
    }
];

const setActive = (index) => {
    activeIndex.value = index;
}
</script>

<template>
    <div class="flex flex-col w-full h-[auto] ">

        <!--video-->
        <div class="flex relative w-full bg-green h-screen items-center overflow-hidden ">
            <video autoplay loop muted playsinline class="absolute w-full h-full object-cover">
                <source src="/videos/reklam1.mp4" type="video/mp4">
            </video>
            <!--over video-->
            <div class="flex flex-col ml-[70px] justify-center w-[40%] gap-5 relative z-10 text-white">
                <div  class="h-[auto] text-[45px] leading-[1.2] font1">
                    Canada's Most Loved Office Furniture
                </div>
                <div class="text-[16px] align-left w-[60%] ">
                    <p>Ergonomic essentials for a great workday. Top rated by Wired, Forbes, Wirecutter, and
                        400,000+customers.</p>
                </div>
                <div
                    class=" hover:bg-transparent hover:text-white h-[45px] w-[250px] text-[14px] text-center text-[#314438] bg-[#ffffff]">
                    <p class="pt-[12px] font-[700]"><a
                            href="https://www.branchfurniture.ca/collections/work-from-home">SHOP
                            NOW</a></p>
                </div>
                <div class=" text-[14px]">Need help? <a class="font-[700]"
                        href="https://www.branchfurniture.ca/pages/quiz">Take our
                        quiz</a></div>
            </div>
        </div>







        <!--yasyl-->
        <div class="flex flex-col text-center justify-center items-center pt-5 lg:px-[17%] px-[10%] gap-2 bg-[#314438] h-[225px] text-[white] ">

            <div>
                <h6 class="font-bold">PRESS</h6>
            </div>

            <!--sozlemler-->
            <div class="flex flex-row relative h-[auto]  leading-[1.2] w-full">
                <div v-for="(item, index) in items" :key="index" @click="activeIndex = index"
                    class="cursor justify-center items-center top-0  left-0 transition-all ease-in-out duration-500 ease-in-out h-[100px]] "
                    :class="{
                        'opacity-100 w-full lg:text-[32px] text-[22px] z-10 translate-x-0': activeIndex === index,
                        'opacity-0 w-0 z-0 text-[14px] translate-x-full': activeIndex < index,
                        'opacity-0 w-0 z-0 text-[14px] -translate-x-full': activeIndex > index
                    }" :style="activeIndex === index ? { width: '100%' } : { width: '0' }">
                    <h3 class="font1 h-[115px] text-center">"{{ item.sentence }}"</h3>
                </div>
            </div>


            <!--markalar-->
            <div class="flex flex-row justify-center items-center h-[40px] w-full lg:gap-20 gap-10 overflow-x-auto">
                <div v-for="(item, index) in items" :key="index" @click="setActive(index)"
                    class="cursor-pointer transition-all duration-300 h-full w-full" :class="{
                        'opacity-100 font-bold translate-x-0': activeIndex === index,
                        'opacity-40 ': activeIndex !== index
                    }" exact-active-class="text-white">
                    <img :src="item.brand" :alt="item.alt" class=" object-contain h-[35px]  w-[auto] ">
                </div>
            </div>
        </div>
    </div>

</template>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@400;500;700&display=swap');

.video {
    position: fixed;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1
}


.font1 {
  font-family: "Frank Ruhl Libre", serif;
  font-weight: 700;
}

.b {
    border: 1px solid black;
}
</style>