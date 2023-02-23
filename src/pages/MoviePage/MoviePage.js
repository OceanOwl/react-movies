import React from 'react';

import {SelectedFilm} from "../../components";
import {Outlet} from "react-router-dom";


const MoviePage = () => {


    return (
        <div>
            <Outlet/>
            <SelectedFilm/>
        </div>
    );
};

export {
    MoviePage
};
