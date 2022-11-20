import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Box} from "@mui/material";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import {fetchFromApi} from "../service";

const ChannelDetail = () => {

    const [channelDetail, setChannelDetail] = useState()
    const [videos, setVideos] = useState([])
    const {id} = useParams();

    useEffect(() => {
        const fetchResults = async () => {

            const data = await fetchFromApi(`channels?part=snippet&id=${id}`);
            setChannelDetail(data?.items[0]);

            const videosData = await fetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`);
            setVideos(videosData?.items);
        };
        fetchResults();

    }, [id])

    return (
        <Box minHeight="95vh">
            <Box>
                <div
                    style={{
                        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,30,1) 55%, rgba(0,0,0,1) 100%)',
                        zIndex: 10,
                        height: '300px'
                    }}/>
                <ChannelCard channelDetail={channelDetail} marginTop={'-100px'}/>
                <Box display='flex' p='2'>
                    <Box sx={{mr: {sm: '100px'}}}/>
                    <Videos videos={videos}/>
                </Box>
            </Box>
        </Box>
    );
};

export default ChannelDetail;