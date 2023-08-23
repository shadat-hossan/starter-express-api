const { v4: uuidv4 } = require("uuid");
let Users = require("../models/users.models");

const getUsers = (req, res) => {
  res.status(200).json({ Users });
};

const createUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    name: req.body.name,
    email: req.body.email,
  };
  Users.push(newUser);
  res.status(200).json(Users);
};

const ubdateUser = (req, res) => {
  const creantId = req.params.id;
  const { name, email } = req.body;
  Users.filter((user) => user.id === creantId).map((selaktedUser) => {
    selaktedUser.name = name;
    selaktedUser.email = email;
  });
  res.status(200).json(Users);
};

const deleteUser = (req, res) => {
  const creantId = req.params.id;
  Users = Users.filter((user) => user.id !== creantId);

  res.status(200).json(Users);
};

module.exports = { getUsers, createUser, ubdateUser, deleteUser };
