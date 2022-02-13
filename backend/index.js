require('dotenv')
const express = require('express');
const app = express();
const port = process.env.PORT || 8080
const cors = require('cors')

const routes = require('./routes/index')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors())

app.use('/api', routes)

app.get('/', (req, res) => {
    res.send('App is Runnning')
})


app.listen(port, () => {
    console.log(`Drone-Acharya Backend is Running at ${port}`)
})