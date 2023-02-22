import React from 'react';
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";


const MoviePage = () => {

    const {selectedMovie} = useSelector(state =>state.movies)


    return (
        <div>
            {selectedMovie &&
                <div>{selectedMovie.id}-----{selectedMovie.overview}</div>
            }
        </div>
);
};

export
    {
        MoviePage
    }
;