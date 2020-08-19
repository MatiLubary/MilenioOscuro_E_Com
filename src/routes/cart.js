const express = require('express')
const router = express.Router()
const cartControllers = require('../Controllers/cartControllers')

router.get('/' , cartControllers.home )

router.post('/' , cartControllers.store)

router.get('/payment', cartControllers.pay)

router.post('/delete/:id' , cartControllers.delete) 

router.get('/pagoExitoso' , cartControllers.successfull)

module.exports = router