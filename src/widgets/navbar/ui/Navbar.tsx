import React from 'react'

import {Tabbar, TabbarItem} from '@vkontakte/vkui';
import { Icon28ClipOutline, Icon24GraphOutline, Icon28MessageOutline, Icon28NewsfeedOutline, Icon28ServicesOutline, Icon28UserCircleOutline, Icon28UserOutline, Icon56NewsfeedOutline } from '@vkontakte/icons';

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
                selected={activeStory === 'services'}
                data-story="services"
                text="Сервисы"
            >
                <Icon28ServicesOutline />
            </TabbarItem>
            <TabbarItem
                onClick={onStoryChange}
                selected={activeStory === 'messages'}
                data-story="messages"
                text="Сообщения"
            >
                <Icon28MessageOutline />
            </TabbarItem>
            <TabbarItem
                onClick={onStoryChange}
                selected={activeStory === 'clips'}
                data-story="clips"
                text="Клипы"
            >
                <Icon28ClipOutline />
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