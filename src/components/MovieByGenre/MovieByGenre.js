import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useSearchParams} from "react-router-dom";
import {genreActions} from "../../redux/slices/genreSlice";

const MovieByGenre = () => {

    const dispatch = useDispatch();

    const {state: {id, name}} = useLocation();

    const {genres} = useSelector(state => state.genres);
    const [query, setQuery] = useSearchParams({page: '1', with_genres: id});

useEffect(()=>{
    dispatch(genreActions.getById({page:query.get('page'), with_genres:query.get('with_genres')}))
    setQuery(query=>({page:query.get('page'), with_genres:query.get('with_genres')}))

},[dispatch, setQuery, id, query])
    return (
        <div>
            <button onClick={()=>{setQuery(query=>({page:+query.get('page')+1, with_genres:query.get('with_genres')}))}}></button>
        </div>
    );
};

export {MovieByGenre};