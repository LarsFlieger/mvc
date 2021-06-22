const express = require('express')
const TodoController = require('../controllers/todo')


const router = express.Router()
const controller = new TodoController()

router.get('/', (req, res) => controller.index(req, res))
router.post('/', (req,res) => controller.create(req, res))

module.exports = router
