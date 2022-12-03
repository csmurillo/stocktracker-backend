const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
var cors = require('cors');
const fetch = require('node-fetch');
const User = require('./models/user');
const { WatchList } = require('./models/watchList');

const expressValidator = require('express-validator');

// routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const watchListRoutes = require('./routes/watchList');
const { stockPrice } = require('./controller/user');

const app = express();

const server = http.createServer(app);

app.use(expressValidator());
app.use(express.json());
app.use(cors({origin: '*'}));

// connect to mongodb
mongoose.connect(process.env.DATABASE)
        .then(()=>{console.log('db connected');})
        .catch(()=>{console.log('error db');});

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', watchListRoutes);

const port = process.env.PORT || 3000;

server.listen(port, ()=>{
    console.log(`port is ${port}`);
});
