const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    name: "Shahadat Hossain",
    email: "shahadat3500@gamil.com",
  },
  {
    id: uuidv4(),
    name: "Roshsab",
    email: "roshsab855@gamil.com",
  },
  {
    id: uuidv4(),
    name: "Shabbir",
    email: "shabbir3902@gamil.com",
  },
];

module.exports = users;
