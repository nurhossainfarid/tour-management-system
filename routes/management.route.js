const express = require('express');
const router = express.Router();
const managementController = require('../controllers/management.controller');

router.route('/')
    .get(managementController.getManagement)
    .post()


module.exports = router;