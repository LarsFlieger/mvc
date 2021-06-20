import { Controller } from "./Controller";
import { Observer } from "./Observer/Observer";

export class View implements Observer {
    root: HTMLDivElement

    constructor(controller: Controller) {
        this.root = document.querySelector('div#root')

        const time = document.createElement('h1')
        time.textContent = "Init"
        this.root.append(time)

        const button = document.createElement('button')
        button.onclick = () => controller.updateTime()
        button.textContent = "Update time"
        this.root.append(button)
    }

    update(data: any) {
        this.root.querySelector('h1').textContent = data.time
    }
}