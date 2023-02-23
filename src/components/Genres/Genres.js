import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {genreActions} from "../../redux/slices/genreSlice";
import {HomePage} from "../../pages";

const Genres = () => {
    const {genres}=useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(genreActions.getAll)
    },[dispatch])

    return (
        <div>
            {genres.map(item=><Genres key={item.id} item={item}/>)}
            {/*// <div>{genres.name}</div>}*/}
        </div>
    );
};

export {Genres};