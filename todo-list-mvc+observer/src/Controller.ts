import { Model } from "./Model";
import { View } from "./View";

export class Controller {
    model: Model
    view: View

    constructor() {
        this.model = new Model()
        this.view = new View(this)

        // Adds observer to view to watch model
        this.model.addObserver(this.view)
    }

    // Bridge for input data
    addTodo(todoText: string) {
        // Data validation
        if(todoText === '')
            return
            
        this.model.addTodo(todoText)
    }
}