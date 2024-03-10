import { useActiveVkuiLocation, useGetPanelForView } from '@vkontakte/vk-mini-apps-router';
import { Epic, Root, View } from '@vkontakte/vkui';
import { UserContext } from 'entities/user';
import React, { lazy, useContext, useState } from 'react'
import { Navbar } from 'widgets/navbar';
import { Store } from './Store';
import Achievements from './Achievements/ui/Achievements';
import { RaitingView } from './RaitingView';
import { Command } from 'entities/command';

const Home = lazy(() => import('./Home').then((module) => ({ default: module.Home })))
const Login = lazy(() => import('./Login').then((module) => ({ default: module.Login })))
const Documents = lazy(() => import('./Documents').then((module) => ({ default: module.Documents })))
const Raiting = lazy(() => import('./Raiting').then((module) => ({ default: module.Raiting })))

const Routing = () => {
    const {user} = useContext(UserContext)
    const [raitingModalPanel, setRaitingModalPanel] = useState('raiting_panel');
    const [activeCommand, setActiveCommand] = useState<Command>()
    const activeLoginPanel = useGetPanelForView('login_view')
    const [activeStory, setActiveStory] = useState('raiting');
    console.log(raitingModalPanel)
    return (
        <>
        {
            user ? 
            <Epic 
                className='app-container' 
                activeStory={activeStory}
                tabbar={<Navbar isManager switchStory={setActiveStory} activeStory={activeStory}/>}
            >
                <View id='raiting' activePanel={raitingModalPanel}>
                    <Raiting 
                        nav='raiting_panel' 
                        setModalPanel={(activeModal:string) => setRaitingModalPanel(activeModal)}
                        setActiveCommand={(Command:Command) => setActiveCommand(Command)}
                    />
                    <RaitingView
                        nav='raitingView_panel' 
                        setModalPanel={(activeModal:string) => setRaitingModalPanel(activeModal)}
                        activeCommand={activeCommand}
                    />
                </View>
                <View id='achievements' activePanel='achievements_panel'>
                    <Achievements nav='achievements_panel' />
                </View>
                <View nav='login_view' activePanel={activeLoginPanel || ''}>
                    <Login nav='login_panel' />
                </View>
                <View id='store' activePanel='store_panel'>
                    <Store nav='store_panel' />
                </View>
                <View id='documents' activePanel='documents_panel'>
                    <Documents nav='documents_panel' />
                </View>
            </Epic>
            :
            <Root activeView='login'>
                <View id='login' activePanel='login_panel'>
                    <Login nav='login_panel' />
                </View>
            </Root>
        }
        </>
    )
}

export default Routing;