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
  Store = '/store',
  ShoppingCart = '/shoppingCart',
  Documents = '/documents',
  News = '/news',
  Bank = '/bank',
  Stock = '/stock',
  Construction = '/construction',
  Residents = '/residents',
}

export enum AppModals {
  UpdateRating = 'UpdateRating',
  BaseItemModal = 'BaseListModal',
  BaseItemToCommandModal = 'BaseItemToCommandModal',
  BaseProductItemModal = 'BaseProductItemModal',
  QrModal = 'QrModal',
  RequestModal = 'RequestModal',
  NewsModal = 'NewsModal',
  DeleteNewsModal = 'DeleteNewsModal',
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
      ]),
      createPanel(AppPanels.ShoppingCart, '/ShoppingCart', [
        createModal(AppModals.BaseProductItemModal, '/ShoppingCart/BaseProductItemModal'),
      ]),
      createPanel(AppPanels.Documents, '/Documents', [
        createModal(AppModals.QrModal, '/Documents/QrModal')
      ]),
      createPanel(AppPanels.News, '/News', [
        createModal(AppModals.NewsModal, '/News/NewsModal'),
        createModal(AppModals.DeleteNewsModal, '/News/DeleteNewsModal')
      ]),
      createPanel(AppPanels.Bank, '/Bank', [
        createModal(AppModals.RequestModal, '/Bank/RequestModal')
      ]),
      createPanel(AppPanels.Stock, '/Stock', [
        createModal(AppModals.RequestModal, '/Stock/RequestModal')
      ]),
      createPanel(AppPanels.Construction, '/Construction', [
        createModal(AppModals.RequestModal, '/Construction/RequestModal')
      ]),
      createPanel(AppPanels.Residents, '/Residents')
    ]),
  ])
])

export const router = createHashRouter(routes.getRoutes());
