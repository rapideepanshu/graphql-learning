const { UsersList, MovieList } = require("../FakeData");
const _ = require("lodash");
const resolvers = {
  Query: {
    users: () => {
      return UsersList;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = UsersList.filter((list) => {
        return list.id == Number(id);
      });
      return user[0];
    },
    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      const name = args.name;
      const movie = MovieList.filter((list) => {
        return list.name == name;
      });
      return movie[0];
    },
  },
  User: {
    favouriteMovies: () => {
      return _.filter(MovieList, (movie) => {
        return movie.year >= 2000 && movie.year <= 2010;
      });
    },
  },
};

module.exports = { resolvers };
