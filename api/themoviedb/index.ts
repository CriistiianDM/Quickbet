// CONST
const 
    BASE_URL = "https://api.themoviedb.org/3",
    API_KEY = process.env.NEXT_PUBLIC_API_KEY_MOOVIE,
    ACTIONS = ['genre','popularity'],
    ACTIONS_VALUES = {
        'genre': '&with_genres=',
        'popularity': '&sort_by='
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
        url = `${URI_FILTER}${ACTIONS_VALUES[data.action]}${data?.value}`
    return url
}