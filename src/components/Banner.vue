<script setup>
import { ref, onMounted } from 'vue';
import { searchMovies, addFavorites } from '../api/api.js';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import { useRouter } from 'vue-router'

const router = useRouter()


const searchQuery = ref('');
const movies = ref([]);
const loading = ref(false);
const error = ref(null);
const lastSearchQuery = ref('');
const favorites = ref({});

const searchMov = async () => {
    if (!searchQuery.value.trim()) {
        movies.value = [];
        localStorage.removeItem('lastSearchResults');
        return;
    }

    if (searchQuery.value !== lastSearchQuery.value) {
        movies.value = [];
    }

    loading.value = true;
    error.value = null;



    try {
        const response = await searchMovies(searchQuery.value);
        movies.value = response.data.results.slice(0, 20);
        lastSearchQuery.value = searchQuery.value;
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
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
        favorites.value = JSON.parse(savedFavorites);
    }

    if (savedResults) {
        movies.value = JSON.parse(savedResults);
        lastSearchQuery.value = savedQuery;
    }

    if (savedQuery) searchQuery.value = savedQuery;
});



const toggleFavorite = async (movieId) => {
    try {
        const accountId = '12345';
        const isFavorite = !favorites.value[movieId];

        // Önce yerel state'i güncelle
        favorites.value = {
            ...favorite.value,
            [movieId]: isFavorite
        };

        await addFavorites(accountId, movieId, isFavorite);
        localStorage.setItem('favorites', JSON.stringify(favorites.value));

        console.log('Favori durumu güncellendi:', movieId, isFavorite);
    } catch (error) {
        console.error('Favori ekleme hatası:', error);

        favorites.value = {
            ...favorites.value,
            [movieId]: !favorites.value[movieId]
        };
    }
};



// console.log('Raw API Response:', movie.title);
// // console.log('API Yaniti:', movies.value.map(movie => ({
// //   id: movie.id,
// //   hasTitle: !!movie.title,
// //   hasOriginalTitle: !!movie.original_title,
// //   fullData: movie // Tüm veriyi görmek için
// // })));

</script>

<template>
    <div>
        <div class="flex flex-col">

            <div class="flex flex-col justify-center items-center relative w-full text-center">
                <img class="w-full h-[70vh] object-cover" src="/images/Screenfotomovie.png" alt="banner foto">
                <div class="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-purple-700/90 to-purple-500/95">

                </div>
                <div
                    class="flex items-center absolute w-[500px] top-40 left-1/2 transform -translate-x-1/2 bg-white rounded-full h-[45px]">


                    <!-- Arama Kutusu -->
                    <div class="relative w-[400px] bg-[#FFFFFF1A] rounded-full ml-15">


                        <MagnifyingGlassIcon
                            class="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 " />
                        <input v-model="searchQuery" @keyup.enter="searchMov" type="text"
                            placeholder="Find Movies & TV ..."
                            class="w-full h-[35px] pl-10 border rounded-full z-10 font-[500] text-purple-700 focus:outline-none " />
                    </div>

                </div>
                <div class="absolute bg-transparent text-white font-bold text-4xl font1">
                    <p>MO<span class="text-purple-300 animate-pulse">V</span>IE PAGE</p>
                </div>
            </div>


            <!-- Yükleniyor Durumu -->
            <div class="flex justify-center w-full z-20">
                <div v-if="loading" class="loader text-center py-8">
                    Yükleniyor...
                </div>
            </div>

            <!-- Hata Mesajı -->

            <div v-if="error" class="text-red-500 p-4 bg-red-50 rounded">
                {{ error }}
            </div>


            <!--favori-->
            <!-- <div>

                <router-link to="./favorite">
                    <button class="rounded">Favorite Movies</button>
                </router-link>

            </div> -->


            <!-- Film Listesi -->

            <div v-if="movies.length"
                class="grid grid-cols-2 md:grid-cols-5 gap-4 absolute top-[50vh] bg-[#2a0143] px-15 py-15 w-full z-20">
                <div v-for="movie in movies" :key="movie.id" class="bg-white/10 rounded-2xl shadow overflow-hidden p-2">

                    <router-link :to="`/about_movie/${movie.id}`">
                        <div>
                            <img :src="`https://image.tmdb.org/t/p/w300${movie.poster_path || movie.profile_path}`"
                                :alt="movie.title || movie.name" class="w-full object-cover h-[325px] rounded-2xl" />
                        </div>
                        <div class="p-3">
                            <h3 class="font-bold text-white">{{ movie.title || movie.name }}</h3>
                            <p class="text-gray-600 text-sm">{{ movie.release_date || movie.first_air_date }}</p>
                        </div>
                    </router-link>
                    <div class="flex flex-row gap-2">
                        <p class="text-yellow-500">⭐ {{ movie.vote_average }}</p>

                        <div class="cursor-pointer" @click.stop="toggleFavorite(movie.id)">
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"
                                :fill="favorites[movie.id] ? '#ff4081' : '#e3e3e3'
                                    " :stroke="favorites[movie.id] ? '#ff4081' : '#e0e0e0'" stroke-width="50">

                                <path
                                    d="m480-120.67-46.67-42q-104.18-95.08-172.25-164.04Q193-395.67 152.67-450.17q-40.34-54.5-56.5-99.16Q80-594 80-640q0-91.44 61.33-152.72 61.34-61.28 152-61.28 55.34 0 103.34 25.33 48 25.34 83.33 72.67 39.33-49.33 86.33-73.67 47-24.33 100.34-24.33 90.66 0 152 61.28Q880-731.44 880-640q0 46-16.17 90.67-16.16 44.66-56.5 99.16-40.33 54.5-108.41 123.46-68.07 68.96-172.25 164.04l-46.67 42Z" />
                            </svg>
                        </div>
                    </div>



                </div>
            </div>


        </div>

    </div>
</template>
<style scoped>
/* HTML: <div class="loader"></div> */
.loader {
    width: 60px;
    aspect-ratio: 1;
    background:
        linear-gradient(45deg, #60B99A 50%, #0000 0),
        linear-gradient(45deg, #0000 50%, #60B99A 0),
        linear-gradient(-45deg, #f77825 50%, #0000 0),
        linear-gradient(-45deg, #0000 50%, #f77825 0),
        linear-gradient(#554236 0 0);
    background-size: 50% 50%;
    background-repeat: no-repeat;
    animation: l18 1.5s infinite;
}

@keyframes l18 {
    0% {
        background-position: 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%
    }

    25% {
        background-position: 0 100%, 100% 0, 50% 50%, 50% 50%, 50% 50%
    }

    50% {
        background-position: 0 100%, 100% 0, 100% 100%, 0 0, 50% 50%
    }

    75% {
        background-position: 50% 50%, 50% 50%, 100% 100%, 0 0, 50% 50%
    }

    100% {
        background-position: 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%
    }
}

bg-gradient-to-b {
    background: linear-gradient(to bottom,
            rgba(76, 29, 149, 0.8) 0%,
            /* purple-900/80 */
            rgba(126, 34, 206, 0.9) 50%,
            /* purple-700/90 */
            rgba(192, 132, 252, 0.95) 100%
            /* purple-500/95 */
        );
}

animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }
}

.font1 {
    font-family: "Frank Ruhl Libre", serif;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
    letter-spacing: 1px;
}
</style>