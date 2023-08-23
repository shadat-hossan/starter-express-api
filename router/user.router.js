const {
  getUsers,
  createUser,
  ubdateUser,
  deleteUser,
} = require("../controllers/users.conroller");

const router = require("express").Router();

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", ubdateUser);
router.delete("/:id", deleteUser);

module.exports = router;
