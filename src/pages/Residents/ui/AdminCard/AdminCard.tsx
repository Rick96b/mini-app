import { Avatar, Button, Link, Select } from '@vkontakte/vkui'
import { UserContext, UserInfo, changeUserRole } from 'entities/user'
import React, { useContext, useState } from 'react'

import styles from './AdminCard.module.scss'

interface AdminCardProps {
    resident: UserInfo
    command: {
        commandName: string,
        users: UserInfo[]
    }
}

const optionsForAdmins = ['Manager', 'Bank', 'Stock'].map(role => {
    return {
        label: role,
        value: role
    }
})


const AdminCard:React.FC<AdminCardProps> = props => {
    const {
        resident
    } = props
    const {user} = useContext(UserContext)
    const [role, setRole] = useState(resident.role)

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
                <div className={styles.roleHandlers} 
                    onClick={(event) => {
                        event.stopPropagation()
                        event.preventDefault()
                    }}
                >
                    <Select
                        value={role}
                        onChange={(event) => 
                            setRole(event.target.value as "Manager" | "Bank" | "Stock" | "User" | undefined)
                        }
                        options={optionsForAdmins}
                    />
                    <Button 
                        onClick={() => {
                            changeUserRole(resident.id!, role!)
                        }}
                    >
                        Изменить роль
                    </Button>
                </div>
            }
        </Link>
    )
}

export default AdminCard