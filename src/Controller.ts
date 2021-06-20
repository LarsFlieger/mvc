import { Model } from "./Model";
import { View } from "./View";

export class Controller {
    model: Model
    view: View

    constructor() {
        this.model = new Model()
        this.view = new View(this)

        this.model.addObserver(this.view)
    }

    updateTime() {
        this.model.setTime(Date.now())
    }
}