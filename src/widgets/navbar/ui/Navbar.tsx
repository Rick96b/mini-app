import React, { useContext } from 'react'
import {Tabbar, TabbarItem} from '@vkontakte/vkui';

import { Icon24GraphOutline, Icon24Newsfeed, 
         Icon24Market, Icon24QuestionOutline, 
         Icon24ArticleBoxOutline, Icon24Coins } from '@vkontakte/icons';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { AppPanels } from 'shared/routes/routes';
import { UserContext } from 'entities/user';

interface NavbarProps {
    activePanel: string
}

const Navbar:React.FC<NavbarProps> = props => {
    const {
        activePanel
    } = props
    const router = useRouteNavigator()
    const {user} = useContext(UserContext)

    return (
        <Tabbar>
            <TabbarItem
                onClick={() => router.push(AppPanels.News)}
                selected={activePanel === AppPanels.News}
                data-story="news"
                text="Новости"
            >
                <Icon24Newsfeed />
            </TabbarItem>

            {
                user?.role === 'Bank' &&
                <TabbarItem
                    onClick={() => router.push(AppPanels.Bank)}
                    selected={activePanel === AppPanels.Bank}
                    data-story="bank"
                    text="Банк"
                >
                    <Icon24Coins />
                </TabbarItem>
            }

            <TabbarItem
                onClick={() => router.push(AppPanels.Documents)}
                selected={activePanel === AppPanels.Documents}
                data-story="documents"
                text="Документы"
            >
                <Icon24ArticleBoxOutline />
            </TabbarItem>

            <TabbarItem
                onClick={() => router.push(AppPanels.Store)}
                selected={activePanel === AppPanels.Store}
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