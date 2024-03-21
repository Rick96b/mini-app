import { Avatar, Button, Link, Select } from '@vkontakte/vkui'
import React, { useContext, useState } from 'react'
import styles from './ResidentCard.module.scss'
import { UserContext, UserInfo, changeUserRole } from 'entities/user'

interface ResidentCardProps {
    resident: UserInfo
    command: {
        commandName: string,
        users: UserInfo[]
    }
}

const ResidentCard:React.FC<ResidentCardProps> = props => {
    const {
        resident,
        command
    } = props
    const {user} = useContext(UserContext)
    const [role, setRole] = useState(user?.role)

    return (
        <Link 
            className={styles.resident}
            href={`https://vk.com/id${resident.id}`}
        >
            <Avatar src={resident.imageLink} />
            <p>{resident.name}</p>
            {
                command.commandName === 'Администраторы' && 
                user?.role === 'Manager' &&
                <div className={styles.roleHandlers} onClick={(event) => {
                    event.stopPropagation()
                    event.preventDefault()
                }}
                >
                    <Select
                        value={role}
                        onChange={(event) => {
                            setRole(event.target.value as 'User' | 'Manager'| 'Bank'| 'Stock')
                        }}
                        options={
                            ['User', 'Manager', 'Bank', 'Stock'].map(role => {
                                return {
                                    label: role,
                                    value: role
                                }
                            })
                        }
                    />
                    <Button 
                        onClick={() => changeUserRole(user.id!, role || '')}
                    >
                        Изменить роль
                    </Button>
                </div>
            }
        </Link>
    )
}

export default ResidentCard