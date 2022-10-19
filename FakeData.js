const UsersList = [
  {
    id: 1,
    name: "John Doe",
    username: "rock_1_star",
    age: 23,
    nationality: "AMERICA",
    friends: [
      {
        id: 4,
        name: "T-Challa",
        username: "black_panther",
        age: 35,
        nationality: "WAKANDA",
      },
      {
        id: 3,
        name: "Bruce Banner",
        username: "hulk",
        age: 49,
        nationality: "RUSSIA",
      },
    ],
  },
  {
    id: 2,
    name: "John Wick",
    username: "boogie_man",
    age: 43,
    nationality: "INDIA",
  },
  {
    id: 3,
    name: "Bruce Banner",
    username: "hulk",
    age: 49,
    nationality: "RUSSIA",
    friends: [
      {
        id: 2,
        name: "John Wick",
        username: "boogie_man",
        age: 43,
        nationality: "INDIA",
      },
    ],
  },
  {
    id: 4,
    name: "T-Challa",
    username: "black_panther",
    age: 35,
    nationality: "WAKANDA",
  },
  {
    id: 5,
    name: "Wanda Maximoff",
    username: "scarlet_witch",
    age: 26,
    nationality: "VIETNAM",
  },
];

const MovieList = [
  {
    id: 1,
    name: "Avengers Endgame",
    year: 2019,
    isInTheaters: true,
  },
  {
    id: 2,
    name: "Passenger",
    year: 2016,
    isInTheaters: true,
  },
  {
    id: 3,
    name: "Iron Man",
    year: 2008,
    isInTheaters: true,
  },
  {
    id: 4,
    name: "Harry Potter",
    year: 2000,
    isInTheaters: true,
  },
  {
    id: 5,
    name: "John Wick 4",
    year: 2023,
    isInTheaters: false,
  },
];

module.exports = { UsersList, MovieList };
