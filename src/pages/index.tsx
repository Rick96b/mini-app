import { useActiveVkuiLocation, useGetPanelForView } from '@vkontakte/vk-mini-apps-router';
import { Root, View, Panel } from '@vkontakte/vkui';
import React, { lazy } from 'react'

const Home = lazy(() => import('./Home').then((module) => ({ default: module.Home })))
const Login = lazy(() => import('./Login').then((module) => ({ default: module.Login })))
const Documents = lazy(() => import('./Documents').then((module) => ({ default: module.Documents })))
const Raiting = lazy(() => import('./Raiting').then((module) => ({ default: module.Raiting })))

const Routing = () => {
	const activeLocation = useActiveVkuiLocation();
	const activePanelDefault = useGetPanelForView('default_view'); 
    const activeLoginPanel = useGetPanelForView('login_view')

    return (
        <Root activeView={activeLocation.view || ''}>
            <View nav="default_view" activePanel={activePanelDefault || ''}>
                <Home nav='home_panel' />
                <Documents nav='documents_panel' />
                <Raiting nav='raiting_panel' />
            </View>
            <View nav="login_view" activePanel={activeLoginPanel || ''}>
                <Login nav='login_panel' />
            </View>
        </Root>
    )
}

export default Routing;