import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import ReactPlayer from "react-player";
import {Typography, Box, Stack} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import Videos from "./Videos";
import {fetchFromApi} from "../service";

const VideoDetail = () => {
    const [video, setVideo] = useState([]);
    const [videos, setVideos] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const fetchVideos = async () => {
            const video = await fetchFromApi(`videos?part=snippet,statistic&id=${id}`);
            setVideo(video?.items[0])

            const videos = await fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            setVideos(videos.items)
        }
        fetchVideos();
    }, [id])


    if (!video?.snippet) return 'Loading...'
    if (!video?.statistics) return 'Loading...'

    return (
        <Box minHeight='95vh'>
            <Stack direction={{xs: 'column', md: 'row'}}>
                <Box flex={1}>
                    <Box sx={{width: '100%', position: 'sticky', top: '70px'}}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className={'react-player'}
                                     controls/>
                        <Typography color="#fff" variant='h5' fontSize={'20px'} fontWeight='bold' p={2}>
                            {video?.snippet?.title}
                        </Typography>
                        <Stack direction='row' justifyContent='space-between' sx={{color: '#fff'}} py={1} px={2}>
                            <Link to={`/channel/${video.snippet.channelId}`}>
                                <Typography variant={{sm: 'subtitle1', md: 'h6'}} color='#fff'>
                                    {video?.snippet?.channelTitle}
                                    <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}}/>
                                </Typography>
                            </Link>
                            <Stack alignItems="center" direction='row' gap='20px'>
                                <Typography variant="body1" sx={{opacity: 0.7}}>
                                    {parseInt(video?.statistics.viewCount).toLocaleString()} views!
                                </Typography>
                                <Typography variant="body1" sx={{opacity: 0.7}}>
                                    {parseInt(video?.statistics.likeCount).toLocaleString()} likes!
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box px={2} py={{md: 1, xs: 5}} justifyContent='center' alignItems='center'>
                    <Videos videos={videos} direction='column'/>
                </Box>
            </Stack>
        </Box>
    );
};

export default VideoDetail;