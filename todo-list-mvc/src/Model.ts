export interface Todo {
    id: number,
    text: string
}

export class Model {
    todos: Todo[]

    constructor() {
        this.todos = []
    }

    getTodos(): Todo[] {
        return this.todos
    }

    addTodo(todoText: string): void {
        // Creates new todo 
        this.todos.push({
            id: Math.max(...this.todos.map((todo: Todo) => todo.id), 0) + 1,
            text: todoText
        })
    }
}