// Improtas
const express = require('express');
const router = require('./src/routes/products.routes')
const cors = require('cors')
const app = express();

// middleware
app.use(cors())
app.use(router)


// levantamiento del servidor
const PORT = 3050;
app.listen( PORT, () => console.log(`Server running on port ${PORT}`))

