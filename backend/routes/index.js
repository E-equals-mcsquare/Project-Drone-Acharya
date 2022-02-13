const express = require('express')
const router = express.Router()

const routerKpisection = require("./homepage/kpisection");
const routerUsecasesection = require("./homepage/usecases")
const routerMapviewStockyards = require("./mapview/stockyards")

router.use("/homepage/kpis", routerKpisection)
router.use("/homepage/usecases", routerUsecasesection)
router.use("/mapview", routerMapviewStockyards)


module.exports = router