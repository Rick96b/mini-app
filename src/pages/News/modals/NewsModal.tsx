import { Icon24Camera } from '@vkontakte/icons'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { FormItem, Input, ModalCard, File, Button } from '@vkontakte/vkui'
import { AddNews } from 'entities/news'
import React, { useState } from 'react'

interface NewsModalProps {
    id: string
}

const NewsModal:React.FC<NewsModalProps> = props => {
    const {
        id 
    } = props
    const [photo, setPhoto] = useState<File | null>(null)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const router = useRouteNavigator()

    return (
        <ModalCard id={id}> 
            <form>
                <FormItem
                    htmlFor="title"
                    top="Заголовок"
                >
                    <Input
                        id='title'
                        type='text'
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </FormItem>
                <FormItem
                    htmlFor="text"
                    top="Текст"
                >
                    <Input
                        id='text'
                        type='text'
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                    />
                </FormItem>
                <FormItem
                    top="Фото"
                >
                    <File 
                        before={<Icon24Camera role="presentation" />} 
                        size="m"
                        onChange={(value) => setPhoto(value.target.files?.item(0) as File)}
                    >
                        Открыть галерею
                    </File>
                </FormItem>
                <FormItem>
                    <Button
                        onClick={() => {
                            AddNews(title, text, photo)
                            router.hideModal()
                        }}
                        type="submit" 
                        size="l" 
                        stretched
                    >
                        Создать пост
                    </Button>
                </FormItem>
            </form>
        </ModalCard>
    )
}

export default NewsModal