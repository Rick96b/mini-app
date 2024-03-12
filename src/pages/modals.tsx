import { ModalRoot } from '@vkontakte/vkui'
import React from 'react'
import {
  useActiveVkuiLocation,
  useRouteNavigator,
} from '@vkontakte/vk-mini-apps-router'


// Modals
import UpdateRatingModal from './Rating/modals/UpdateRatingModal/UpdateRatingModal'
import { AppModals } from 'shared/routes/routes'
import EventModal from 'widgets/events-list/modals/EventModal'
import AddEventToCommand from 'widgets/events-list/modals/AddEventToCommand'
import AchievementModal from 'widgets/achievements-list/modals/AchievementModal'
import AddAchievementToCommand from 'widgets/achievements-list/modals/AddAchievementToCommand'


const Modals: React.FC = () => {
  const { modal } = useActiveVkuiLocation()
  const routeNavigator = useRouteNavigator()

  return (
    // ModalRoot - контейнер для модальных страниц и карточек
    // activeModal - текущая открытая модальная страница | undefind
    <ModalRoot 
      activeModal={modal}
      onClose={() => routeNavigator.hideModal()}
    >
      <UpdateRatingModal id={AppModals.UpdateRating} />
      <EventModal id={AppModals.Event}/>
      <AddEventToCommand id={AppModals.AddEvent} />
      <AchievementModal id={AppModals.Achievement} />
      <AddAchievementToCommand id={AppModals.AddAchievement} />
    </ModalRoot>
  )
}

export { Modals }