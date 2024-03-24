import { useMetaParams } from '@vkontakte/vk-mini-apps-router'
import { ModalCard } from '@vkontakte/vkui'
import { useLayoutEffect, useRef } from 'react'

import styles from './QrModal.module.scss'
import './QrModal.scss'

interface QrModal {
    id: string
}

const QrModal:React.FC<QrModal> = props => {
    const {
        id
    } = props

    const qrCode = useMetaParams<{qrCode: string}>()?.qrCode
    const ref = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        ref.current!.innerHTML = qrCode || ''
    }, [])

    return (
        <ModalCard id={id} className={styles.modal}>
            <div ref={ref} className={styles.container}>
            </div>
        </ModalCard>
    )
}

export default QrModal