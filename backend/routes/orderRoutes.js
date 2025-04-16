const express = require("express")
const router = express.Router()

const {getOrders} = require("../controllers/orderController")

router.get("/getorder",getOrders)

module.exports = router