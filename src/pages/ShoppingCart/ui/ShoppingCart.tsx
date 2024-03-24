import { Button, FixedLayout, Group, IconButton, Panel, PanelHeader } from '@vkontakte/vkui'
import React, { useContext } from 'react'
import { BaseProductsList } from 'widgets/base-products-list'
import styles from './ShoppingCart.module.scss'
import { StoreContext } from 'shared/storeContext/storeContext'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { Icon24ArrowLeftOutline } from '@vkontakte/icons'
import { UserContext } from 'entities/user'
import { observer } from 'mobx-react-lite'
import { AppPanels } from 'shared/routes/routes'

interface ShoppingCartProps {
    nav: string
}

const ShoppingCart:React.FC<ShoppingCartProps> = props => {
    const {
        nav
    } = props
    const {user} = useContext(UserContext)
    const router = useRouteNavigator()
    const rootStore = useContext(StoreContext)

    return (
        <Panel className={styles.cart} nav={nav}>
            <PanelHeader
                before={
                    <IconButton 
                        className={styles.backButton}
                        onClick={() => router.back()}
                    >
                        <Icon24ArrowLeftOutline />
                    </IconButton>
                }
            >
                Корзина
            </PanelHeader>
            <Group header={<h2>Предметы</h2>} className={styles.buildings}>
                <BaseProductsList
                    items={rootStore?.requestStore.request.itemsRequest?.items || []}
                    itemsType='Item'
                    isDelete={true}
                />
            </Group>
            <Group header={<h2>Здания</h2>} className={styles.buildings}>
                <BaseProductsList
                    items={rootStore?.requestStore.request.buildingsRequest?.buildings || []}
                    itemsType='Building'
                    isDelete={true}
                />
            </Group>
            <FixedLayout vertical='bottom' className={styles.handlers}>
                <Button
                    onClick={() => {
                        rootStore?.requestStore.sendRequest(user?.group || '')
                        rootStore?.requestStore.cleanStore()
                        router.push(AppPanels.Store)
                    }}
                    className={styles.sendRequest}
                >
                    Отправить заявку
                </Button>
            </FixedLayout>
        </Panel>
    )
}

export default observer(ShoppingCart)