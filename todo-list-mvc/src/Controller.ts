import { Model, Todo } from "./Model";
import { View } from "./View";

export class Controller {
    model: Model
    view: View

    constructor() {
        this.model = new Model()
        this.view = new View(this)
    }

    // Bridge for input data
    addTodo(todoText: string) {
        // Data Validation
        if(todoText === '')
            return
        
        this.model.addTodo(todoText)
    }

    // Bridge for getting todos
    displayTodos() {
        const todos: Todo[] = this.model.getTodos()
        this.view.update(todos)
    }
}