import React from 'react';
import {useDispatch} from "react-redux";
import css from './Film.module.css'

import {movieActions} from "../../redux/slices/movieSlice";
import {Link} from "react-router-dom";

const Film = ({movie}) => {
    const {id, title, poster_path} = movie


    const dispatch = useDispatch();

    console.log(movie);

    return (
        <div className={css.Film}>
            <div className={'secondDiv'}>


                <div className={'movieCard'}>
                    <img className={'poster'} src={"https://image.tmdb.org/t/p/w300" + poster_path} alt="img"/>
                    <Link onClick={() => dispatch(movieActions.setSelectedMovie(movie))}
                          to={`${id}`}>{title}</Link>

                </div>
            </div>
        </div>
    );
};

export {Film};