require('dotenv')
const app = require('express')()
const port = process.env.PORT || 8080
const mockdatastockyards = require('./mockdatastockyard')
const helmet = require('helmet')
const cors = require('cors')

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