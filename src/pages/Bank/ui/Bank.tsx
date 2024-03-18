import { Button, Panel, PanelHeader } from '@vkontakte/vkui'
import { Request, getAllRequests } from 'entities/request'
import React, { useEffect, useState } from 'react'
import { RequestsList } from 'widgets/requests-list'
import BankTabs from './Tabs/BankTabs'

interface BankProps {
    nav: string
}

const Bank:React.FC<BankProps> = props => {
    const {
        nav
    } = props
    const [requests, setRequests] = useState<Request[]>([])
    const [selectedTab, setSelectedTab] = useState('active')

    useEffect(() => {
        getAllRequests().then(response => setRequests(response))
    }, [])

    return (
        <Panel nav={nav}>
            <PanelHeader>
                <BankTabs
                    selected={selectedTab}
                    setSelected={(selected:string) => setSelectedTab(selected)}
                />
            </PanelHeader>
            <RequestsList 
                requests={requests}
                buttons={[
                    <Button>Хехе</Button>,
                    <Button>Хуху</Button>
                ]}
            />
        </Panel>
    )
}

export default Bank