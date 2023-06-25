// routes/employeeLaptopRoutes.js
const express = require('express');
const router = express.Router();
const employeeLaptopController = require('../controllers/employeeLaptopController');

// Create a new employee laptop
router.post('/', employeeLaptopController.createEmployeeLaptop);

// Get all employee laptops
router.get('/', employeeLaptopController.getAllEmployeeLaptops);

// Get employee laptop by ID
router.get('/:laptopId', employeeLaptopController.getEmployeeLaptopById);

// Update employee laptop
router.put('/:laptopId', employeeLaptopController.updateEmployeeLaptop);

// Delete employee laptop
router.delete('/:laptopId', employeeLaptopController.deleteEmployeeLaptop);

module.exports = router;
