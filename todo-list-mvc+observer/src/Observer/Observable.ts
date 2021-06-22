import { Observer } from "./Observer";

export class Observable {
    obs: Observer[]

    constructor() {
        this.obs = []
    }

    addObserver(observer: Observer) {
        this.obs.push(observer)
    }

    notifyObserver(data: any) {
        this.obs.forEach((observer: Observer) => observer.update(data))
    }
}