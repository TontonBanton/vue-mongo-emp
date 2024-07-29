const express = require('express');
const router = express.Router();

const userController = require('../src/user/userController')
router.route('/user/getAll').get(userController, getDataControllerfn)

module.exports = router;
