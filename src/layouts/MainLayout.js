import React from 'react';

import {Footer, Header} from "../components";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            {/*<MoviesPage/>*/}
            <Outlet/>
            <Footer/>
        </div>
    );
};

export
{
    MainLayout
}
    ;