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
        for(let i = 0; i < this.request.itemsRequest.items.length; i++) {
            if(this.request.itemsRequest.items[i].name === itemToDelete.name) {
                this.request.itemsRequest.items.splice(i, 1)
                break
            }
        }
    }

    deleteBuildingFromRequest(buildingToDelete: Item) {
        for(let i = 0; i < this.request.buildingsRequest.buildings.length; i++) {
            if(this.request.buildingsRequest.buildings[i].name === buildingToDelete.name) {
                console.log(i)
                this.request.buildingsRequest.buildings.splice(i, 1)
                break
            }
        }
    }

    cleanStore() {
        this.request.buildingsRequest.buildings = []
        this.request.itemsRequest.items = []
    }

    sendRequest(commandName: string) {
        createRequest({...this.request, commandName})
    }
}
