// controller.js

const express = require('express');
const router = express.Router();  // Correcting the function to Router() constructor
const { getping, getroot } = require('./pingcontroller');  // Correct path

router.get('/', getroot);
router.get('/ping', getping);

module.exports.controller = router;
