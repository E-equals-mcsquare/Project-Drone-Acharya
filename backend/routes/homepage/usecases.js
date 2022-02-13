const express = require('express')
const router = express.Router()

router.get('/getTotalRequestsSV', (req, res) => {
    res.send({
        data: {
            totalrequests: 36,
            lastupdated: '11-01-2021'
        }
    })
})
router.get('/getTotalRequestsAM', (req, res) => {
    res.send({
        data: {
            totalrequests: 23,
            lastupdated: '23-11-2021'
        }
    })
})
router.get('/getTotalRequestsSS', (req, res) => {
    res.send({
        data: {
            totalrequests: 46,
            lastupdated: '10-02-2022'
        }
    })
})

module.exports = router