const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const authMiddleware = require('./middleware/authMiddleware');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const employeeLaptopRoutes = require('./routes/employeeLaptopRoutes');

const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');

// Enable CORS for all routes
const corsOptions = {
  origin: '*', // Allow requests from this origin
  methods: ['GET', 'POST'], // Allow only these HTTP methods
};

app.use(cors(corsOptions));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware for JSON body parsing
app.use(express.json());


// Routes
app.use('/auth', authRoutes);
// Routes
app.use('/laptops',authMiddleware, employeeLaptopRoutes);

// Start the server
const port = 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log("Database connected successfully!");
});

