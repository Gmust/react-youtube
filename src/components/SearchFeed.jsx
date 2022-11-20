import React, {useEffect, useState} from 'react';
import {fetchFromApi} from "../service";
import {Box, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import Videos from "./Videos";

const SearchFeed = () => {

    const [videos, setVideos] = useState([]);
    const {searchTerm} = useParams();

    useEffect(() => {
        const fetchVideosBySearch = async () => {
            const videosData = await fetchFromApi(`search?part=snippet&q='${searchTerm}'`);
            setVideos(videosData?.items);
        };
        fetchVideosBySearch();
    }, [searchTerm])

    return (
        <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
            <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white'}}>
                Search results for: <span style={{color: '#F31503'}}>{searchTerm}</span> videos
            </Typography>


            <Videos videos={videos}/>
        </Box>
    );
};

export default SearchFeed;