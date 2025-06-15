<script setup>
import { ref, onMounted, computed } from 'vue';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import {
    searchPopularMovies,
    searchPopularTV,
    searchPopularCinema,
    searchPopularRentals
} from '../api/api.js'

const modules = [Autoplay, Navigation];
const activeCategory = ref('movies');
const favorites = ref({});

const popularMovies = ref([]);
const popularTV = ref([]);
const popularCinema = ref([]);
const popularRentals = ref([]);

const activeContent = computed(() => {
    switch (activeCategory.value) {
        case 'movies': return popularMovies.value;
        case 'tv': return popularTV.value;
        case 'cinema': return popularCinema.value;
        case 'rentals': return popularRentals.value;
        default: return popularMovies.value;
    }
})

onMounted(async () => {
    try {
        const [
            moviesRes,
            tvRes,
            cinemaRes,
            rentalsRes
        ] = await Promise.all([
            searchPopularMovies(),
            searchPopularTV(),
            searchPopularCinema(),
            searchPopularRentals(),
        ]);


        popularMovies.value = moviesRes.data.results.slice(0, 20);
        popularTV.value = tvRes.data.results.slice(0, 20);
        popularCinema.value = cinemaRes.data.results.slice(0, 20);
        popularRentals.value = rentalsRes.data.results.slice(0, 20);
    } catch (error) {
        console.error('Hata:', error);
        popularMovies.value = [];
        popularTV.value = [];
        popularCinema.value = [];
        popularRentals.value = [];
    }
});

</script>
<template>
    <div
        class="flex flex-col text-center w-full py-20 px-20 gap-10  bg-gradient-to-r from-purple-300 via-purple-200 to-purple-100 shadow-lg">
        <div class="flex flex-row gap-10 justify-center">
            <h3 class="text-3xl text-purple-900 font-bold font1">Popular: </h3>
            <div class="flex justify-center gap-4 rounded-full bg-white transition-all">

                <button @click="activeCategory = 'movies'" :class="{
                    'bg-purple-900 text-white': activeCategory === 'movies',
                    'bg-white text-purple-900': activeCategory !== 'movies'
                }" class="rounded-full transition-all px-4 py-2">
                    Movies
                </button>

                <button @click="activeCategory = 'tv'" :class="{
                    'bg-purple-900 text-white': activeCategory === 'tv',
                    'bg-white text-purple-900': activeCategory !== 'tv'
                }" class="rounded-full transition-all px-4 py-2">
                    TV
                </button>

                <button @click="activeCategory = 'cinema'" :class="{
                    'bg-purple-900 text-white': activeCategory === 'cinema',
                    'bg-white text-purple-900': activeCategory !== 'cinema'
                }" class="rounded-full transition-all px-4 py-2">
                    Cinema
                </button>

                <button @click="activeCategory = 'rentals'" :class="{
                    'bg-purple-900 text-white': activeCategory === 'rentals',
                    'bg-white text-purple-900': activeCategory !== 'rentals'
                }" class="rounded-full transition-all px-4 py-2">
                    Rentals
                </button>

            </div>
        </div>
        <div class="h-[400px]">


            <swiper :key="activeCategory" class="relative h-full" :centeredSlides="true"
                :autoplay="{ delay: 3000, disableOnInteraction: false }" :slidesPerView="'auto'"
                :loopAdditionalSlides="5" :spaceBetween="12" :loop="true" :modules="modules" :navigation="{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }">
                <swiper-slide v-for="(item, index) in activeContent"
                    :key="`${activeCategory}-${item.id}-${favorites[item.id]}`" class="!w-auto h-[350px] ">
                    <div class="flex flex-col items-center !w-[175px] gap-2 text-center ">
                        <div class="h-[250px] "><img :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
                                :alt="`Slide ${index + 1}`" class="rounded-4xl object-contain bg-gray-100 h-full"></div>
                        <div>
                            <p>{{ item.title || item.name }}</p>
                        </div>
                        <div>
                            <p class="text-gray-600 text-sm">{{ item.release_date }}</p>

                        </div>


                        <div class="flex items-center gap-2"> <!-- Flex ile yan yana hizalama -->
                            <p class="text-yellow-500">⭐ {{ item.vote_average.toFixed(1) }}</p>


                            <div class="cursor-pointer" @click="favorites[item.id] = !favorites[item.id]">
                                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960"
                                    width="30px" :fill="favorites[item.id] ? '#ff4081' : '#e3e3e3'
                                        " :stroke="favorites[item.id] ? '#ff4081' : '#e0e0e0'" stroke-width="50"    >

                                    <path
                                        d="m480-120.67-46.67-42q-104.18-95.08-172.25-164.04Q193-395.67 152.67-450.17q-40.34-54.5-56.5-99.16Q80-594 80-640q0-91.44 61.33-152.72 61.34-61.28 152-61.28 55.34 0 103.34 25.33 48 25.34 83.33 72.67 39.33-49.33 86.33-73.67 47-24.33 100.34-24.33 90.66 0 152 61.28Q880-731.44 880-640q0 46-16.17 90.67-16.16 44.66-56.5 99.16-40.33 54.5-108.41 123.46-68.07 68.96-172.25 164.04l-46.67 42Z" />
                                </svg>
                            </div>


                        </div>


                    </div>
                </swiper-slide>
                <div class="swiper-button-next text-purple-200 hover:text-white"></div>
                <div class="swiper-button-prev text-purple-200 hover:text-white"></div>
            </swiper>
        </div>
        <div class="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-4/4 mx-auto my-2"></div>
    </div>
</template>
<style scoped>
/* Swiper butonlarını özelleştirme */
.swiper-button-next,
.swiper-button-prev {
    --swiper-navigation-size: 24px;
    --swiper-navigation-color: currentColor;
    /* Yukarıdaki text-purple-200 rengini alır */
    background-color: rgba(128, 90, 213, 0.7);
    /* Yarı saydam mor */
    padding: 20px;
    border-radius: 50%;
    backdrop-filter: blur(4px);
    /* Blur efekti */
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
    background-color: rgba(147, 112, 219, 0.9);
    /* Daha açık mor */
}


.font1 {
    font-family: "Frank Ruhl Libre", serif;
}


svg {
  transition: all 0.3s ease;
  transform-origin: center;
}

svg:hover {
  transform: scale(1.1);
}
</style>
