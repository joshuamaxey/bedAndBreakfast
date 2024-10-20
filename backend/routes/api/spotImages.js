const express = require('express');

const { SpotImage, Spot, User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();

module.exports = router;
