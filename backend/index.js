require('dotenv')
// const serverless = require('serverless-http');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080
const mockdatastockyards = require('./mockdatastockyard')
const helmet = require('helmet')
const cors = require('cors')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(helmet({crossOriginEmbedderPolicy: false}))
// app.use(helmet({crossOriginResourcePolicy: false}))

app.use(cors())

app.get('/', (req, res) => {
    res.send('App is Runnning')
})

app.get('/getStockyards', (req, res) => {
    res.send({
        data: mockdatastockyards.mockdatastockyards()
    })
})

app.listen(port, () => {
    console.log(`Drone-Acharya Backend is Running at ${port}`)
})

// module.exports.handler = serverless(app);