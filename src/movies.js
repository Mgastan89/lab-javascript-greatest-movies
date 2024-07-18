
// Iteration 1: All directors? - Get the array of all directors.
const movies =[
    {
        title:"Movie 2"
        director: "Director 2",
        year: 2024,
        genre:["Comedy"],
    },
    {
       title: "Movie 4",
       director: "Director 4",
       year: 2023
       genre:["Action"],
    },
    {
        title:"Movie 6"
        director: "Director 2",
        year: 2021
        genre:["thriller"],
    },
    
];  
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors =(moviesArray) => {
    return moviesArray.map((movie) => movie.director);

};
const getUniqueDirectors = (moviesArray) => {
    const allDirectors = getAllDirectors(moviesArray);
    return[... new Set(allDirectors)]; 
};
const directors = getUniqueDirectors(movies);
console.log(directors); //["Director 1", Director 2"]

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movie =>
        movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    ).length;
    
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const moviesWithScore = moviesArray.filter(movie => movie.score !== undefined);
    if (moviesWithScore.length === 0) {
        return 0;
    }
    const totalScore = moviesWithScore.reduce((sum, movie) => sum + movie.score, 0);
    const averageScore = totalScore / moviesWithScore.length;
    return Number(averageScore.toFixed(2));
}

const averageScore = scoresAverage(movies);
console.log(averageScore);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    if (dramaMovies.length === 0) {
        return 0;
    }
    const totalScore = dramaMovies.reduce((sum, movie) => sum + (movie.score || 0), 0);
    const averageScore = totalScore / dramaMovies.length;
    return Number(averageScore.toFixed(2));
}
const averageDramaScore = dramaMoviesScore(movies);
console.log(averageDramaScore);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.slice().sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
        });
    }
    const sortedMovies = orderByYear(movies);
    console.log(sortedMovies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title))
    .map(movie => movie.title)
    .slice(0, 20);
}

const first20Titles = orderAlphabetically(movies);
console.log(first20Titles);


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray,map(movie => {
        let duration = movie.duration;
        let hours = 0;
        let minutes = 0;
        
        if ( duration.includes("h")) {
            hours = parseInt(duration.split("h")[0], 10);
            duration = duration.split("h")[1];
        }

        if(duration.includes("min")) {
            minutes = parseInt(duration.split("min")[0], 10);

        }
        const totalMinutes = (hours * 60) + minutes;
        return {
            ...movie,
            duration: totalMinutes
        };
    });
}

const moviesInMinutes = turnHoursToMinutes(movies);
console.log(moviesInMinutes);

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
