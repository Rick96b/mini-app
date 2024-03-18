import { Group, Panel, PanelHeader } from '@vkontakte/vkui'
import { getAllNews } from 'entities/news'
import { News } from 'entities/news/model/types'
import React, { useEffect, useState } from 'react'

import styles from './News.module.scss'

interface NewsProps {
    nav: string
}

const NewsPage:React.FC<NewsProps> = props => {
    const {
        nav
    } = props

    const [newsList, setNewsList] = useState<News[]>([])

    useEffect(() => {
        getAllNews().then(response => setNewsList(response))
    }, [])

    return (
        <Panel nav={nav}>
            <PanelHeader>
                Новости
            </PanelHeader>
            {newsList.map(newsItem =>
                <Group className={styles.newsItem}>
                    <h2>{newsItem.title}</h2>
                    <p>{newsItem.text}</p>
                </Group>    
            )}
        </Panel>
    )
}

export default NewsPage