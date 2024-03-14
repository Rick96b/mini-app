import {
  createHashRouter,
  createModal,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from '@vkontakte/vk-mini-apps-router';

export const DEFAULT_ROOT = 'default_root';

export enum AppView {
  Main = 'main',
}

export enum AppPanels {
  Rating = '/',
  RatingView = '/ratingView',
  Login = '/login',
  Achievements = '/achievements',
  Store = '/store'
}

export enum AppModals {
  UpdateRating = 'UpdateRating',
  BaseItemModal = 'BaseListModal',
  BaseItemToCommandModal = 'BaseItemToCommandModal',
  BaseProductItemModal = 'BaseProductItemModal'
}

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(AppView.Main, [
      createPanel(AppPanels.Rating, '/', [
        createModal(AppModals.UpdateRating, '/UpdateRating')
      ]),
      createPanel(AppPanels.RatingView, '/RatingView'),
      createPanel(AppPanels.Login, '/Login'),
      createPanel(AppPanels.Achievements, '/achievements', [
        createModal(AppModals.BaseItemModal, '/achievements/BaseListModal'),
        createModal(AppModals.BaseItemToCommandModal, '/achievements/BaseListModal/BaseItemToCommandModal')
      ]),
      createPanel(AppPanels.Store, '/Store', [
        createModal(AppModals.BaseProductItemModal, '/Store/BaseProductItemModal'),
      ])
    ]),
  ])
])

export const router = createHashRouter(routes.getRoutes());
