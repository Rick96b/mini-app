import React from 'react'

import styles from './DocumentsAccepted.module.scss'
import { Icon56ThumbsUpOutline } from '@vkontakte/icons'


const DocumentsAccepted = () => {
  return (
    <div className={styles.accepted}>
        <div className={styles.acceptedInfo}>
            <Icon56ThumbsUpOutline />
            <p>Все документы сданы!</p>
        </div>
    </div>
  )
}

export default DocumentsAccepted