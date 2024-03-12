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
  RatingView = 'RatingView',
  Login = '/login',
  Achievements = '/achievements'
}

export enum AppModals {
  UpdateRating = 'UpdateRating',
  Event = 'Event',
  AddEvent = 'AddEvent',
  Achievement = 'Achievement',
  AddAchievement = 'AddAchievement',
}

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(AppView.Main, [
      createPanel(AppPanels.Rating, '/', [
        createModal(AppModals.UpdateRating, '/UpdateRating')
      ]),
      createPanel(AppPanels.RatingView, '/RatingView'),
      createPanel(AppPanels.Login, '/login'),
      createPanel(AppPanels.Achievements, '/achievements', [
        createModal(AppModals.Event, '/achievements/Event'),
        createModal(AppModals.AddEvent, '/achievements/Event/AddEvent'),
        createModal(AppModals.Achievement, '/achievements/Achievement'),
        createModal(AppModals.AddAchievement, '/achievements/Achievement/AddAchievement'),
      ]),
    ]),
  ])
])

export const router = createHashRouter(routes.getRoutes());
