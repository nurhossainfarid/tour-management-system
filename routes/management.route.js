const express = require('express');
const router = express.Router();
const managementController = require('../controllers/management.controller');

router.route('/')
    .get(managementController.getManagement)
    .post(managementController.createManagement)
router.route('/:id')
    .get()
    .patch(managementController.updateManagementById)

module.exports = router;