import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux/slices/movieSlice";
import {Film} from "../Film/Film";

const Films = () => {
    const {movies, prev, next} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}))
    }, [dispatch, query])
    console.log(movies);
    return (
        <div>
            {movies.map(movie=><Film key={movie.id} movie={movie}/> )}
        </div>
    );
};

export {Films};