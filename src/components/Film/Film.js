import React from 'react';
import {useDispatch} from "react-redux";

import {movieActions} from "../../redux/slices/movieSlice";
import {NavLink} from "react-router-dom";

const Film = ({movie}) => {
    const {id, title, poster_path}=movie


    const dispatch = useDispatch();

    console.log(movie);

    return (
        <div>
            <div>id:{id}</div>
            {/*<img src="poster_path" alt="img"/>*/}
            {/*<div onClick={()=>dispatch(movieActions.setSelectedMovie(movie))}>title:{title}</div>*/}
            <NavLink onClick={()=>dispatch(movieActions.setSelectedMovie(movie))} to={`${id}`}>{title}</NavLink>
        </div>
    );
};

export {Film};