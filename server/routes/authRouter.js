const express = require("express");
const { createUser, login } = require("../controllers/authController");

const router = express.Router();

router.post('/signup', createUser)
router.post('/login', login)

module.exports = router
