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
module.exports = Cinema;
