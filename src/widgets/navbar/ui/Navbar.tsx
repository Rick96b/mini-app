import React from 'react'
import {Tabbar, TabbarItem} from '@vkontakte/vkui';

import { Icon28ClipOutline, Icon24GraphOutline, Icon28MessageOutline, Icon28NewsfeedOutline, 
         Icon28ServicesOutline, Icon28UserCircleOutline, Icon28UserOutline, 
         Icon56NewsfeedOutline, Icon24Market } from '@vkontakte/icons';

interface NavbarProps {
    isManager: boolean
    switchStory: (story: string) => void
    activeStory: string
}

const Navbar:React.FC<NavbarProps> = props => {
    const {
        isManager,
        switchStory,
        activeStory
    } = props
    const onStoryChange = (e: React.MouseEvent<HTMLElement, MouseEvent>) => switchStory(e.currentTarget.dataset.story || '');

  return (
        <Tabbar>

            <TabbarItem
                onClick={onStoryChange}
                selected={activeStory === 'feed'}
                data-story="raiting"
                text="Новости"
            >
                <Icon28NewsfeedOutline />
            </TabbarItem>

            <TabbarItem
                onClick={onStoryChange}
                selected={activeStory === 'events'}
                data-story="events"
                text="Конкурсы"
            >
                <Icon28ServicesOutline />
            </TabbarItem>

            <TabbarItem
                onClick={onStoryChange}
                selected={activeStory === 'store'}
                data-story="store"
                text="Магазин"
            >    
                < Icon24Market />
            </TabbarItem>

            <TabbarItem
                onClick={onStoryChange}
                selected={activeStory === 'achievements'}
                data-story="achievements"
                text="Тайны"
            >
                <Icon24QuestionOutline />
            </TabbarItem>

            <TabbarItem
                onClick={onStoryChange}
                selected={activeStory === 'raiting'}
                data-story="raiting"
                text="Рейтинг"
            >
                <Icon24GraphOutline />
            </TabbarItem>

        </Tabbar>
    )
};

export default Navbar