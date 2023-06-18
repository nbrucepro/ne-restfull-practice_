const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');
const app = express();

// Middleware for JSON body parsing
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// set listeners

const port = 4500;

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
