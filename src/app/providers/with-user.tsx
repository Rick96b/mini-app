import bridge from '@vkontakte/vk-bridge';
import { UserContext, UserInfo, getUserById } from 'entities/user';
import { ReactNode, useEffect, useState } from 'react'
import { Loader } from 'shared/components';


const WithUser = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserInfo | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchData() {
        setLoading(true)
        const userId = (await bridge.send('VKWebAppGetLaunchParams')).vk_user_id
        const userData = await getUserById(userId.toString())
        setUser(userData ? {...userData, id:userId} : null)
        setLoading(false)
        }
        fetchData();
    }, []);

    if(loading) return <Loader />

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default WithUser