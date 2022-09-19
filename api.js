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

app.use('/api/v1/management', managementRouter);

// app.post('/api/v1/management', async (req, res, next) => {
//     try {
//         const result = await Management.create(data);
//         res.status(200).json({
//             status: 'Successfully',
//             message: 'Management created successfully',
//             data: result
//         })
//     } catch (error) {
//         res.status(400).json({
//             status: 'Fail',
//             message: 'Management could not create successfully',
//             error: error.message
//         })
//     }
// })
module.exports = app;