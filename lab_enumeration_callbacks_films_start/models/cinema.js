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


module.exports = Cinema;
