<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { selectMovieById, getMovieCredits } from '../api/api'
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';


const route = useRoute();
const movie = ref(null);
const credits = ref([]);

const modules = [Autoplay, Navigation];

onMounted(async () => {
    try {
        const movieId = route.params.id
        const [movieRes, creditsRes] = await Promise.all([
            selectMovieById(movieId),
            getMovieCredits(movieId)
        ])
        movie.value = movieRes.data
        credits.value = creditsRes.data.cast.filter(actor => actor.profile_path)
    } catch (error) {
        console.error("Hata:", error)
    }
})


const backdropStyle = computed(() => {
  if (!movie.value?.backdrop_path) return {}
  return {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.value.backdrop_path})`
  }
})

</script>
<template>
    <div class="fixed inset-0 -z-20 bg-cover bg-center brightness-50 " :style="backdropStyle"></div>
    <div v-if="movie" class="flex flex-row gap-30 m-15">
        <div>
            <img class="w-[350px] h-[550px]" :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" />
        </div>

        <div class="flex flex-col gap-5 w-[50%]">

            <h1 class="font1 font-[500] text-2xl">{{ movie.title }}</h1>
            <p>{{ movie.overview }}</p>



            <div class="w-full">

                <swiper :modules="modules" :slides-per-view="'auto'" :space-between="16" :navigation="{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }">
                    <swiper-slide v-for="actor in credits" :key="actor.id" class="!w-[120px]">
                        <div class="text-center">
                            <img class="w-full h-[150px] md:h-[180px] object-cover rounded-lg mb-2"
                                :src="`https://image.tmdb.org/t/p/w200${actor.profile_path}`" :alt="actor.name" />
                            <p class="font-semibold text-sm truncate">{{ actor.name }}</p>
                            <p class="text-xs text-gray-500 truncate">{{ actor.character }}</p>
                        </div>
                    </swiper-slide>
                    <div class="swiper-button-next text-purple-200 hover:text-white"></div>
                    <div class="swiper-button-prev text-purple-200 hover:text-white"></div>
                </swiper>

            </div>



        </div>
    </div>
</template>
<style scoped>
.font1 {
    font-family: "Frank Ruhl Libre", serif;
}

.swiper-button-next,
.swiper-button-prev {
    --swiper-navigation-size: 20px;
    background-color: rgba(109, 40, 217, 0.7);
    padding: 15px;
    border-radius: 50%;
    backdrop-filter: blur(4px);
}

.swiper-button-next::after,
.swiper-button-prev::after {
    font-size: var(--swiper-navigation-size);
}


.fixed {
  position: fixed;
  inset: 0; 
  z-index: -10; 
  opacity: 0.6;
  filter: blur(1px); 
  background-size: cover;
  background-position: center;
}

/* İçerik kutusuna hafif arkaplan */
.relative {
  position: relative;
  background-color: bg-gray-900/90; /* bg-slate-900 with opacity */
}


</style>