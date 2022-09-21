const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./data/management.json');
const fs = require('fs');

// middleware
app.use(express.json());
app.use(cors());

// initial server start
app.get('/', (req, res, next) => {
    res.send('Wow server started successfully!!!!');
});

// routes
const managementRouter = require('./routes/management.route')

app.use('/api/v1/tours', managementRouter);
app.use('/api/v1', managementRouter);

module.exports = app;