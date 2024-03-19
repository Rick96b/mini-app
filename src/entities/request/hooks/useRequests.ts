import { useEffect, useState } from 'react'
import { Request, getAllRequestsSubscribe } from '..'

const useRequests = () => {
    const [requests, setRequests] = useState<Request[]>([])

    useEffect(() => {
        getAllRequestsSubscribe((requests => setRequests(requests)))
    })

    return {requests}
}

export default useRequests;