const express = require("express");
const userController = require("../controllers/UserController");
const router = express.Router();

//STARTS WITH /user

//CreateNewUser
router.post("", userController.createUser);
//GetAllUser
router.get("", userController.getAllUsers);
//GetUserById
router.get("/:id", userController.getUserById);
//UpdateUserById
router.put("/:id", userController.updateUserById);
//DeleteUserById
router.delete("/:id", userController.deleteUserById);
//login
router.post("/login", userController.loginUser);
//register
router.post("/register", userController.registerUser);

module.exports = router;
