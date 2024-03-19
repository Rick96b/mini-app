import { makeAutoObservable } from "mobx";
import { Request } from "entities/request/model/request_types";
import { RootStore } from "./rootStore";
import { Item } from "entities/item";
import { createRequest } from "entities/request";
import { Building } from "entities/buildings";

export class RequestStore {
    rootStore
    request:Request = {
        id: '',
        commandName: '',
        isApprovedByBank: false,
        itemsRequest: {
            items: [],
            isCompleted: false
        },
        buildingsRequest:
        {
            buildings: [],
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
    
    addBuildingToRequest(newBuilding: Building) {
        this.request.buildingsRequest?.buildings.push(newBuilding)
    }

    deleteItemFromRequest(itemToDelete: Item) {
        
    }

    deleteBuildingFromRequest(buildingToDelete: Item) {
        
    }

    sendRequest(commandName: string) {
        createRequest({...this.request, commandName})
    }
}
