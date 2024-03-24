import { useMetaParams, useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { Button, ModalCard } from '@vkontakte/vkui'
import { deleteNews } from 'entities/news'
import React from 'react'

interface DeleteNewsModalProps {
    id: string
}

const DeleteNewsModal:React.FC<DeleteNewsModalProps> = props => {
    const {
        id
    } = props
    const router = useRouteNavigator()
    const newsId = useMetaParams<{newsId: string}>()?.newsId

    return (
        <ModalCard id={id}
            actions={[
                <Button
                    onClick={() => {
                        deleteNews(newsId || '')
                        router.hideModal()
                    }}
                >
                    Да
                </Button>
            ]}
        >
            <p>Вы действительно хотите удалить новость?</p>
        </ModalCard>
    )
}

export default DeleteNewsModal