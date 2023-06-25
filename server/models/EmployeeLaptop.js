// models/EmployeeLaptop.js
const connection = require('../utils/db');

class EmployeeLaptop {
  static create(firstname,lastname,national_identity,telephone,email,department,position,laptop_manufacturer,model,serial_number) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO employee_laptop(firstname,lastname,national_identity,telephone,email,department,position,laptop_manufacturer,model,serial_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
      connection.query(query, [firstname,lastname,national_identity,telephone,email,department,position,laptop_manufacturer,model,serial_number], (err, results) => {
        if (err) {
          reject(err);
        } else { 
          resolve(results.insertId);
        }
      });
    });
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM employee_laptop';
      connection.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  static getById(laptopId) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM employee_laptop WHERE id = ?';
      connection.query(query, [laptopId], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results[0]);
        }
      });
    });
  }

  static update(laptopId, manufacturer, model, serialNumber) {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE employee_laptop SET manufacturer = ?, model = ?, serial_number = ? WHERE id = ?';
      connection.query(query, [manufacturer, model, serialNumber, laptopId], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results.affectedRows);
        }
      });
    });
  }

  static delete(laptopId) {
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM employee_laptop WHERE id = ?';
      connection.query(query, [laptopId], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results.affectedRows);
        }
      });
    });
  }
}

module.exports = EmployeeLaptop;
