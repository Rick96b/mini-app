import { RequestStore } from "entities/request"

export class RootStore {
    requestStore
    constructor() {
        this.requestStore = new RequestStore(this)
    }
}