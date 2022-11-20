import React from 'react';
import {useState, useEffect} from "react";
import {Box, Stack, Typography} from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import {fetchFromApi} from "../service";

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    useEffect( () => {
        fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => {
                setVideos(data.items)
            })
    }, [selectedCategory])


    return (
        <Stack sx={{flexDirection: {sx: 'column', md: 'row'}}}>
            <Box sx={{borderRight: '1px solid #3d3d3d', height: {sx: 'auto', md: '92vh'}, px: {sx: 0, md: 2}}}>
                <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                <Typography className='copyright' variant='body2' sx={{mt: 1.5, color: '#fff'}}>
                    Copyright 2022 ReflexiveTube
                </Typography>
            </Box>

            <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
                <Typography variant='h4' fontWeight="bold" mb={2} sx={{color: 'white'}}>
                    {selectedCategory} <span style={{color: 'red'}}>Videos</span>
                </Typography>
                <Videos videos={videos}/>
            </Box>
        </Stack>
    );
};

export default Feed;