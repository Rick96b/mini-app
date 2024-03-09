import { ExploreOffTwoTone } from "@mui/icons-material"

export type Request =
{
    itemsRequest: ItemsRequest
    buildingsRequest: BuildingsRequest
}

export type ItemsRequest =
{
    items: string[]
    isApprovedByBank: boolean
    isCompleted: boolean
}

export type BuildingsRequest = 
{
    buildings: boolean
    isApprovedByBank: boolean
    isApprovedByConstruction: boolean
    isCompleted: boolean
}