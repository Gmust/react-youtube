import React from 'react';
import {Box} from "@mui/material";
import Navbar from "./components/Navbar";
import Router from './components/Router'

const App = () => {
    return (
        <Box sx={{backgroundColor: '#000'}}>
          <Navbar/>
          <Router/>
        </Box>
    );
};

export default App;