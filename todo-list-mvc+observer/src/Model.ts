import { Observable } from "./Observer/Observable";

export interface Todo {
    id: number,
    text: string
}

export class Model extends Observable {
    todos: Todo[]

    constructor() {
        super()

        this.todos = []
    }

    addTodo(todoText: string): void {
        // Creates new todo 
        this.todos.push({
            id: Math.max(...this.todos.map((todo: Todo) => todo.id), 0) + 1,
            text: todoText
        })
        
        // Informs the observer that data has changed
        this.notifyObserver({ todos: this.todos })
    } 
}