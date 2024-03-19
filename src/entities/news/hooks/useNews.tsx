import React, { useEffect, useState } from 'react'
import { News, getAllNewsSubscribe } from '..';

const useNews = () => {
    const [news, setNews] = useState<News[]>([])

    useEffect(() => {
        getAllNewsSubscribe((news => setNews(news)))
    })

    return {news}
}

export default useNews;