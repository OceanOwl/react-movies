import React from 'react';
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {HomePage, MoviePage, MoviesPage, NotFoundPage} from "./pages";
import {Genres} from "./components";


const App = () => {


    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}>
                        <Route path={':id'} element={<MoviePage/>}/>
                    </Route>
                    <Route path={'genres'} element={<Genres/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};
