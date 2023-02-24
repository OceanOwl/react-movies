import React from 'react';
import css from './SelectedFilm.css'

import {useSelector} from "react-redux";
import {Rating} from "@mui/material";

const SelectedFilm = () => {

    const {selectedMovie} = useSelector(state =>state.movies)

    // console.log(selectedMovie);

    return (
        <div>

            {selectedMovie &&
                <div className='selectedMovieContainer'>
                    <div className='secondContainer'>

                        <img src={"https://image.tmdb.org/t/p/w300" + selectedMovie.poster_path} alt="img"/>

                        <div className='infoBlock'>
                            <h2>{selectedMovie.title}</h2>
                            <span>{selectedMovie.overview}</span>
                            <Rating name="customized-10"
                                    value={selectedMovie.vote_average}
                                    precision={0.1}
                                    max={10}/>
                        </div>
                    </div>
                </div>

            }

        </div>
    );
};

export {SelectedFilm};