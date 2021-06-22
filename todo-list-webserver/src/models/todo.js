class TodoModel {
    
    constructor() {
        this.todos = [
            { id: 0, text: 'Design Pattern vorbereiten' },
            { id: 1, text: 'Code Beispiele programmiern' }
        ]
    }

    getTodos() {
        return this.todos
    }

    getTodo(id) {
        return this.todos.find(todo => todo.id == parseInt(id))
    }

    addTodo(todoText) {
        this.todos.push({
            id: Math.max(...this.todos.map(todo => todo.id), 0) + 1,
            text: todoText
        })
    }
}

module.exports = TodoModel