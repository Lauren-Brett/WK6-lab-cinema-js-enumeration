const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.titlesOfFilms = function (films) {
    const filmTitles = films.map((film) => {
      return film.title;
    })
    return filmTitles
};
module.exports = Cinema;
