import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux/slices/movieSlice";
import {Film} from "../Film/Film";

const Films = () => {
    const {movies, page} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}))
    }, [dispatch, query])



    return (
        <div>
            {movies.map(movie=><Film key={movie.id} movie={movie}/> )}
            <div>
                <button disabled={+query.get('page')-1===0} onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}>Previous Page</button>
                <button onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}>Next Page</button>
            </div>
        </div>
    );
};

export {Films};