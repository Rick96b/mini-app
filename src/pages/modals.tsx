import { ModalRoot } from '@vkontakte/vkui'
import React from 'react'
import {
  useActiveVkuiLocation,
  useRouteNavigator,
} from '@vkontakte/vk-mini-apps-router'


// Modals
import UpdateRatingModal from './Rating/modals/UpdateRatingModal/UpdateRatingModal'
import { AppModals } from 'shared/routes/routes'
import { BaseItemModal, BaseItemToCommandModal } from 'widgets/base-list'
import { ProductItemModal } from 'widgets/base-products-list'
import { QrModal } from './Documents'
import { ReviewRequestModal } from 'widgets/requests-list'
import { DeleteNewsModal, NewsModal } from './News'


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
      <BaseItemModal id={AppModals.BaseItemModal} />
      <BaseItemToCommandModal id={AppModals.BaseItemToCommandModal} />
      <ProductItemModal id={AppModals.BaseProductItemModal} />
      <QrModal id={AppModals.QrModal} />
      <ReviewRequestModal id={AppModals.RequestModal} />
      <NewsModal id={AppModals.NewsModal} />
      <DeleteNewsModal id={AppModals.DeleteNewsModal} />
    </ModalRoot>
  )
}

export { Modals }