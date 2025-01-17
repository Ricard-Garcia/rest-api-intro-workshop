const { encryptPassword } = require("../utils/password-hash");

async function seedUsers() {
  return [
    {
      name: "Mike",
      last_name: "Velcro",
      email: "mike@velcro.com",
      password: await encryptPassword("123456"),
      is_admin: false,
    },
    {
      name: "Rick",
      last_name: "László",
      email: "rick@laszlo.com",
      password: await encryptPassword("123456"),
      is_admin: true,
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
      dateOfBirth: new Date("1951-03-27"),
      placeOfBirth: "Willmette",
      movies: ["Rushmore", "Life Aquatic", "Moonrise Kingdom"],
      roles: ["actor"],
    },
    {
      name: "Uma Thurman",
      dateOfBirth: new Date("1970-04-29"),
      placeOfBirth: "Boston",
      movies: ["Kill Bill Vol. 1"],
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
      placeOfBirth: "Ocata",
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
      dateOfBirth: new Date("1992-11-24"),
      placeOfBirth: "El Masnou",
      movies: ["Django Unchained", "Kill Bill Vol. 1", "Pulp Fiction"],
      roles: ["water-person"],
    },
    {
      name: "Rick László",
      dateOfBirth: new Date("1992-06-12"),
      placeOfBirth: "Badabronx",
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

async function seedMovies(db) {
  return [
    {
      title: "Life Aquatic",
      releaseYear: new Date("2004"),
      genres: ["Humor", "Romantic", "Photographic"],
      duration: 118,
      cast: await db.Person.find(
        {
          $and: [
            { movies: { $elemMatch: { $eq: "Life Aquatic" } } },
            { roles: "actor" },
          ],
        },
        { _id: 1 },
      ).exec(),
      crew: await db.Person.find(
        {
          $and: [
            { movies: { $elemMatch: { $eq: "Life Aquatic" } } },
            { roles: { $ne: "actor" } },
          ],
        },
        { _id: 1 },
      ).exec(),
    },
    {
      title: "Royal Tenenbaums",
      releaseYear: new Date("2001"),
      genres: ["Humor", "Romantic", "Photographic"],
      duration: 109,
      cast: await db.Person.find(
        {
          $and: [
            { movies: { $elemMatch: { $eq: "Royal Tenenbaums" } } },
            { roles: "actor" },
          ],
        },
        { _id: 1 },
      ).exec(),

      crew: await db.Person.find(
        {
          $and: [
            { movies: { $elemMatch: { $eq: "Royal Tenenbaums" } } },
            { roles: { $ne: "actor" } },
          ],
        },
        { _id: 1 },
      ).exec(),
    },
    {
      title: "Moonrise Kingdom",
      releaseYear: new Date("2012"),
      genres: ["Romantic", "Idealist"],
      duration: 94,
      cast: await db.Person.find(
        {
          $and: [
            { movies: { $elemMatch: { $eq: "Moonrise Kingdom" } } },
            { roles: "actor" },
          ],
        },
        { _id: 1 },
      ).exec(),

      crew: await db.Person.find(
        {
          $and: [
            { movies: { $elemMatch: { $eq: "Moonrise Kingdom" } } },
            { roles: { $ne: "actor" } },
          ],
        },
        { _id: 1 },
      ).exec(),
    },
    {
      title: "Rushmore",
      releaseYear: new Date("1998"),
      genres: ["Humor", "Idealist"],
      duration: 93,
      cast: await db.Person.find(
        {
          $and: [
            { movies: { $elemMatch: { $eq: "Rushmore" } } },
            { roles: "actor" },
          ],
        },
        { _id: 1 },
      ).exec(),

      crew: await db.Person.find(
        {
          $and: [
            { movies: { $elemMatch: { $eq: "Rushmore" } } },
            { roles: { $ne: "actor" } },
          ],
        },
        { _id: 1 },
      ).exec(),
    },
    {
      title: "Kill Bill Vol. 1",
      releaseYear: new Date("2003"),
      genres: ["Humor", "Thriller"],
      duration: 111,
      cast: await db.Person.find(
        {
          $and: [
            { movies: { $elemMatch: { $eq: "Kill Bill Vol. 1" } } },
            { roles: "actor" },
          ],
        },
        { _id: 1 },
      ).exec(),

      crew: await db.Person.find(
        {
          $and: [
            { movies: { $elemMatch: { $eq: "Kill Bill Vol. 1" } } },
            { roles: { $ne: "actor" } },
          ],
        },
        { _id: 1 },
      ).exec(),
    },
    {
      title: "Django Unchained",
      releaseYear: new Date("2021"),
      genres: ["Humor"],
      duration: 165,
      cast: await db.Person.find(
        {
          $and: [
            { movies: { $elemMatch: { $eq: "Django Unchained" } } },
            { roles: "actor" },
          ],
        },
        { _id: 1 },
      ).exec(),

      crew: await db.Person.find(
        {
          $and: [
            { movies: { $elemMatch: { $eq: "Django Unchained" } } },
            { roles: { $ne: "actor" } },
          ],
        },
        { _id: 1 },
      ).exec(),
    },
    {
      title: "Pulp Fiction",
      releaseYear: new Date("1994"),
      genres: ["Humor", "Thriller"],
      duration: 165,
      cast: await db.Person.find(
        {
          $and: [
            { movies: { $elemMatch: { $eq: "Pulp Fiction" } } },
            { roles: "actor" },
          ],
        },
        { _id: 1 },
      ).exec(),

      crew: await db.Person.find(
        {
          $and: [
            { movies: { $elemMatch: { $eq: "Pulp Fiction" } } },
            { roles: { $ne: "actor" } },
          ],
        },
        { _id: 1 },
      ).exec(),
    },
  ];
}

module.exports = {
  seedUsers: seedUsers,
  seedPeople: seedPeople,
  seedMovies: seedMovies,
};
