import { makeAutoObservable } from "mobx";
import { Request } from "entities/request/model/request_types";
import { RootStore } from "./rootStore";
import { Item } from "entities/item";
import { createRequest } from "entities/request";

export class RequestStore {
    rootStore
    request:Request = {
        id: '',
        commandName: '',
        itemsRequest: {
            items: [],
            isApprovedByBank: false,
            isCompleted: false
        },
        buildingsRequest:
        {
            buildings: [],
            isApprovedByBank: false,
            isApprovedByConstruction: false,
            isCompleted: false
        }
    };

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
        makeAutoObservable(this)
    }

    addItemToRequest(newItem: Item) {
        this.request.itemsRequest?.items.push(newItem)
    }

    deleteItemFromRequest(itemToDelete: Item) {
        
    }

    approveItemsRequestByBank() {
        this.request.itemsRequest!.isApprovedByBank = true
    }

    sendRequest(commandName: string) {
        createRequest({...this.request, commandName})
    }
}
