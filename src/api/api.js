import axios from "axios";

const API_KEY = '80fc02eb9f895dd02851c20e7bbe437e';
const BASE_URL = 'https://api.themoviedb.org/3';


const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const addFavorites = (account_id, movie_id, isFavorite) => {
  return api.post(`account/${account_id}/favorite`, {
    media_type: 'movie',
    media_id: movie_id,
    favorite: isFavorite
  }, {
    params: {
      language: 'tr-TR'
    }
  })
};



export const getFavoriteMovie = (account_id) => {
  return api.get(`/account/${account_id}/favorite/movies`, {
    params: {
      language: 'tr-TR',
    }
  })

};

export const selectMovieById = (id) => {
  return api.get(`/movie/${id}`, {
    params: {
      language: 'tr-TR',
      append_to_response: 'videos,credits' 
    }
  })

};

export const searchMovies = (query) => {
  return api.get('/search/movie', {
    params: {
      page: 1,
      query: encodeURIComponent(query),
      language: 'tr-TR',
    },
  });
};

export const getMovieCredits = (movieId) => {
  return api.get(`/movie/${movieId}/credits`, {
    params: {
      language: 'tr-TR' //actors
    }
  });
}


export const searchTV = (query) => {
  return api.get('/search/tv', {
    params: {
      page: 1,
      query: encodeURIComponent(query),
      language: 'tr-TR',
    },
  });
};

export const searchPopularMovies = (query) => {
  return api.get('/movie/popular', {
    params: {
      language: 'tr-TR'
    },
  });
};

export const searchPopularTV = (query) => {
  return api.get('/tv/popular', {
    params: {
      language: 'tr-TR'
    },
  });
};

export const searchPopularCinema = (query) => {
  return api.get('/movie/now_playing', {
    params: {
      language: 'tr-TR'
    },
  });
};


export const searchPopularRentals = (query) => {
  return api.get('/movie/top_rated', {
    params: {
      language: 'tr-TR'
    },
  });
};



// ORTAK FONKSİYON
const getTrailers = async (id, isTv = false) => {
  const endpoint = isTv ? `/tv/${id}/videos` : `/movie/${id}/videos`;
  const { data } = await api.get(endpoint);
  return data.results.filter(video =>
    video.type === 'Trailer' &&
    video.official &&
    video.site === 'YouTube'
  );
};

// TÜM KATEGORİLER İÇİN TEK FONKSİYON
export const getContentWithTrailers = async (endpoint, isTv = false) => {
  const { data } = await api.get(endpoint);
  const results = await Promise.all(
    data.results.slice(0, 20).map(async (item) => ({
      ...item,
      trailers: await getTrailers(item.id, isTv)
    }))
  );
  return results.filter(item => item.trailers.length > 0);
};

// KATEGORİ KISAYOLLARI
export const popularTrailersWithContent = () => getContentWithTrailers('/movie/popular');
export const cinemaTrailersWithContent = () => getContentWithTrailers('/movie/now_playing');
export const rentalsTrailersWithContent = () => getContentWithTrailers('/movie/top_rated');
export const vizyonTrailersWithContent = () => getContentWithTrailers('/tv/popular', true);