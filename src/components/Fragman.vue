<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import {
    popularTrailersWithContent,
    cinemaTrailersWithContent,
    rentalsTrailersWithContent,
    vizyonTrailersWithContent
} from '../api/api.js';

const modules = [Autoplay, Navigation];
const activeCategory = ref('popular');

const contents = ref({
    popular: [],
    vizyon: [],
    cinema: [],
    rentals: []
});

const activeContent = computed(() => contents.value[activeCategory.value] || [] );

onMounted(async () => {
    try {
        const [popular, vizyon, cinema, rentals] = await Promise.all([
            popularTrailersWithContent(),
            cinemaTrailersWithContent(),
            rentalsTrailersWithContent(),
            vizyonTrailersWithContent()
        ]);

        contents.value = { popular, vizyon, cinema, rentals };
    } catch (error) {
        console.error('Hata:', error);
    }
});
</script>

<template>
    <div 
        class="flex flex-col text-center w-full pb-20 pt-10 px-20 gap-10 bg-gradient-to-r from-purple-300 via-purple-200 to-purple-100 shadow-lg">
        <!-- Başlık ve Butonlar -->
        <div class="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
            <h3 class="text-3xl text-purple-900 font-bold font1">Son Fragmanlar</h3>
            <div class="flex flex-wrap justify-center gap-2 bg-white p-1 rounded-full">
                <button v-for="cat in ['popular', 'vizyon', 'cinema', 'rentals']" :key="cat"
                    @click="activeCategory = cat" class="px-4 py-2 rounded-full transition-all" :class="{
                        'bg-purple-900 text-white': activeCategory === cat,
                        'bg-white text-purple-400': activeCategory !== cat
                    }">
                    {{
                        cat === 'popular' ? 'Popular' :
                            cat === 'vizyon' ? 'Televizyonda' :
                                cat === 'cinema' ? 'Cinema' : 'Premium'
                    }}
                </button>
            </div>
        </div>

        <!-- Fragman Slider -->
        <div class="h-[400px]">

            <swiper v-if="activeContent && activeContent.length > 0" :key="'swiper-' + activeContent.length"
                :modules="modules" :autoplay="{ delay: 3000, disableOnInteraction: false }" :slidesPerView="'auto'"
                :spaceBetween="12" :navigation="{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }" class="relative h-full" :loop="true" :watchSlidesProgress="true" :resistanceRatio="0"
                :slideToClickedSlide="true">

                
                <swiper-slide v-for="(item, index) in activeContent" :key="`${activeCategory}-${index}`"
                    class="!w-[350px] h-full">
                    <div class="bg-white/50 rounded-xl overflow-hidden shadow-md h-full flex flex-col">
                        <!-- YouTube Fragmanı -->
                        <iframe v-if="item.trailers[0]" :src="`https://www.youtube.com/embed/${item.trailers[0].key}`"
                            frameborder="0" allowfullscreen class="w-full aspect-video h-[280px]"></iframe>

                        <!-- Bilgiler -->
                        <div class="p-4 flex-grow">
                            <h4 class="font-bold text-lg mb-1">{{ item.title || item.name }}</h4>
                            <p class="text-gray-500 text-sm">{{ item.release_date || item.first_air_date }}</p>
                            <p class="text-yellow-500 mt-2">⭐ {{ item.vote_average.toFixed(1) }}</p>
                        </div>
                    </div>
                </swiper-slide>


                <div class="swiper-button-next text-purple-200 hover:text-white"></div>
                <div class="swiper-button-prev text-purple-200 hover:text-white"></div>
            </swiper>
        </div>
    </div>
</template>

<style scoped>
/* Swiper buton özelleştirmeleri */
.swiper-button-next,
.swiper-button-prev {
    --swiper-navigation-size: 24px;
    --swiper-navigation-color: currentColor;
    background-color: rgba(128, 90, 213, 0.7);
    padding: 20px;
    border-radius: 50%;
    backdrop-filter: blur(4px);
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
    background-color: rgba(147, 112, 219, 0.9);
}


.font1 {
  font-family: "Frank Ruhl Libre", serif;
}
</style>