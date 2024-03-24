import { Button, FixedLayout, Group, IconButton, Panel, PanelHeader } from '@vkontakte/vkui'
import React from 'react'

import styles from './News.module.scss'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { AppModals } from 'shared/routes/routes'
import useNews from 'entities/news/hooks/useNews'
import { Icon24Delete } from '@vkontakte/icons'

interface NewsProps {
    nav: string
}

const NewsPage:React.FC<NewsProps> = props => {
    const {
        nav
    } = props
    const router = useRouteNavigator()
    const {news} = useNews()

    return (
        <Panel nav={nav}>
            <PanelHeader>
                Новости
            </PanelHeader>
            <FixedLayout vertical="bottom" className={styles.addNews}>
                <Button
                    onClick={() => router.push(AppModals.NewsModal)}
                >
                    Добавить новость
                </Button>
            </FixedLayout>
            {news.map(newsItem =>
                <Group className={styles.newsItem}>
                    {
                        newsItem.imageLink && 
                        <img src={newsItem.imageLink} className={styles.img} alt='image' />
                    }                    
                    <div className={styles.infoContainer}>
                        <h2>{newsItem.title}</h2>
                        <p>{newsItem.text}</p>
                    </div> 
                    <IconButton 
                        className={styles.deleteNews}
                        onClick={() => router.push(
                            AppModals.DeleteNewsModal,
                            {state: {newsId: newsItem.id}}
                        )}
                        label="Удалить"
                    >
                        <Icon24Delete />
                    </IconButton>
                </Group>    
            )}
        </Panel>
    )
}

export default NewsPage