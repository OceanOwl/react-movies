import React from 'react';

import {useSelector} from "react-redux";

const SelectedFilm = () => {

    const {selectedMovie} = useSelector(state =>state.movies)

    console.log(selectedMovie);

    return (
        <div>

            {selectedMovie &&
                <div>
                    <img src={"https://image.tmdb.org/t/p/w300" + selectedMovie.poster_path} alt="img"/>
                    <p>{selectedMovie.overview}</p>


                </div>

            }

        </div>
    );
};

export {SelectedFilm};