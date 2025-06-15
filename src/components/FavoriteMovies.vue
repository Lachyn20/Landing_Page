<script setup>
import { ref, onMounted } from 'vue';
import { getFavoriteMovie } from '../api/api'

const favoriteMovies = ref([]);
const error = ref(null);
const loading = ref(false);


onMounted(() => {

   const fetchFavoriteMovies = async () => {

      loading.value = true;
      error.value = null;

      try {
         const accountId = '12345';
         const response = await getFavoriteMovie(accountId);
         favoriteMovies.value = response.data.results;
      } catch (err) {
         console.error('Fovori filmler alinirken hta olustu:', err);
         error.value = 'Favori filmler alinamadi'
      } finally {
         loading.value = false;
      }
   };

})

</script>
<template>
   <div>
      <h1 class="text-2xl font-bold my-4">Favorite Movies</h1>
      <div v-if="loading">Loading...</div>
      <div v-if="error" class="text-red-500">{{ error }}</div>
      <div v-if="favoriteMovies.length" class="grid grid-cols-5 gap-4">
         <div v-for="movie in favoriteMovies" :key="movie.id">

            <img :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`" :alt="movie.title">
            <h3>{{ movie.title }}</h3>
            <p>{{ movie.release_date }}</p>
         </div>
      </div>
      <div v-else-if="!loading">FAVORI FILMINIZ BULUNMAMAKTA </div>

   </div>

</template>