import { RouterProvider, createHashParamRouter } from "@vkontakte/vk-mini-apps-router"
import { UserContext } from "entities/user";
import { Suspense, useContext } from "react";

export const WithRouter = ({children}:{children: React.ReactChild}) => {
  const {user} = useContext(UserContext)

  const router = createHashParamRouter(user ? [
    {
      path: '/',
      panel: 'documents_panel',
      view: 'default_view',
    },
    {
      path: '/documents',
      panel: 'documents_panel',
      view: 'default_view',
    },
    {
      path: '/raiting',
      panel: 'raiting_panel',
      view: 'default_view',
    },
  ] : 
  [
    {
      path: '/login',
      panel: 'login-form_panel',
      view: 'login_view',
    },
    {
      path: '/',
      panel: 'login_panel',
      view: 'login_view',
    },
  ]);

    return (
        <RouterProvider router={router}>
          <Suspense fallback='...'>
            {children}
          </Suspense>
        </RouterProvider>
    )
}