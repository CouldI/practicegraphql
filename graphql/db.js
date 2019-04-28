export let movies = [
    {
        id: 1,
        name: "어벤저스4",
        score: 5,
    },
    {
        id: 2,
        name: "어벤저스3",
        score: 2,
    },
    {
        id: 3,
        name: "스파이더맨",
        score: 39,
    },
    {
        id: 4,
        name: "슈퍼맨",
        score: 39.0,
    },
    {
        id: 5,
        name: "베트맨",
        score: 132,
    },
    {
        id: 6,
        name: "작전",
        score: 51,
    },
    {
        id: 7,
        name: "돈의 맛",
        score: 53,
    },
    {
        id: 8,
        name: "부자가 되자",
        score: 11,
    },
    {
        id: 9,
        name: "착하게 살자",
        score: 6,
    }         
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: '${movies.lenght + 1}',
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}