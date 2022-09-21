const express = require('express');
const router = express.Router();
const managementController = require('../controllers/management.controller');

router.route('/tour/trending').get(managementController.getTourView)
router.route('/tour/cheapest').get(managementController.getTourCheapest)
router.route('/')
    .get(managementController.getManagement)
    .post(managementController.createManagement)
router.route('/:id')
    .get(managementController.getTourDetailsById)
router.route('/tour/:id').patch(managementController.updateManagementById)

module.exports = router;