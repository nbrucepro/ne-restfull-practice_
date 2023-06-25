const connection = require('../utils/db');

const createUser = (names, username, password) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO _user (names, username, password) VALUES (?, ?, ?)';
    connection.query(query, [names, username, password], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.insertId);
      }
    });
  });
};

const getUserByUsername = (username) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM _user WHERE username = ?';
    connection.query(query, [username], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results[0]);
      }
    });
  });
};

const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM _user WHERE id = ?';
    connection.query(query, [id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results[0]);
      }
    });
  });
};

module.exports = { createUser, getUserByUsername, getUserById };
