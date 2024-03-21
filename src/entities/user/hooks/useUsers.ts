import React, { useEffect, useState } from 'react'
import { UserInfo, getAllUsersSubscribe } from '..';

const useUsers = () => {
    const [users, setUsers] = useState<UserInfo[]>([])

    useEffect(() => {
        getAllUsersSubscribe(users => setUsers(users))
    })

    return {users}
}

export default useUsers;