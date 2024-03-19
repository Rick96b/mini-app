import { useMetaParams } from '@vkontakte/vk-mini-apps-router'
import { ModalPage } from '@vkontakte/vkui'
import { Request } from 'entities/request'
import React from 'react'

import styles from './ReviewRequestModal.module.scss'

interface ReviewRequestModalProps {
  id: string
}

const ReviewRequestModal:React.FC<ReviewRequestModalProps> = props => {
  const {
    id
  } = props

  const request = useMetaParams<{request: Request}>()?.request

  return (
    <ModalPage id={id}>
      {request?.itemsRequest.items 
        ?
        <div className={styles.container}>
          <b>Предметы</b>
          <ul className={styles.itemsList}>
          {request.itemsRequest.items.map(item => 
            <li className={styles.item}>
              <img src={item.imageLink} alt='Предмет' />
              <p>{item.name}</p>
            </li>
          )}
          </ul>
        </div>
        :
        <></>
      }
      {request?.buildingsRequest.buildings.length 
        ?  
        <div className={styles.container}>
          <ul className={styles.buildingList}>
            <b>Здания</b>
            {request.buildingsRequest.buildings.map(building => 
              <li className={styles.building}>
                <img src={building.imageLink} alt='Предмет' />
                <p>{building.name}</p>
              </li>
            )}
          </ul>
        </div>
        : 
        <></>
      }
    </ModalPage>
  )
}

export default ReviewRequestModal