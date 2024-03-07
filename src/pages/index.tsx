import { useActiveVkuiLocation, useGetPanelForView } from '@vkontakte/vk-mini-apps-router';
import { Epic, Root, View } from '@vkontakte/vkui';
import { UserContext } from 'entities/user';
import React, { lazy, useContext } from 'react'
import { Navbar } from 'widgets/navbar';
import { Store } from './Store';

const Home = lazy(() => import('./Home').then((module) => ({ default: module.Home })))
const Login = lazy(() => import('./Login').then((module) => ({ default: module.Login })))
const Documents = lazy(() => import('./Documents').then((module) => ({ default: module.Documents })))
const Raiting = lazy(() => import('./Raiting').then((module) => ({ default: module.Raiting })))

const Routing = () => {
    const {user} = useContext(UserContext)
	const activeLocation = useActiveVkuiLocation();
	const activePanelDefault = useGetPanelForView('default_view'); 
    const activeLoginPanel = useGetPanelForView('login_view')
    const [activeStory, setActiveStory] = React.useState('raiting');
    return (
        <Epic 
            className='app-container' 
            activeStory={activeStory}
            tabbar={<Navbar isManager switchStory={setActiveStory} activeStory={activeStory}/>}
        >
{/*                 <View nav="default_view" activePanel={activePanelDefault || ''}>
                    <Home nav='home_panel' />
                    <Documents nav='documents_panel' />
                    <Raiting nav='raiting_panel' />
                </View> */}
                <View id='raiting' activePanel='raiting_panel'>
                    <Raiting nav='raiting_panel' />
                </View>
                <View nav="login_view" activePanel={activeLoginPanel || ''}>
                    <Login nav='login_panel' />
                </View>

                <View id='store' activePanel='store_panel'>
                    <Store nav='store_panel' />
                </View>
        </Epic>
    )
}

export default Routing;