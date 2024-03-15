import vkBridge, { parseURLSearchParamsForGetLaunchParams } from '@vkontakte/vk-bridge';
import { useAdaptivity, useAppearance, useInsets } from '@vkontakte/vk-bridge-react';
import { AdaptivityProvider, ConfigProvider, AppRoot } from '@vkontakte/vkui';
import { RouterProvider } from '@vkontakte/vk-mini-apps-router';
import '@vkontakte/vkui/dist/vkui.css';
import './styles/index.scss'

import { transformVKBridgeAdaptivity } from '../shared/utils';
import { router } from 'shared/routes/routes';
import { App } from 'pages';
import { useEffect, useState } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { UserContext, UserInfo, getUserById } from 'entities/user';
import { Loader } from 'shared/components';
import WithStore from './providers/with-store';

export const AppConfig = () => {
  const vkBridgeAppearance = useAppearance() || undefined;
  const vkBridgeInsets = useInsets() || undefined;
  const adaptivity = transformVKBridgeAdaptivity(useAdaptivity());
  const { vk_platform } = parseURLSearchParamsForGetLaunchParams(window.location.search);

  const [user, setUser] = useState<UserInfo | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const userId = (await bridge.send('VKWebAppGetLaunchParams')).vk_user_id
      const userData = await getUserById(userId.toString())
      setUser(userData ? {...userData, id:userId} : null)
      setLoading(false)
    }
    fetchData();
  }, []);

  if(loading) return <Loader />

  return (
    <ConfigProvider
      appearance={vkBridgeAppearance}
      platform={vk_platform === 'desktop_web' ? 'vkcom' : undefined}
      isWebView={vkBridge.isWebView()}
      hasCustomPanelHeaderAfter={false}
    >
      <AdaptivityProvider {...adaptivity}>
        <AppRoot mode="full" safeAreaInsets={vkBridgeInsets}>
          <RouterProvider router={router}>
            <UserContext.Provider value={{user, setUser}}>
              <WithStore>
                <App />
              </WithStore>
            </UserContext.Provider>
          </RouterProvider>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
