const express = require('express');
const morgan = require('morgan');
const app = express();

app.enable('trust proxy');
app.use(morgan("dev"));


app.get('/', (req, res) => {
    res.status(200).send('<h1>Hi there!!</h1>')
})

module.exports = app

// docker-compose up --build