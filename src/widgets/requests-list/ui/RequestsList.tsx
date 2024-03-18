import { Request } from 'entities/request'
import React from 'react'

import styles from './RequestList.module.scss'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { AppModals } from 'shared/routes/routes'

interface RequestionsListProps {
    requests: Request[]
    buttons: React.ReactNode[]
}

const RequestionsList:React.FC<RequestionsListProps> = props => {
    const {
        requests,
        buttons
    } = props
    const router = useRouteNavigator()

    return (
        <ul>
            {
                requests.map(request =>
                    <li 
                        className={styles.requestItem}
                        onClick={() => router.push(
                            AppModals.RequestModal,
                            {state: {request: request}}
                        )}
                    >
                        <div className={styles.requestInfo}>
                            <p>{request.commandName}</p>
                            <span>{getRequestPrice(request)}</span>
                        </div>
                        <div className={styles.requestButtons}>
                            {buttons.map(button => button)}
                        </div>
                    </li>
                )
            }
        </ul>
    )
}

function getRequestPrice(request: Request) {
    let price = 0;
    request.buildingsRequest.buildings.forEach(building => price += building.price)
    request.itemsRequest.items.forEach(item => price += item.price)
    return price
}

export default RequestionsList