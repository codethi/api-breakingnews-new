const userService = require("../services/user.service");

const create = async (req, res) => {
  try {
    const { name, username, email, password, avatar, background } = req.body;

    if (!username || !name || !email || !password || !avatar || !background) {
      return res.status(400).send({
        message: "Submit all fields for registration",
      });
    }

    const user = await userService
      .createUserSevice(req.body)
      .catch((err) => console.log(err.message));

    if (!user) {
      return res.status(400).send({
        message: "Error creating User",
      });
    }

    const token = authService.generateToken(user.id);

    res.status(201).send({
      message: "User created",
      user: {
        id: user.id,
        name,
        username,
        email,
        avatar,
        background,
      },
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findAll = async (req, res) => {
  try {
    const users = await userService.findAllUserService();

    if (users.length === 0) {
      return res.status(400).send({
        message: "There are no registered users",
      });
    }

    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findById = async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { name, username, email, password, avatar, background } = req.body;
    const { id, user } = req;

    if (!name && !username && !email && !password && !avatar && !background) {
      res.status(400).send({
        message: "Submit at least one field to update the user",
      });
    }

    await userService.updateUserService(
      id,
      name,
      username,
      email,
      password,
      avatar,
      background
    );

    return res.send({ message: "User successfully updated!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = { create, findAll, findById, update };
