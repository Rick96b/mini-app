import { Building } from "entities/buildings"
import { Item } from "entities/item"

export type Request =
{
    id: string,
    commandName: string,
    itemsRequest: ItemsRequest
    buildingsRequest: BuildingsRequest
}

export type ItemsRequest =
{
    items: Item[]
    isApprovedByBank: boolean
    isCompleted: boolean
}

export type BuildingsRequest = 
{
    buildings: Building[]
    isApprovedByBank: boolean
    isApprovedByConstruction: boolean
    isCompleted: boolean
}