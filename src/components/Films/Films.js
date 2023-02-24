import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import css from './Films.module.css'

import {movieActions} from "../../redux/slices/movieSlice";
import {Film} from "../Film/Film";
import DarkModeToggle from "react-dark-mode-toggle";

const Films = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (localStorage.getItem("dark") === "true") {
            document.body.classList.add("dark");
            return true;
        } else {
            return false;
        }
    });

    const setDarkMode = (x) => {
        localStorage.setItem("dark", x);
        setIsDarkMode(x);
        document.body.classList.toggle("dark");
    };


    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}))
    }, [dispatch, query])


    return (
        <div>
            <div className="App">
                <DarkModeToggle
                    onChange={setDarkMode}
                    checked={isDarkMode}
                    size={80}
                    speed={3}
                />
        <div className={css.Films}>
            {movies.map(movie => <Film key={movie.id} movie={movie}/>)}
        </div>

    <div className='buttonsContainer'>
                <div className='buttons'>
                    <button disabled={+query.get('page') - 1 === 0}
                            onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>Previous Page
                    </button>
                    <button disabled={+query.get('page') - 500 === 0} onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>Next Page</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export {Films};