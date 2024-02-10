import { IconButton, Panel, PanelHeader } from '@vkontakte/vkui';
import React from 'react'

import styles from './Documents.module.scss'
import { Icon28QrCodeOutline } from '@vkontakte/icons';

interface DocumentsProps {
    nav: string
}

const Documents:React.FC<DocumentsProps> = props => {
    const {
        nav
    } = props

    const documents = [
        {
            text: 'Blablabla',
            isChecked: false
        }
    ]

    return (
        <Panel nav={nav}>
            <PanelHeader className={styles.header}>
                Документы
            </PanelHeader>
            <div className={styles.documentsContainer}>
                {
                    documents.map(document => 
                        <div className={styles.document}>
                            {document.text}
                        </div>
                    )
                } 
            </div>
            <div className={styles.checkAll}>
                <IconButton label="check all by qr-code" className={styles.checkAllButton}>
                    <Icon28QrCodeOutline />
                </IconButton>
            </div>
        </Panel>
    )
}

export default Documents;