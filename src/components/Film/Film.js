import React from 'react';
import {useDispatch} from "react-redux";
import css from './Film.module.css'

import {movieActions} from "../../redux/slices/movieSlice";
import {NavLink} from "react-router-dom";

const Film = ({movie}) => {
    const {id, title, poster_path} = movie


    const dispatch = useDispatch();

    console.log(movie);

    return (
        <div className={css.Film}>
            <div className={'secondDiv'}>


                <div className={'movieCard'}>
                    <div>id:{id}</div>
                    <img className={'poster'} src={"https://image.tmdb.org/t/p/w300" + poster_path} alt="img"/>
                    {/*<div onClick={()=>dispatch(movieActions.setSelectedMovie(movie))}>title:{title}</div>*/}
                    <NavLink onClick={() => dispatch(movieActions.setSelectedMovie(movie))}
                             to={'MoviePage'}>{title}</NavLink>
                </div>
            </div>
        </div>
    );
};

export {Film};