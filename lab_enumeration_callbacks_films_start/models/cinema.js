const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.titlesOfFilms = function (films) {
    const filmTitles = films.map((film) => {
      return film.title;
    })
    return filmTitles
};


Cinema.prototype.findFilmByTitle = function (title) {
  const filmByTitle = this.films.find((film) => {
    return title === film.title;
  })
  return filmByTitle;
};


Cinema.prototype.filterFilmsByGenre = function (genre) {
    const filmsByGenre = this.films.filter((film) => {
      return genre === film.genre;
    })
    return filmsByGenre;
};

Cinema.prototype.checkFilmsByYear = function (year) {
  const filmsYear = this.films.some((film) => {
    return year === film.year;
  })
  return filmsYear;
};

Cinema.prototype.checkFilmOverLength= function (length) {
  const filmLength = this.films.every((film) => {
    return film.length >= length;
  })
  return filmLength;
};


Cinema.prototype.totalRunningLength = function () {
  let totalLength = this.films.reduce( (runningTotal, film) => {
    return runningTotal + film.length;
  }, 0 )
  return totalLength;
};




Cinema.prototype.filterFilmsByGenre = function (property, value) {
    const byProperty = this.films.filter((film) => {
      

    })
    return filmsByGenre;
};

// for every property passed in give back its value,
// pass in genre and get back drama
// reduce the array to match a property

module.exports = Cinema;
