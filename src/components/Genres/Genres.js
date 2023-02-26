import React, {useEffect} from 'react';

import css from './Genres.module.css'

import {useDispatch, useSelector} from "react-redux";
import {genreActions} from "../../redux/slices/genreSlice";
import {NavLink} from "react-router-dom";

const Genres = () => {

    const dispatch = useDispatch();
    const {genres: {genres}} = useSelector(state => state.genres);


    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch])

    console.log(genres);
    return (
        <div className={css.genresContainer}>

            <span>

            {genres &&
                genres.map(genre => <div key={genre.id}><NavLink to={'MovieByGenre'} state={{
                    id: genre.id,
                    name: genre.name
                }}>{genre.name}</NavLink></div>)

            }
            </span>

        </div>
    );
};

export {Genres};