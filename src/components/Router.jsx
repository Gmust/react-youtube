import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from '../Routes'

const Router = () => {
    return (
        <Routes>
            {routes.map(({Component, path}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
        </Routes>
    );
};

export default Router;