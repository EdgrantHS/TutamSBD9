const { User } = require("../models/UserModel");

// create new user
exports.createUser = async function (req, res) {
  try {
    const { username, password } = req.body;

    await User.create({
      id: new Date().getTime().toString(),
      username: username.toLowerCase(),
      password: password,
      onboarded: true,
    });

    res.status(200).json({ success: true, message: "Success Create User" });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: `Failed to create user: ${err.message}`,
    });
  }
};

// get all users
exports.getAllUsers = async function (req, res) {
  try {
    const users = await User.find({});

    res.status(200).json({ success: true, data: users });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: `Failed to get all users: ${err.message}`,
    });
  }
};

// get user by id
exports.getUserById = async function (req, res) {
  try {
    const { id } = req.params;

    const user = await User.findOne({ id });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: `User with id ${id} not found`,
      });
    }
  
    res.status(200).json({ success: true, data: user });
  }
  catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: `Failed to get user: ${err.message}`,
    });
  }
}

// update user by id
exports.updateUserById = async function (req, res) {
  try {
    const { id } = req.params;
    const { username, password } = req.body;

    const user = await User.findOne({ id });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: `User with id ${id} not found`,
      });
    }

    user.username = username;
    user.password = password;

    await user.save();

    res.status(200).json({ success: true, message: "Success Update User" });
  }
  catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: `Failed to update user: ${err.message}`,
    });
  }
}

// delete user by id
exports.deleteUserById = async function (req, res) {
  try {
    const { id } = req.params;

    const user = await User.findOne({ id });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: `User with id ${id} not found`,
      });
    }

    await User.deleteOne({ id });

    res.status(200).json({ success: true, message: "Success Delete User" });
  }
  catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: `Failed to delete user: ${err.message}`,
    });
  }
}

//login user
exports.loginUser = async function (req, res) {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username, password });
    // console.log(user);
  
    if (!user) {
      return res.status(404).json({
        success: false,
        message: `User with username ${username} not found`,
      });
    }
  
    res.status(200).json({ success: true, data: user });
  }
  catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: `Failed to login user: ${err.message}`,
    });
  }
}

//register user
exports.registerUser = async function (req, res) {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (user) {
      return res.status(404).json({
        success: false,
        message: `User with username ${username} already exist`,
      });
    }

    await User.create({
      id: new Date().getTime().toString(),
      username: username.toLowerCase(),
      password: password,
      onboarded: false,
    });

    res.status(200).json({ success: true, message: "Success Register User" });
  }
  catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: `Failed to register user: ${err.message}`,
    });
  }
}