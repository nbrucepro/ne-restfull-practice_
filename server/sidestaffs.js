// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create Express app
const app = express();
const port = 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost/vehicleDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to the database');
});

// Vehicle model
const vehicleSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  owners: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Owner'
  }]
});
const Vehicle = mongoose.model('Vehicle', vehicleSchema);

// Owner model
const ownerSchema = new mongoose.Schema({
  name: String,
  vehicles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle'
  }],
  addresses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address'
  }]
});
const Owner = mongoose.model('Owner', ownerSchema);

// Address model
const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Owner'
  }
});
const Address = mongoose.model('Address', addressSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
// Vehicle routes
app.get('/vehicles', (req, res) => {
  Vehicle.find({})
    .populate('owners')
    .exec((err, vehicles) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(vehicles);
      }
    });
});

app.get('/vehicles/:id', (req, res) => {
  Vehicle.findById(req.params.id)
    .populate('owners')
    .exec((err, vehicle) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(vehicle);
      }
    });
});

app.post('/vehicles', (req, res) => {
  const newVehicle = new Vehicle(req.body);
  newVehicle.save((err, vehicle) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(vehicle);
    }
  });
});

// Owner routes
app.get('/owners', (req, res) => {
  Owner.find({})
    .populate('vehicles addresses')
    .exec((err, owners) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(owners);
      }
    });
});

app.get('/owners/:id', (req, res) => {
  Owner.findById(req.params.id)
    .populate('vehicles addresses')
    .exec((err, owner) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(owner);
      }
    });
});

app.post('/owners', (req, res) => {
  const newOwner = new Owner(req.body);
  newOwner.save((err, owner) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(owner);
    }
  });
});

// Address routes
app.get('/addresses', (req, res) => {
  Address.find({})
    .populate('owner')
    .exec((err, addresses) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(addresses);
        }
      });
  });
  
  app.get('/addresses/:id', (req, res) => {
    Address.findById(req.params.id)
      .populate('owner')
      .exec((err, address) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(address);
        }
      });
  });
  
  app.post('/addresses', (req, res) => {
    const newAddress = new Address(req.body);
    newAddress.save((err, address) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(address);
      }
    });
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  