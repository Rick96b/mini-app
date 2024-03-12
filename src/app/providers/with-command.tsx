import bridge from "@vkontakte/vk-bridge";
import { Command } from "entities/command";
import { UserContext, UserInfo, getUserById } from "entities/user";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Loader } from 'shared/components'

export const WithUser = ({children}: {children: React.ReactChild}) => {
    const [command, setCommand] = useState<Command | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
		async function fetchData() {
            setLoading(true)
			const userId = (await bridge.send('VKWebAppGetLaunchParams')).vk_user_id
            const userData = await getUserById(userId.toString())

            setLoading(false)
		}
		fetchData();
	}, []);

    if(loading) return <Loader />

    return (
       <></>
    )
}
