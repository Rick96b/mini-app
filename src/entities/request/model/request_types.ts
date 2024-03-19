import { Building } from "entities/buildings"
import { Item } from "entities/item"

export type Request =
{
    id: string,
    isApprovedByBank: boolean,
    commandName: string,
    itemsRequest: ItemsRequest
    buildingsRequest: BuildingsRequest
}

export type ItemsRequest =
{
    items: Item[]
    isCompleted: boolean
}

export type BuildingsRequest = 
{
    buildings: Building[]
    isApprovedByConstruction: boolean
    isCompleted: boolean
}