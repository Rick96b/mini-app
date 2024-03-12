import React from 'react'
import {Tabbar, TabbarItem} from '@vkontakte/vkui';

import { Icon24GraphOutline, Icon28NewsfeedOutline, 
         Icon24Market, Icon24QuestionOutline } from '@vkontakte/icons';

interface NavbarProps {
    activePanel: string
}

const Navbar:React.FC<NavbarProps> = props => {
    const {
        activePanel
    } = props
    const onStoryChange = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {};

  return (
        <Tabbar>

            <TabbarItem
                onClick={onStoryChange}
                selected={activePanel === 'documents'}
                data-story="documents"
                text="Документы"
            >
                <Icon28NewsfeedOutline />
            </TabbarItem>

            <TabbarItem
                onClick={onStoryChange}
                selected={activePanel === 'store'}
                data-story="store"
                text="Магазин"
            >    
                < Icon24Market />
            </TabbarItem>

            <TabbarItem
                onClick={onStoryChange}
                selected={activePanel === 'achievements'}
                data-story="achievements"
                text="Тайны"
            >
                <Icon24QuestionOutline />
            </TabbarItem>

            <TabbarItem
                onClick={onStoryChange}
                selected={activePanel === 'raiting'}
                data-story="raiting"
                text="Рейтинг"
            >
                <Icon24GraphOutline />
            </TabbarItem>

        </Tabbar>
    )
};

export default Navbar