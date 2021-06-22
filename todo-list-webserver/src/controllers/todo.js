const TodoModel = require('../models/todo')

class TodoController {
    constructor() {
        this.todoModel = new TodoModel()
    }

    index(req, res) {
        const todos = this.todoModel.getTodos()
        res.render('index', { todos })
    }

    create(req, res) {
        const { todoText } = req.body
        
        if(todoText)
            this.todoModel.addTodo(todoText)

        res.redirect('/')
    }
}

module.exports = TodoController