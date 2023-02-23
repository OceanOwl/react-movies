import React from 'react';

import {useSelector} from "react-redux";
import {Rating} from "@mui/material";

const SelectedFilm = () => {

    const {selectedMovie} = useSelector(state =>state.movies)

    // console.log(selectedMovie);

    return (
        <div>

            {selectedMovie &&
                <div>
                    <img src={"https://image.tmdb.org/t/p/w300" + selectedMovie.poster_path} alt="img"/>
                    <span>{selectedMovie.overview}</span>
                    <Rating name="customized-10"
                            value={selectedMovie.vote_average}
                            precision={0.1}
                            max={10} />


                </div>

            }

        </div>
    );
};

export {SelectedFilm};