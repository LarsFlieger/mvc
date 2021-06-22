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

    show(req, res) {
        const { id } = req.params

        const todo = this.todoModel.getTodo(id)

        if(todo === undefined || todo === null) 
            res.render('404')
        else
            res.render('todo', { todo })
    }
}

module.exports = TodoController