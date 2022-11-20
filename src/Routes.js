import {SEARCH_FEED_ROUTE,FEED_ROUTE,CHANNEL_DETAIL_ROUTE,VIDEO_DETAIL_ROUTE} from './utils/consts'
import ChannelDetail from './components/ChannelDetail'
import Feed from './components/Feed'
import SearchFeed from './components/SearchFeed'
import VideoDetail from './components/VideoDetail'


export const routes = [
    {
        path: CHANNEL_DETAIL_ROUTE + '/:id',
        Component: ChannelDetail
    },
    {
        path: FEED_ROUTE,
        Component: Feed
    },
    {
        path: SEARCH_FEED_ROUTE + '/:searchTerm',
        Component: SearchFeed
    },
    {
        path: VIDEO_DETAIL_ROUTE + '/:id',
        Component: VideoDetail
    }
]