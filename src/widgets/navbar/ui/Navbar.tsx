import React from 'react'
import {Tabbar, TabbarItem} from '@vkontakte/vkui';

import { Icon24GraphOutline, Icon28NewsfeedOutline, 
         Icon24Market, Icon24QuestionOutline } from '@vkontakte/icons';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { AppPanels } from 'shared/routes/routes';

interface NavbarProps {
    activePanel: string
}

const Navbar:React.FC<NavbarProps> = props => {
    const {
        activePanel
    } = props
    const router = useRouteNavigator()

    return (
        <Tabbar>

            <TabbarItem
                onClick={() => {}}
                selected={activePanel === 'documents'}
                data-story="documents"
                text="Документы"
            >
                <Icon28NewsfeedOutline />
            </TabbarItem>

            <TabbarItem
                onClick={() => {}}
                selected={activePanel === 'store'}
                data-story="store"
                text="Магазин"
            >    
                < Icon24Market />
            </TabbarItem>

            <TabbarItem
                onClick={() => router.push(AppPanels.Achievements)}
                selected={activePanel === AppPanels.Achievements}
                data-story="achievements"
                text="Тайны"
            >
                <Icon24QuestionOutline />
            </TabbarItem>

            <TabbarItem
                onClick={() => router.push(AppPanels.Rating)}
                selected={activePanel === AppPanels.Rating}
                data-story="raiting"
                text="Рейтинг"
            >
                <Icon24GraphOutline />
            </TabbarItem>

        </Tabbar>
    )
};

export default Navbar