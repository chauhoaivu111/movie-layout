const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apikey: "77ed8908e6cc7df4f3f28b6247519824",
    originalImage : (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image : (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;