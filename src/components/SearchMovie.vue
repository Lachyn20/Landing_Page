<script setup>
import { ref, onMounted } from 'vue';
import { searchMovies } from '../api/api.js';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import { useRouter } from 'vue-router'

const router = useRouter()


const searchQuery = ref('');
const movies = ref([]);
const loading = ref(false);
const error = ref(null);

const searchMov = async () => {
    if (!searchQuery.value.trim()) return;

    error.value = null;



    try {
        const response = await searchMovies(searchQuery.value);
        movies.value = response.data.results.slice(0, 20);
        localStorage.setItem('lastSearchResults', JSON.stringify(movies.value));
        localStorage.setItem('lastSearchQuery', searchQuery.value);
    } catch (err) {
        error.value = 'Filmler alinirken hata oluştu: ' + err.message;
    } finally {
        loading.value = false;
    }
};
console.log("Filmler:", JSON.parse(JSON.stringify(movies.value)));


onMounted(() => {
    const savedResults = localStorage.getItem('lastSearchResults');
    const savedQuery = localStorage.getItem('lastSearchQuery');

    if (savedResults) movies.value = JSON.parse(savedResults);
    if (savedQuery) searchQuery.value = savedQuery;
});

</script>
<template>
    
            <div v-if="movies.length"
                class="grid grid-cols-2 md:grid-cols-5 gap-4 absolute top-[50vh] bg-[#2a0143] px-15 py-15 w-full z-20">
                <div v-for="movie in movies" :key="movie.id" class="bg-white/10 rounded-2xl shadow overflow-hidden p-2">

                    <router-link :to="`/about_movie/${movie.id}` ">
                        <div>
                            <img :src="`https://image.tmdb.org/t/p/w300${movie.poster_path || movie.profile_path}`"
                                :alt="movie.title || movie.name" class="w-full object-cover h-[325px] rounded-2xl" />
                        </div>
                        <div class="p-3">
                            <h3 class="font-bold text-white">{{ movie.title || movie.name }}</h3>
                            <p class="text-gray-600 text-sm">{{ movie.release_date || movie.first_air_date }}</p>
                            <p class="text-yellow-500">⭐ {{ movie.vote_average }}</p>
                        </div>
                    </router-link>

                </div>
            </div>
</template>