import React, { useEffect, useState } from 'react'
import { Command, getAllCommandsSubscribe } from '..';

const useCommands = () => {
    const [commands, setCommands] = useState<Command[]>([])

    useEffect(() => {
        getAllCommandsSubscribe((commands => setCommands(commands)))
    })

    return {commands}
}

export default useCommands;