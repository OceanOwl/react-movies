import React from 'react';

import {Films} from "../../components";
import {Outlet} from "react-router-dom";

const MoviesPage = () => {

    return (
        <div>
            <Films/>
            <Outlet/>
        </div>
    );
};

export {MoviesPage};