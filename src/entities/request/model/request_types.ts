export type Request =
{

    itemsRequest: 
    {
        items: string[]
        isApprovedByBank: boolean
        isCompleted: boolean
    }

    buildingsRequest:
    {
        buildings: boolean
        isApprovedByBank: boolean
        isApprovedByConstruction: boolean
        isCompleted: boolean
    }

}
