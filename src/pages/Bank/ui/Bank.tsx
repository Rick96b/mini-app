import { Button, Panel, PanelHeader } from '@vkontakte/vkui'
import { Request, approveRequest, deleteRequest } from 'entities/request'
import React, { useState } from 'react'
import { RequestsList } from 'widgets/requests-list'
import BankTabs from './Tabs/BankTabs'
import useRequests from 'entities/request/hooks/useRequests'

interface BankProps {
    nav: string
}

const Bank:React.FC<BankProps> = props => {
    const {
        nav
    } = props
    const {requests} = useRequests()
    const [selectedTab, setSelectedTab] = useState<'active' | 'archive'>('active')

    return (
        <Panel nav={nav}>
            <PanelHeader>
                <BankTabs
                    selected={selectedTab}
                    setSelected={(selected) => setSelectedTab(selected)}
                />
            </PanelHeader>
            {
                selectedTab === 'active' &&
                <RequestsList 
                    requests={requests.filter(request => !request.isApprovedByBank)}
                    buttons={(request: Request) => [
                        <Button
                            onClick={(event) => {
                                event.stopPropagation()
                                approveRequest(request)
                            }}  
                        >
                            Одобрить
                        </Button>,
                        <Button
                            onClick={(event) => {
                                event.stopPropagation()
                                deleteRequest(request)
                            }}  
                        >
                            Отменить
                        </Button>
                    ]}
                />
            }
            {
                selectedTab === 'archive' &&
                <RequestsList 
                    requests={requests.filter(request => request.isApprovedByBank)}
                    buttons={(request: Request) => [   ]}
                />
            }
        </Panel>
    )
}

export default Bank