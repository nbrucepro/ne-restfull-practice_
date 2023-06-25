// controllers/employeeLaptopController.js
const EmployeeLaptop = require('../models/EmployeeLaptop');

const createEmployeeLaptop = async (req, res) => {
  const {firstname,lastname,national_identity,telephone,email,department,position,laptop_manufacturer,model,serial_number} = req.body;
  try {
    const laptopId = await EmployeeLaptop.create(firstname,lastname,national_identity,telephone,email,department,position,laptop_manufacturer,model,serial_number);
    res.json({ message:"Employee registered successfully!", Employee:req.body });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};  

const getAllEmployeeLaptops = async (req, res) => {
  try {
    const laptops = await EmployeeLaptop.getAll();
    
    res.json({ laptops });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};

// controllers/employeeLaptopController.js

// ...

const getEmployeeLaptopById = async (req, res) => {
    const { laptopId } = req.params;
  
    try {
      const laptop = await EmployeeLaptop.getById(laptopId);
      if (!laptop) {
        return res.status(404).send('Laptop not found');
      }
      res.json({ laptop });
    } catch (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
  };
  
  const updateEmployeeLaptop = async (req, res) => {
    const { laptopId } = req.params;
    const { manufacturer, model, serialNumber } = req.body;
  
    try {
      const rowsAffected = await EmployeeLaptop.update(laptopId, manufacturer, model, serialNumber);
      if (rowsAffected === 0) {
        return res.status(404).send('Laptop not found');
      }
      res.send('Laptop updated successfully');
    } catch (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
  };
  
  const deleteEmployeeLaptop = async (req, res) => {
    const { laptopId } = req.params;
  
    try {
      const rowsAffected = await EmployeeLaptop.delete(laptopId);
      if (rowsAffected === 0) {
        return res.status(404).send('Laptop not found');
      }
      res.send('Laptop deleted successfully');
    } catch (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
  };
  
  module.exports = {
    createEmployeeLaptop,
    getAllEmployeeLaptops,
    getEmployeeLaptopById,
    updateEmployeeLaptop,
    deleteEmployeeLaptop
  };
  
