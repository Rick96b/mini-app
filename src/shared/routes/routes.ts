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
  RatingView = 'RatingView'
}

export enum AppModals {
  UpdateRating = 'UpdateRating'
}

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(AppView.Main, [
      createPanel(AppPanels.Rating, '/', [
        createModal(AppModals.UpdateRating, '/UpdateRating')
      ]),
      createPanel(AppPanels.RatingView, '/RatingView')
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());
