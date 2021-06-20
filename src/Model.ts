import { Observable } from "./Observer/Observable";

export class Model extends Observable {
    time: number

    constructor() {
        super()

        this.time = Date.now()
    }

    setTime(time: number): void {
        this.time = time
        
        this.notifyObserver({ time: this.time })
    } 
}