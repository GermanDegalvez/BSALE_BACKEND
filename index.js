//Definición y levantamiento del servidor
const express = require('express');
const router = require('./src/routes/products.routes')
const cors = require('cors');
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use(router)



// levantamiento del servidor
// const PORT = 3050;
app.listen( process.env.PORT || 5000 );
console.log("Running on port 5000");

