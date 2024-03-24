import { Avatar, Button, Link, Select } from '@vkontakte/vkui'
import React, { useContext, useState } from 'react'
import styles from './ResidentCard.module.scss'
import { UserContext, UserInfo, changeUserGroup, changeUserRole } from 'entities/user'
import { changeUserCommand, getAllCommandsNames } from 'entities/command'

interface ResidentCardProps {
    resident: UserInfo
    command: {
        commandName: string,
        users: UserInfo[]
    }
}


const optionsForUsers = (await getAllCommandsNames())
.map(commandName => {return {
    label: commandName,
    value: commandName
}})


const ResidentCard:React.FC<ResidentCardProps> = props => {
    const {
        resident
    } = props
    const {user} = useContext(UserContext)
    const [command, setCommand] = useState(resident.group)

    return (
        <Link 
            className={styles.resident}
            href={`https://vk.com/id${resident.id}`}
        >
            <div className={styles.residentInfo}>
                <Avatar src={resident.imageLink} />
                <p>{resident.name}</p>
            </div>
            {
                user?.role === 'Manager' &&
                <div 
                    className={styles.roleHandlers} 
                    onClick={(event) => {
                        event.stopPropagation()
                        event.preventDefault()
                    }}
                >
                    <Select
                        value={command}
                        onChange={(event) => {
                            setCommand(event.target.value)
                        }}
                        options={optionsForUsers}
                    />
                    <Button 
                        onClick={() => {
                            changeUserGroup(resident.id!, command!)
                            changeUserCommand(resident.id!, resident.group!, command!)
                        }}
                    >
                        Изменить роль
                    </Button>
                </div>
            }
        </Link>
    )
}

export default ResidentCard