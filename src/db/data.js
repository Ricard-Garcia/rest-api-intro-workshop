const db = require("../models");

function seedMovies(db) {
  return [
    {
      title: "Life Aquatic",
      releaseYear: new Date("2004"),
      genres: ["Humor", "Romantic", "Photographic"],
      duration: 118,
      cast: [
        db.Person.find(
          {
            $and: [
              { movie: { $elemMatch: "Life Aquatic" } },
              { roles: "actor" },
            ],
          },
          { name: 1, _id: 0 },
        ),
      ],
      crew: [
        db.Person.find(
          {
            $and: [
              { movie: { $elemMatch: "Life Aquatic" } },
              { roles: { $ne: "actor" } },
            ],
          },
          { name: 1, _id: 0 },
        ),
      ],
    },
    {
      title: "Royal Tenenbaums",
      releaseYear: new Date("2001"),
      genres: ["Humor", "Romantic", "Photographic"],
      duration: 109,
      cast: [
        db.Person.find(
          {
            $and: [
              { movie: { $elemMatch: "Royal Tenenbaums" } },
              { roles: "actor" },
            ],
          },
          { name: 1, _id: 0 },
        ),
      ],
      crew: [
        db.Person.find(
          {
            $and: [
              { movie: { $elemMatch: "Royal Tenenbaums" } },
              { roles: { $ne: "actor" } },
            ],
          },
          { name: 1, _id: 0 },
        ),
      ],
    },
    {
      title: "Moonrise Kingdom",
      releaseYear: new Date("2012"),
      genres: ["Romantic", "Idealist"],
      duration: 94,
      cast: [
        db.Person.find(
          {
            $and: [
              { movies: { $elemMatch: "Moonrise Kingdom" } },
              { roles: "actor" },
            ],
          },
          { name: 1, _id: 0 },
        ),
      ],
      crew: [
        db.Person.find(
          {
            $and: [
              { movies: { $elemMatch: "Moonrise Kingdom" } },
              { roles: { $ne: "actor" } },
            ],
          },
          { name: 1, _id: 0 },
        ),
      ],
    },
    {
      title: "Rushmore",
      releaseYear: new Date("1998"),
      genres: ["Humor", "Idealist"],
      duration: 93,
      cast: [
        db.Person.find(
          {
            $and: [{ movies: { $elemMatch: "Rushmore" } }, { roles: "actor" }],
          },
          { name: 1, _id: 0 },
        ),
      ],
      crew: [
        db.Person.find(
          {
            $and: [
              { movies: { $elemMatch: "Rushmore" } },
              { roles: { $ne: "actor" } },
            ],
          },
          { name: 1, _id: 0 },
        ),
      ],
    },
    {
      title: "Kill Bill Vol. 1",
      releaseYear: new Date("2003"),
      genres: ["Humor", "Thriller"],
      duration: 111,
      cast: [
        db.Person.find(
          {
            $and: [
              { movies: { $elemMatch: "Kill Bill Vol. 1" } },
              { roles: "actor" },
            ],
          },
          { name: 1, _id: 0 },
        ),
      ],
      crew: [
        db.Person.find(
          {
            $and: [
              { movies: { $elemMatch: "Kill Bill Vol. 1" } },
              { roles: { $ne: "actor" } },
            ],
          },
          { name: 1, _id: 0 },
        ),
      ],
    },
    {
      title: "Django Unchained",
      releaseYear: new Date("2021"),
      genres: ["Humor"],
      duration: 165,
      cast: [
        db.Person.find(
          {
            $and: [
              { movies: { $elemMatch: "Django Unchained" } },
              { roles: "actor" },
            ],
          },
          { name: 1, _id: 0 },
        ),
      ],
      crew: [
        db.Person.find(
          {
            $and: [
              { movies: { $elemMatch: "Django Unchained" } },
              { roles: { $ne: "actor" } },
            ],
          },
          { name: 1, _id: 0 },
        ),
      ],
    },
    {
      title: "Pulp Fiction",
      releaseYear: new Date("1994"),
      genres: ["Humor", "Thriller"],
      duration: 165,
      cast: [
        db.Person.find(
          {
            $and: [
              { movies: { $elemMatch: "Pulp Fiction" } },
              { roles: "actor" },
            ],
          },
          { name: 1, _id: 0 },
        ),
      ],
      crew: [
        db.Person.find(
          {
            $and: [
              { movies: { $elemMatch: "Pulp Fiction" } },
              { roles: { $ne: "actor" } },
            ],
          },
          { name: 1, _id: 0 },
        ),
      ],
    },
  ];
}

function seedPeople() {
  return [
    {
      name: "Wes Anderson",
      dateOfBirth: new Date("1969-05-01"),
      placeOfBirth: "New York",
      movies: [
        "Rushmore",
        "Royal Tenenbaums",
        "Moonrise Kingdom",
        "Life Aquatic",
      ],
      roles: ["director"],
    },
    {
      name: "Quentin Tarantino",
      dateOfBirth: new Date("1963-03-27"),
      placeOfBirth: "Knoxville",
      movies: ["Kill Bill Vol. 1", "Pulp Fiction", "Django Unchained"],
      roles: ["director"],
    },
    {
      name: "Bill Murray",
      dateOfBirth: new Date("1963-03-27"),
      placeOfBirth: "Knoxville",
      movies: ["Rushmore", "Life Aquatic", "Moonrise Kingdom"],
      roles: ["actor"],
    },
    {
      name: "Uma Thurman",
      dateOfBirth: new Date("1970-04-29"),
      placeOfBirth: "Boston",
      movies: ["Kill Bill"],
      roles: ["actor"],
    },
    {
      name: "Samuel L. Jackson",
      dateOfBirth: new Date("1948-12-21"),
      placeOfBirth: "Washington DC",
      movies: ["Pulp Fiction", "Django Unchained"],
      roles: ["actor"],
    },
    {
      name: "Gwyneth Paltrow",
      dateOfBirth: new Date("1972-09-27"),
      placeOfBirth: "Los Angeles",
      movies: ["Royal Tenenbaums", "Moonrise Kingdom"],
      roles: ["actor"],
    },
    {
      name: "Pol Alfageme",
      dateOfBirth: new Date("1992-11-23"),
      placeOfBirth: "El Masnou",
      movies: ["Django Unchained", "Kill Bill Vol. 1", "Pulp Fiction"],
      roles: ["composer"],
    },
    {
      name: "Ricard Garcia",
      dateOfBirth: new Date("1992-06-11"),
      placeOfBirth: "Badalona",
      movies: [
        "Life Aquatic",
        "Rushmore",
        "Royal Tenenbaums",
        "Moonrise Kingdom",
      ],
      roles: ["composer"],
    },
    {
      name: "Mike Velcro",
      dateOfBirth: new Date("1992-11-23"),
      placeOfBirth: "El Masnou",
      movies: ["Django Unchained", "Kill Bill Vol. 1", "Pulp Fiction"],
      roles: ["water-person"],
    },
    {
      name: "Rick László",
      dateOfBirth: new Date("1992-06-11"),
      placeOfBirth: "Badalona",
      movies: [
        "Life Aquatic",
        "Rushmore",
        "Royal Tenenbaums",
        "Moonrise Kingdom",
      ],
      roles: ["water-person"],
    },
  ];
}

module.exports = {
  seedMovies: seedMovies,
  seedPeople: seedPeople,
};
