import { ModalRoot } from '@vkontakte/vkui'
import React from 'react'
import {
  useActiveVkuiLocation,
  useRouteNavigator,
} from '@vkontakte/vk-mini-apps-router'


// Modals
import UpdateRatingModal from './Rating/modals/UpdateRatingModal/UpdateRatingModal'
import { AppModals } from 'shared/routes/routes'
import BuildingModal from 'widgets/shopping-cart/modals/BuildingModal/BuldingModal'
import { BaseItemModal, BaseItemToCommandModal } from 'widgets/base-list'


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
      <BuildingModal id={AppModals.Building} />
      <BaseItemModal id={AppModals.BaseItemModal} />
      <BaseItemToCommandModal id={AppModals.BaseItemToCommandModal} />
    </ModalRoot>
  )
}

export { Modals }