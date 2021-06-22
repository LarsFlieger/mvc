import { Controller } from "./Controller";
import { Todo } from "./Model";
import { Observer } from "./Observer/Observer";

export class View implements Observer {
    root: HTMLDivElement

    constructor(controller: Controller) {
        this.root = document.querySelector('div#root')

        // Creates list for todos
        const list = document.createElement('ul')
        this.root.append(list)

        // Creates input field for new todo
        const input = document.createElement('input')
        input.type = 'text'
        this.root.append(input)

        // Creates submit button and adds input field 
        const button = document.createElement('button')
        button.onclick = () => {
            const input = document.querySelector('input')
            controller.addTodo(input.value)
            input.value = ''
        }
        button.textContent = 'Add Todo'
        this.root.append(button)
    }

    update(data: {todos: Todo[]}) {
        // Get list item
        const list = this.root.querySelector('ul')

        // Reset list items
        list.innerHTML = ''

        // Render with new data
        data.todos.forEach((todo: Todo) => {
            list.innerHTML += `<li>${todo.text}</li>`
        })
    }
}