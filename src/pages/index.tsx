import { FC, useCallback, useContext, useEffect } from 'react'
import {
  SplitLayout,
  SplitCol,
  View,
  usePlatform,
  Platform,
  Epic,
  useAdaptivityWithJSMediaQueries,
} from '@vkontakte/vkui'
import bridge, { SharedUpdateConfigData } from '@vkontakte/vk-bridge'
import {
  useActiveVkuiLocation,
  usePopout,
  useRouteNavigator,
} from '@vkontakte/vk-mini-apps-router'
import { Navbar } from 'widgets/navbar'
import { AppPanels, AppView } from 'shared/routes/routes'
import { Rating } from './Rating'
import { Modals } from './modals'
import { RatingView } from './RatingView'
import { Login } from './Login'
import { UserContext } from 'entities/user'
import { Achievements } from './Achievements'
import { Store } from './Store'
import { Documents } from './Documents'
import { News } from './News'
import { Bank } from './Bank'
import { Stock } from './Stock'
import { Construction } from './Construction'


const APP_WIDTH = 911
const APP_PADDING = 100

export const App: FC = () => {
  const {user} = useContext(UserContext)
  /** Возвращает активное всплывающее окно | null */
  const routerPopout = usePopout()
  /** Возвращает платформу IOS, ANDROID, VKCOM */
  const platform = usePlatform()
  /** Возвращает объект с помощью которого можно совершать переходы в навигации */
  const routeNavigator = useRouteNavigator()

  /** Получаем текущую позицию */
  const {
    panelsHistory,
    view: activeView = AppView.Main,
    panel: activePanel = AppPanels.Rating
  } = useActiveVkuiLocation()


  useEffect(() => {
    if(!user) {
      routeNavigator.push('/login')
    } else {
      routeNavigator.push('/')
    }
  }, [user])
  /** Получаем тип устройства */
  const { isDesktop } = useAdaptivityWithJSMediaQueries()
  const onSwipeBack = useCallback(() => routeNavigator.back(), [routeNavigator])

  /** Растягивание экрана на всю ширину окна для десктопа */
  useEffect(() => {
    /** Callback на изменение размеров страницы */
    async function iframeResize() {
      // Проверяем, что платформа VK.COM
      if (platform !== Platform.VKCOM) return

      // Получаем данные конфигурации
      const { viewport_height } = (await bridge.send(
        'VKWebAppGetConfig'
      )) as SharedUpdateConfigData

      // Обновляем размер страницы
      bridge.send('VKWebAppResizeWindow', {
        width: APP_WIDTH,
        height: viewport_height - APP_PADDING,
      })
    }

    iframeResize()
    window.addEventListener('resize', iframeResize)

    return () => window.removeEventListener('resize', iframeResize)
  }, [platform])


  return (
    <SplitLayout popout={routerPopout} modal={<Modals />}>
      <SplitCol>
        <Epic
          activeStory={activeView}
          tabbar={<Navbar activePanel={activePanel} />}
        >
          <View
            onSwipeBack={onSwipeBack}
            history={panelsHistory}
            nav={AppView.Main}
            activePanel={activePanel}
          >
            <Rating nav={AppPanels.Rating} />
            <RatingView nav={AppPanels.RatingView} />
            <Login nav={AppPanels.Login} />
            <Achievements nav={AppPanels.Achievements}/>
            <Store nav={AppPanels.Store} />
            <Documents nav={AppPanels.Documents} />
            <News nav={AppPanels.News} />
            <Bank nav={AppPanels.Bank} />
            <Stock nav={AppPanels.Stock} />
            <Construction nav={AppPanels.Construction} />
          </View>
        </Epic>
      </SplitCol>
    </SplitLayout>
  )
}
