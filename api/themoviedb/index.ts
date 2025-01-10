// CONST
const 
    BASE_URL = "https://api.themoviedb.org/3",
    API_KEY = process.env.NEXT_PUBLIC_API_KEY_MOOVIE,
    ACTIONS = ['genre','popularity','popular','now_playing','upcoming','top_rated','search','recomendation','listGenre'],
    ACTIONS_VALUES = {
        'genre': () => `${URI_FILTER}&with_genres=`,
        'popularity': () => `${URI_FILTER}&sort_by=`,
        'popular': (page = 1) => `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=${page}`,
        'now_playing': (page = 1) => `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=${page}`,
        'upcoming': (page = 1) => `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=es-ES&page=${page}`,
        'top_rated': (page = 1) => `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=es-ES&page=${page}`,
        'search': (id) => `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-EN`,
        'recomendation': (id) =>  `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}&language=es-ES&page=1`,
        'listGenre': () => `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-EN`
    }

// lET
let 
    URI_FILTER = `${BASE_URL}/discover/movie?api_key=${API_KEY}`,
    URI_SEARCH = `${BASE_URL}/search/movie?api_key=${API_KEY}`

/**
 * Get movies of tmdb
 */
export const filterMovies = async ({ data }) => {
    let response = null
    try {
        const url = createUrlEndpoint(data)
        response = await fetch(url);
        if (!response.ok) response = null
    } catch (e) {
        console.log(e)
    }
    return response
};

/**
 * Generate Url
 */
const createUrlEndpoint = (data) => {
    let url = `${URI_SEARCH}&query=${data?.value}`
    if (ACTIONS.includes(data.action)) 
        url = `${ACTIONS_VALUES[data.action](data?.value)}`

    return url
}