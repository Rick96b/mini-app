import { Button, Panel, PanelHeader } from '@vkontakte/vkui'
import useRequests from 'entities/request/hooks/useRequests'
import React, { useMemo, useState } from 'react'
import StockTabs from './Tabs/StockTabs'
import { RequestsList } from 'widgets/requests-list'
import { Request, approveItemsRequest, approveRequest, deleteRequest } from 'entities/request'

interface StockProps {
    nav: string
}

const Stock:React.FC<StockProps> = props => {
    const {
        nav
    } = props
    const {requests} = useRequests()
    const [selectedTab, setSelectedTab] = useState<'active' | 'archive'>('active')

    const filteredRequests = useMemo(() => requests
        .filter(request => request.isApprovedByBank && request.itemsRequest.items.length)
        .map(request => {
            request.buildingsRequest.buildings = []
            return request
        })
    , [requests])

    return (
        <Panel nav={nav}>
            <PanelHeader>
                <StockTabs
                    selected={selectedTab}
                    setSelected={(selected) => setSelectedTab(selected)}
                />
            </PanelHeader>
            {
                selectedTab === 'active' &&
                <RequestsList 
                    requests={filteredRequests.filter(request => !request.itemsRequest.isCompleted)}
                    buttons={(filteredRequests: Request) => [
                        <Button
                            onClick={(event) => {
                                event.stopPropagation()
                                approveItemsRequest(filteredRequests)
                            }}  
                        >
                            Выдано
                        </Button>
                    ]}
                />
            }
            {
                selectedTab === 'archive' &&
                <RequestsList 
                    requests={filteredRequests.filter(request => request.itemsRequest.isCompleted)}
                    buttons={(filteredRequests: Request) => [   ]}
                />
            }
        </Panel>
    )
}

export default Stock