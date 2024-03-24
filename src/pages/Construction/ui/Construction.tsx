import { Button, Panel, PanelHeader } from '@vkontakte/vkui'
import useRequests from 'entities/request/hooks/useRequests'
import React, { useMemo, useState } from 'react'
import ConstructionTabs from './Tabs/ConstructionTabs'
import { RequestsList } from 'widgets/requests-list'
import { Request, approveBuilding, approveBuildingProcess } from 'entities/request'

interface ConstructionProps {
  nav: string
}

const Construction:React.FC<ConstructionProps> = props => {
    const {
        nav
    } = props
    const {requests} = useRequests()
    const [selectedTab, setSelectedTab] = useState<'active' | 'process' | 'archive'>('active')


    const filteredRequests = useMemo(() => requests
        .filter(request => request.isApprovedByBank && request.buildingsRequest.buildings.length)
        .map(request => {
            request.itemsRequest.items = []
            return request
        })
    , [requests])

    return (
      <Panel nav={nav}>
        <PanelHeader>
          <ConstructionTabs
              selected={selectedTab}
              setSelected={(selected) => setSelectedTab(selected)}
          />
        </PanelHeader>
        {
            selectedTab === 'active' &&
            <RequestsList 
                requests={filteredRequests.filter(request => !request.buildingsRequest.isApprovedByConstruction)}
                buttons={(filteredRequests: Request) => [
                    <Button
                        onClick={(event) => {
                            event.stopPropagation()
                            approveBuildingProcess(filteredRequests)
                        }}  
                    >
                        Выдать стройматериалы
                    </Button>
                ]}
              />
            }
            {
            selectedTab === 'process' &&
            <RequestsList 
                requests={filteredRequests.filter(request => 
                    request.buildingsRequest.isApprovedByConstruction && 
                    !request.buildingsRequest.isCompleted
                )}
                buttons={(filteredRequests: Request) => [
                    <Button
                        onClick={(event) => {
                            event.stopPropagation()
                            approveBuilding(filteredRequests)
                        }}  
                    >
                        Подтвердить постройку
                    </Button>
                ]}
              />
            }
            {
            selectedTab === 'archive' &&
            <RequestsList 
                requests={filteredRequests.filter(request => 
                    request.buildingsRequest.isCompleted
                )}
                buttons={(filteredRequests: Request) => []}
              />
            }
      </Panel>
    )
}

export default Construction