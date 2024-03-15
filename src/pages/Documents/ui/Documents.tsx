import { IconButton, Panel, PanelHeader } from '@vkontakte/vkui';
import React, { useContext } from 'react'
import qr from '@vkontakte/vk-qr';

import styles from './Documents.module.scss'
import { Icon28QrCodeOutline, Icon28ScanViewfinderOutline } from '@vkontakte/icons';
import { ApproveUserDocuments, UserContext } from 'entities/user';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { AppModals } from 'shared/routes/routes';
import bridge from '@vkontakte/vk-bridge';

interface DocumentsProps {
    nav: string
}

const Documents:React.FC<DocumentsProps> = props => {
    const {
        nav
    } = props
    const {user} = useContext(UserContext)
    const router = useRouteNavigator()
    const qrCode = qr.createQR(user?.id?.toString() || '');

    const openScanner = () => {
        bridge.send('VKWebAppOpenCodeReader')
        .then((data) => { 
            if (data.code_data) {
                ApproveUserDocuments(data.code_data)
            }
        })
        .catch((error) => {
            // Ошибка
            console.log(error);
        });
    }


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
            <IconButton 
                onClick={() => openScanner()}
                className={styles.openScanner}
            >
                <Icon28ScanViewfinderOutline />
            </IconButton>
            <IconButton 
                label="check all by qr-code" 
                className={styles.checkAllButton}
                onClick={() => router.push(
                    AppModals.QrModal,
                    {state: {qrCode: qrCode}}
                )}
            >
                <Icon28QrCodeOutline />
            </IconButton>
        </Panel>
    )
}

export default Documents;