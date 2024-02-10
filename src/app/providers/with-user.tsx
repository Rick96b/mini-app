import bridge from "@vkontakte/vk-bridge";
import { UserContext, UserInfo, getUserById } from "entities/user";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Loader } from 'shared/components'
import { db } from "shared/firebase";

export const WithUser = ({children}: {children: React.ReactChild}) => {
    const [user, setUser] = useState<UserInfo | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
		async function fetchData() {
            setLoading(true)
			const userId = (await bridge.send('VKWebAppGetLaunchParams')).vk_user_id
            const userData = await getUserById(userId.toString())
            setUser(userData ? userData : null)
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
