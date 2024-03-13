import { Button, FormItem, ModalCard, Select } from '@vkontakte/vkui'
import React, { useEffect, useState } from 'react'

import styles from './AddItemToCommand.module.scss'
import { Command, getAllCommands } from 'entities/command'
import { Events } from 'entities/events'
import { useMetaParams } from '@vkontakte/vk-mini-apps-router'
import { BaseListItem, SubmitFunctions, itemsType } from '../model/baseListLayoutModel'

interface AddItemToCommandProps {
    id: string
}


const AddItemToCommand:React.FC<AddItemToCommandProps> = props => {
    const {
        id
    } = props

    const [commandName, setCommandName] = useState('')
    const params = useMetaParams<{item: BaseListItem, itemsType: itemsType}>()
    const [commands, setCommands] = useState<Command[]>([])

    useEffect(() => {
        getAllCommands().then(response => setCommands(response))
    },[])

    return (
        <ModalCard id={id}>
            <FormItem
                htmlFor="command"
                top="Команда"
            >
                <Select  
                    options={commands.map(command => {return {label: command.name, value: command.name}})}
                    value={commandName}
                    onChange={event => setCommandName(event.target.value)}
                />
            </FormItem>
            <Button 
                onClick={() => {
                    SubmitFunctions[params?.itemsType as itemsType](params?.item as BaseListItem, commandName)
                }}
            >
                Назначить
            </Button>
        </ModalCard>
    )
}

export default AddItemToCommand