import { Accordion, Panel, PanelHeader } from '@vkontakte/vkui'
import useCommands from 'entities/command/hooks/useCommands'
import { UserInfo } from 'entities/user'
import useUsers from 'entities/user/hooks/useUsers'
import React, { useMemo } from 'react'
import styles from './Residents.module.scss'
import ResidentCard from './ResidentCard/ResidentCard'

interface ResidentsProps {
    nav: string
}

const Residents:React.FC<ResidentsProps> = props => {
    const {
        nav
    } = props
    const {commands} = useCommands()
    const {users} = useUsers()


    const CommandsAndUsersCombination = useMemo(() => {
        let result: {commandName: string; users: UserInfo[]}[] = []
        commands.forEach(command => {
            result.push({
                commandName: command.name,
                users: users.filter(user => command.members.includes(user.id!))
            })
        })
        return result
    }, [commands, users])

    return (
        <Panel nav={nav}>
            <PanelHeader>Жители</PanelHeader>
            {CommandsAndUsersCombination.map(command =>
                <Accordion defaultExpanded={command.commandName === 'Администраторы' ? true : false}>
                    <Accordion.Summary>{command.commandName}</Accordion.Summary>
                    <Accordion.Content>
                        {command.users.map(resident => 
                            <ResidentCard command={command} resident={resident} />
                        )}
                    </Accordion.Content>
                </Accordion>
            )}

        </Panel>
    )
}

export default Residents