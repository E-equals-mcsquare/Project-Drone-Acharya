const express = require('express')
const router = express.Router()

router.get('/getDataOverview', (req, res) => {
    res.send({
        data: [{
            kpi: 'Upcoming Flights',
            kpivalue: 3
        }, {
            kpi: 'Completed Flights',
            kpivalue: 21
        },]
    })
})

router.get('/getActions', (req, res) => {
    res.send({
        data: [{
            kpi: 'Reviews',
            kpivalue: 30
        }, {
            kpi: 'Approvals',
            kpivalue: 163
        },]
    })
})

router.get('/getQuality', (req, res) => {
    res.send({
        data: [{
            kpi: 'Data Quality Alerts',
            kpivalue: 20
        }]
    })
})

router.get('/getDataComparison', (req, res) => {
    res.send({
        data: [{
            kpi: 'Mismatch Alerts',
            kpivalue: 10
        }]
    })
})


module.exports = router